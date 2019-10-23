var fs = require('fs'); 

exports.writeToTempStorage = function(data)
{
    data =  data + '\n';
    var file = fs.appendFile('tempStorage.txt',JSON.stringify(data),(err) => {
        if(err)
            throw err;
        console.log('data written in file');
    });
}


exports.readFromFile = function()
{
    console.log("data fro file");
  
    fs.readFile('tempStorage.txt', function(err, data) {
        console.log(data);
        console.log(JSON.parse(data));
      });
    
}