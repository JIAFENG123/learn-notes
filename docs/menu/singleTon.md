# 单例模式

> 单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

当我
们单击登录按钮的时候，页面中会出现一个登录浮窗，而这个登录浮窗是唯一的，无论单击多少
次登录按钮，这个浮窗都只会被创建一次，那么这个登录浮窗就适合用单例模式来创建.

## 惰性单例

> 惰性单例指的是在需要的时候才创建对象实例。

```js
Singleton.getInstance = (function () {
  var instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();
```

```js
var createLoginLayer = (function () {
  var div;
  return function () {
    if (!div) {
      div = document.createElement("div");
      div.innerHTML = "我是登录浮窗";
      div.style.display = "none";
      document.body.appendChild(div);
    }
    return div;
  };
})();

document.getElementById("loginBtn").onclick = function () {
  var loginLayer = createLoginLayer();
  loginLayer.style.display = "block";
};
```

### 通用的惰性单例

```js
//抽离通用single函数

var getSingle = function (fn) {
  var result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  };
};


var createLoginLayer = function () {
  var div = document.createElement("div");
  div.innerHTML = "我是登录浮窗";
  div.style.display = "none";
  document.body.appendChild(div);
  return div;
};
var createSingleLoginLayer = getSingle(createLoginLayer);
document.getElementById("loginBtn").onclick = function () {
  var loginLayer = createSingleLoginLayer();
  loginLayer.style.display = "block";
};


var createSingleIframe = getSingle(function () {
  var iframe = document.createElement("iframe");
  document.body.appendChild(iframe);
  return iframe;
});
document.getElementById("loginBtn").onclick = function () {
  var loginLayer = createSingleIframe();
  loginLayer.src = "http://baidu.com";
};
```
