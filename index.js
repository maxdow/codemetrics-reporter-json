"use strict";
const fs = require("fs");

const defaultOptions = {
  output : "out.json",
  prettify : false
};

module.exports = function(options={}) {
  Object.assign(options,defaultOptions);

  return {
    run : function(data){
      var output = options.prettify ? JSON.stringify(data,null," ") : JSON.stringify(data) ;

      fs.writeFile(options.output,output, function(err) {
          if(err) {
            return console.log(err);
          }
      });

    }
  }
}