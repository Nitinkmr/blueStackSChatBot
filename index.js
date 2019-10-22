const discord = require('discord.js');

const token = "NjM2MDc1NzQ2NjUzMjQxMzU1.Xa7Vig.DBfUy34TKClYBRiwLKOvckI9zSY";
//"NjM2MDc1NzQ2NjUzMjQxMzU1.Xa6W6g.ZRl51ZupK_KSWEGioSUi9HU_zA8";
var mongoose = require('mongoose')

const client = new discord.Client();
var LinksModel = require('./LinksModel');
var service = require('./service');
var conn = "mongodb://nitin:passpass1@ds137368.mlab.com:37368/trendingapps";

mongoose.connect(conn, { useMongoClient: true})
.then(()=> { console.log(`Succesfully Connected to the
        Mongodb Database  at URL : mongodb://127.0.0.1:27017/trendingApps`)})
.catch(()=> { console.log('Error Connecting to the Mongob Database at URL : mongodb://127.0.0.1:27017/trendingApps')})


client.on('ready',() => {
    console.log('bot connected');
   
});


client.on('message',(msg) =>{
    if(msg != null && msg.content === 'hi')
        msg.channel.send(`hey ${msg.author}`);
    else {
        var msgTextOne = msg.content.split(" ")[0];
        var msgTextTwo = msg.content.split(" ")[1];
        if(msgTextOne === '!google')
        {
            service.scrape(msg,msgTextTwo);
        }else if(msgTextOne === '!recent')
        {
            if(msg.content.split(" " ).length <=2)
            {
                LinksModel.find({}).distinct('keyWord').exec(function(err,res){
                    if(err) throw err;
                    if(res.length === 0)
                    {
                        msg.channel.send("No Result found");
                    }else
                    {
                        res = res.slice(res.length-2,res.length);  
                        var final = [];
                        for(var i in res)
                        {
                            if( res[i] != 'undefined')
                                final.push(res[i]);
                        }
                        msg.channel.send("Recent games:   \n" + final.join("\n"));   
                    }
                   
                });
            }else
            {
                var text = msg.content.split(" ")[2];
                LinksModel.find({'keyWord':text}).sort('-date').distinct('url').exec(function(err,res){
                    if(res.length === 0)
                    {
                        msg.channel.send("No Result found");
                    }else
                    {
                        res = res.slice(0,2);
                        msg.channel.send("Recent searches for your query : " + text + "  \n" + res.join("\n"));
         
                    }
                });
            }
        }       
    }
})




client.login(token);

