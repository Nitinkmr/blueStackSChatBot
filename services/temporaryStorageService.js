// var fs = require('fs'); 
// var searchModel = require('../models/searchModel');
// exports.writeToTempStorage = function(data)
// {
//     data =  data + ',';
//     var file = fs.appendFile('tempStorage.txt',data,(err) => {
//         if(err)
//             throw err;
//         console.log('data written in file');
//     });
// }


// exports.readFromFile =  async function(msg)
// {
//     console.log("data from file");
    
//     fs.readFile('tempStorage.txt','utf8', function(err, data) {
//         var res = [];
//         data = data.split('EOD');

//         for(var i=0;i<data.length;i++)
//         {
//             searchModel = data[i];
//             res.push(searchModel);
//         }
//         readFromFileUtil(msg,res);
    
//       });
// }

// readFromFileUtil = function(msg,res)
// {
//     console.log(res);
//     var  map = new Map();
//                 var count = 0;
//                 for(var i=0;i<res.length;i++)
//                 {
//                     console.log(res[i]);
//                     searchModel = res[i];
//                     res[i] =  res[i].replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ');
//                     console.log(JSON.parse(res[i]));
//                     if(!map.has(res[i][keyWord]))
//                     {
//                         map.set(res[i]['keyWord'],true);
//                         count++;
//                     }
//                     if(count == 2)
//                         break;
//                 }
//                 var final = [];
//                 for (var entry of map.entries()) 
//                         final.push(entry[0]);               
//                 console.log(final);
//                 msg.channel.send("Recent searches   \n" + final.join("\n"));   

// }