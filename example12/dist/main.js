function add(a, b){
  return a + b;
}

function addList(list, memo){
  list.forEach(function (item){
    memo = add(item, memo);
  });
  return memo;
}

function sum(list){
  return addList(list, 0);
}

var numbers = [1, 2, 3];
var result = sum(numbers);

var outputElement = document.getElementById("output");
outputElement.innerHTML = result;