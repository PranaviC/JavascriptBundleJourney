FunctionalUtils = {};
FunctionalUtils.add = function (a, b){
  return a + b;
};
 FunctionalUtils.addList = function(list, memo){
        list.forEach(function (item){
          memo = FunctionalUtils.add(item, memo);
        });
        return memo;
      }
 FunctionalUtils.sum = function(list){
        return FunctionalUtils.addList(list, 0);
      }