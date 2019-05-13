# Tips

description...

- [Tips](#Tips)
  - [navigator.userAgent](#navigator.userAgent)

------

## navigator.userAgent

返回当前浏览器的用户代理（user agent）字段，该属性的值是只读的。

```javascript
var ua = window.navigator.userAgent;
```

用户代理字符串是由其他的一些 `navigator `对象的属性值组合而成的。基于 Gecko 的浏览器中，其结构如下：

```javascript
userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU; 
Localization; rv: revision-version-number) product/productSub 
Application-Name Application-Name-version
// 例如：
"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
// or
"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36"
```

判断客户端设备

```javascript
// 方法1
function isPC() {
    let userAgentInfo = navigator.userAgent;
    let agents = new Array("Android", "iPhone","SymbianOS", "Windows Phone", "iPad", "iPod");
    let flag = true;
    for ( i = 0; i < agents.length; i++ ) {
        if ( userAgentInfo.indexOf(agents[i]) > 0 ) {
            flag = false;
            break;
        }
    }
    return flag;
}
```

```javascript

// 方法2
let os = function() {
     let ua = navigator.userAgent,
     isWindowsPhone = /(?:Windows Phone)/.test(ua),
     isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone, 
     isAndroid = /(?:Android)/.test(ua), 
     isFireFox = /(?:Firefox)/.test(ua), 
     isChrome = /(?:Chrome|CriOS)/.test(ua),
     isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
     isPhone = /(?:iPhone)/.test(ua) && !isTablet,
     isPc = !isPhone && !isAndroid && !isSymbian;
     return {
          isTablet: isTablet,
          isPhone: isPhone,
          isAndroid : isAndroid,
          isPc : isPc
     };
}();
// 使用方法，如：
if (os.isAndroid || os.isPhone) {
    // do something here...
}
```

