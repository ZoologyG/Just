var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err){
     throw err
    // console.log(err);
     
    
   }
   console.log(data.toString());
});
console.log("程序执行完毕");