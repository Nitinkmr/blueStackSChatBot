/**
 *      Application level properties
 */

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
        discordapp:"NjM2MDc1NzQ2NjUzMjQxMzU1.Xa9QSw.pzsnieSwulDTBjS5_2RrjGS-434"
    },
    bot:{
        name:"bluestackNitinApplication"
    }

};

module.exports = config;