var config = {
    db:{
        connection:{
            url : "mongodb://nitin:passpass1@ds137368.mlab.com:37368/trendingapps"
        }
    },
    server:{
        port:8080
    },
    google:{
        url:"https://www.google.com/search?q="
    },
    tokens:{
        discordapp:"NjM2MDc1NzQ2NjUzMjQxMzU1.Xa7gWQ.Wl8KyL3czMqIU9R9WbQ9DiO3L0E"
    },
    bot:{
        name:"bluestackNitinApplication"
    }

};

// config.db.connection.url="mongodb://nitin:passpass1@ds137368.mlab.com:37368/trendingapps";
// config.server.port=8080;
// config.google.scrape.url="https://www.google.com/search?q="
// config.discordapp.token="NjM2MDc1NzQ2NjUzMjQxMzU1.Xa7gWQ.Wl8KyL3czMqIU9R9WbQ9DiO3L0E";
module.exports = config;