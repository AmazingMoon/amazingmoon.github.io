---
date: '2021-01-21'
---


# 告别if else

## 逻辑运算

### ||

```js
let a = obj || '-';
```

等同于

```js
let a;
if (a === 0 || a === null || a === undefined || a === '' || a === false) {
    a = '-';
} else {
    a = obj;
}
```

### ??

```js
let a = obj ?? '-';
```

等同于

```js
let a;
if (a === null || a === undefined) {
    a = '-';
} else {
    a = obj;
}
```

### &#33;&#33;

```js
let a = '';
if (!!obj) {
    a = obj.name;
}
```

等同于

```js
let a = '';
if (obj !== null && obj !== undefined && obj != '') {
    a = obj.name;
}
```

### 三目运算

```js
let a = isTrump ? 'disappointing' : 'Excited!';
```

等同于

```js
let a;
if (isTrump) {
    a = 'disappointing';
} else {
    a = 'Excited!';
}
```

## 简化多重、嵌套判断

### Array.includes

```js
const result = ['a', 'b', 'c', 'd', 'e'];
if (result.includes('a')) console.log('!');
```

等同于

```js
if (param === 'a' || param === 'b' || param === 'c') {
    console.log('!');
}
```
