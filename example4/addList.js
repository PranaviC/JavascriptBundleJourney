 FunctionalUtils.addList = function(list, memo){
        list.forEach(function (item){
          memo = FunctionalUtils.add(item, memo);
        });
        return memo;
      }