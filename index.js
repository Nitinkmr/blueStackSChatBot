const discord = require('discord.js');

const client = new discord.Client();
const properties = require('./properties/application.properties');
var discordService = require('./services/discordService');

const discordUserToken = properties.tokens.discordapp;

client.login(discordUserToken);
client.on('ready',() => {
    console.log('bot connected');
});

client.on('message',(msg) =>{
    if(msg != null && msg.content != null)
    {
        var query = msg.content;
        switch(query.split(" ")[0])
        {
            case 'hi' :
                    if(query.split(" ").length > 1)
                        msg.channel.send('Invalid Command. Please try again with valid command.');
                    else
                        msg.channel.send(`hey ${msg.author}`);
                    break;
            case '!google':
                    var searchKeyword = query.split(" ").slice(1,query.length);
                    if(searchKeyword == null || searchKeyword === '' )
                        msg.channel.send('Empty search query. Please try again with valid query.');
                    else
                        discordService.scrape(msg,searchKeyword.join(" "));
                    break;
            case '!recent':
                    var searchKeyword = query.split(" ")[1];
                    if(searchKeyword == null )
                        discordService.getAllRecent(msg)
                    else
                        discordService.getRecentForQuery(msg);
                    break;
             default:
                    if(msg.author.username != properties.bot.name)
                        msg.channel.send('Invalid Command. Please try again with valid command.');
                    break;
        }   
    }
});






