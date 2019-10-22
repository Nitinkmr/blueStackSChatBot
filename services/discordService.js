var request = require('request');
var cheerio = require('cheerio');
var searchModel = require('../models/searchModel');
const properties = require('../properties/application.properties');

exports.getAllRecent = async function(msg)
{ 
    searchModel.find({}).sort('-date').exec(function(err,res){
            if(err) throw err;
            if(res.length == 0)
                msg.channel.send("No Result found");
            else
            {        
                var  map = new Map();
                var count = 0;
                for(var i=0;i<res.length;i++)
                {
                    if(!map.has(res[i]['keyWord']))
                    {
                        map.set(res[i]['keyWord'],true);
                        count++;
                    }
                    if(count == 2)
                        break;
                }
                var final = [];
                for (var entry of map.entries()) {
                        final.push(entry[0]);
                 
                }
                msg.channel.send("Recent searches   \n" + final.join("\n"));   
            }
           
        });
    
}

exports.getRecentForQuery = function(msg){
  
        var text = msg.content.split(" ")[1];
        searchModel.find({'keyWord': new RegExp(text, 'i')}).distinct('keyWord').exec(function(err,res){
            if(res.length === 0)
                msg.channel.send("No Result found");
            else
                msg.channel.send("Your search query " + text + " matches these past searches: \n" + res.join("\n"));
        });
    
}
exports.scrape = async function(msg,searchQuery)
{
    url = properties.google.url + searchQuery;
    await request(url,function(error,response,html){
        if(error)
            throw error;
        var content = cheerio.load(html);   
        var div = content('.kCrYT');
        var result = [];
        for(var index in div)
        {
            if(div[index] != null && div[index]['children']!=null 
                && div[index]['children'].length > 0
                && div[index]['children'][0] != null
                && div[index]['children'][0]['attribs'] != null
                && div[index]['children'][0]['attribs']['href'] != null )
             {
                 var tempUrl = div[index]['children'][0]['attribs']['href'];

                 tempUrl = tempUrl.substr(7,tempUrl.length);
                 console.log(tempUrl);
                result.push(tempUrl + "\n");
             }  
             
             if(result.length == 5)
                break;
        }   
       
        msg.channel.send("Here is what google says about your query : \n" + result.join("\n"));
        for(var index in result)
        {
            var newUrl = new searchModel({
                url : result[index],
                date : Date.now(),
                keyWord:searchQuery
            });
            newUrl.save();
        }
       
        return result;
    });
}

