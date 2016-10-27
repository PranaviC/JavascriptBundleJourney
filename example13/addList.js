import add from "./add";

export default function addList(list, memo){
  list.forEach(function (item){
    memo = add(item, memo);
  });
  return memo;
}