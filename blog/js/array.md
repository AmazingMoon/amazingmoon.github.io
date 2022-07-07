---
date: 2019-10-21
---

# 总结JS数组用法

## forEach和map

> forEach会修改原来的数组，而map会得到一个新的数组并返回

```javascript
let arr = [1, 2, 3, 4, 5];
arr.forEach((num, index) => {
 return arr[index] = num * 2;
});
//arr = [2, 4, 6, 8, 10]
```

```javascript
let arr = [1, 2, 3, 4, 5];
let doubled = arr.map(num => {
 return num * 2;
});
//doubled = [2, 4, 6, 8, 10]
```

## findIndex, find, filter

```javascript
let arr = [{name: 'swk'}, {name: 'zwn'}, {name: 'swj'}];
let index = arr.findIndex(item => item.name === 'zwn');
//index = 1
```

``` javascript
let arr = [{name: 'swk'}, {name: 'zwn'}, {name: 'swj'}];
let obj = arr.find(item => item.name === 'zwn');
//obj = {name: 'zwn'}
```

``` javascript
let arr = [{name: 'swk'}, {name: 'zwn'}, {name: 'swj'}];
let newArr = arr.filter(item => item.name != 'zwn');
//newArr = [{name: 'swk'}, {name: 'swj'}]
```

## sort

```javascript
let yearArr = [2016, 2018, 2017, 2019];
yearArr.sort((a, b) => a - b);
//升序yearArr = [2016, 2017, 2018, 2019]
yearArr.sort((a, b) => b - a);
//降序yearArr = [2019, 2018, 2017, 2016]
```

## reduce

```javascript
//举个例子：按属性对object分类
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
let groupedPeople = groupBy(people, 'age');
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }
```

## every

>every测试一个数组内的所有元素是否都能通过某个指定函数的测试,它返回一个布尔值

```javascript
[12, 5, 8, 130, 44].every(x => x >= 10); 
//false
```

## some

>some测试数组中是不是至少有1个元素通过了被提供的函数测试,它返回的是一个Boolean类型的值

```javascript
[12, 5, 8, 1, 4].some(x => x > 10);
//true
```

## copyWithin

>copyWithin方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]
```
