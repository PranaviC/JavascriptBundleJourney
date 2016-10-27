var add = require("./add");

 function addList(list, memo){
        list.forEach(function (item){
          memo = add(item, memo);
        });
        return memo;
      }
	  
module.exports = addList;