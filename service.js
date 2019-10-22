var request = require('request');
var cheerio = require('cheerio');
var LinksModel = require('./LinksModel');
exports.scrape = async function(msg,text)
{
    url = "https://www.google.com/search?q="+text;
    await request(url,function(error,response,html){
       
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
        }   
        result = result.slice(0,5);
        msg.channel.send("Here is what google says about your query : \n" + result.join("\n"));
        for(var index in result)
        {
            var newUrl = new LinksModel({
                url : result[index],
                date : Date.now(),
                keyWord:text
            });
            newUrl.save();
        }
       
        return result;
    });
}

