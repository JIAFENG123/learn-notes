# 迭代器模式

> 迭代器模式是一种相对简单的模式，简单到很多时候我们都不认为它是一种设计模式。目前
> 的绝大部分语言都内置了迭代器。

应用

```js
var getActiveUploadObj = function () {
  try {
    return new ActiveXObject("TXFTNActiveX.FTNUpload"); // IE 上传控件
  } catch (e) {
    return false;
  }
};
var getFlashUploadObj = function () {
  if (supportFlash()) {
    // supportFlash 函数未提供
    var str = '<object type="application/x-shockwave-flash"></object>';
    return $(str).appendTo($("body"));
  }
  return false;
};
var getFormUpladObj = function () {
  var str = '<input name="file" type="file" class="ui-file"/>'; // 表单上传
  return $(str).appendTo($("body"));
};

var iteratorUploadObj = function () {
  for (var i = 0, fn; (fn = arguments[i++]); ) {
    var uploadObj = fn();
    if (uploadObj !== false) {
      return uploadObj;
    }
  }
};
var uploadObj = iteratorUploadObj(
  getActiveUploadObj,
  getFlashUploadObj,
  getFormUpladObj
);

//增加分别获取 Webkit 控件上传对象和 HTML5 上传对象的函数：
var getWebkitUploadObj = function () {
  // 具体代码略
};
var getHtml5UploadObj = function () {
  // 具体代码略
};
// 依照优先级把它们添加进迭代器：
var uploadObj = iteratorUploadObj(
  getActiveUploadObj,
  getWebkitUploadObj,
  getFlashUploadObj,
  getHtml5UploadObj,
  getFormUpladObj
);
```
