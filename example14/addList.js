import add from "./add.js";

export default function addList(list, memo){
  list.forEach(function (item){
    memo = add(item, memo);
  });
  return memo;
}