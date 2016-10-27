define('add', [], function () {
    return function add(a, b) {
        return a + b;
    };
});
define('addList', ['add'], function (add) {
    return function addList(list, memo) {
        list.forEach(function (item) {
            memo = add(item, memo);
        });
        return memo;
    };
});
define('sum', ['addList'], function (addList) {
    return function sum(list) {
        return addList(list, 0);
    };
});
require(['./sum'], function (sum) {
    var numbers = [
        1,
        2,
        3
    ];
    var result = sum(numbers);
    var outputElement = document.getElementById('output');
    outputElement.innerHTML = result;
});
define('main', ['sum'], function () {
    return;
});