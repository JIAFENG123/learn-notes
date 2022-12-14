# 代理模式

> 用户可以放心地请求代理，他只关心是否能得到想要的结果。在任何使用本体的地方都可以替换成使用代理。


## 虚拟代理

```js
var myImage = (function () {
  var imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return function (src) {
    imgNode.src = src;
  };
})();
//proxy代理
var proxyImage = (function () {
  var img = new Image();
  img.onload = function () {
    myImage(this.src);
  };
  return function (src) {
    myImage("file:// /C:/Users/svenzeng/Desktop/loading.gif");
    img.src = src;
  };
})();
proxyImage("http:// imgcache.qq.com/music// N/k/000GGDys0yA0Nk.jpg");
```
## 缓存代理

```js
var mult = function () {
  console.log("开始计算乘积");
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
};

var proxyMult = (function () {
  var cache = {};
  return function () {
    var args = Array.prototype.join.call(arguments, ",");
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = mult.apply(this, arguments));
  };
})();
proxyMult(1, 2, 3, 4); // 输出：24
proxyMult(1, 2, 3, 4); // 输出：24
```

**通过增加缓存代理的方式，mult 函数可以继续专注于自身的职责——计算乘积，缓存的功能
是由代理对象实现的.**

### 用高阶函数动态创建代理

```js
/**************** 计算乘积 *****************/
var mult = function () {
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
};
/**************** 计算加和 *****************/
var plus = function () {
  var a = 0;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a + arguments[i];
  }
  return a;
};
/**************** 创建缓存代理的工厂 *****************/
var createProxyFactory = function (fn) {
  var cache = {};
  return function () {
    var args = Array.prototype.join.call(arguments, ",");
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = fn.apply(this, arguments));
  };
};
var proxyMult = createProxyFactory(mult),
  proxyPlus = createProxyFactory(plus);
alert(proxyMult(1, 2, 3, 4)); // 输出：24
alert(proxyMult(1, 2, 3, 4)); // 输出：24
alert(proxyPlus(1, 2, 3, 4)); // 输出：10
alert(proxyPlus(1, 2, 3, 4)); // 输出：10
```
