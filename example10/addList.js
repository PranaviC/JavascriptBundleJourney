define(["./add"], function (add){
	return function addList(list, memo){
		list.forEach(function (item){
			memo = add(item, memo);
		});
		return memo;
	};
});