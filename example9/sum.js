define(["./addList"], function (addList){
	return function sum(list){
		return addList(list, 0);
	};
});