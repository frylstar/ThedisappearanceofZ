## 原型和原型链 2019-07-08

### 如何准确判断一个变量是数组类型？

```javascript
var arr = [];
arr instanceof Array // true
typeof arr // Object, typeof 是无法判断是否是数组的
```

- 写一个原型链继承的例子？

### 描述new一个对象的过程？

1. 创建一个新对象
2. this指向这个新对象
3. 执行代码，即对this赋值
4. 返回this

### zepto（或其他框架）源码中如何使用原型链？（zepto设计和源码分析）

阅读源码是高效提高技能的方式

var a = {] 其实是var a = new Object()的语法糖
var a = []其实是var a = new Array()的语法糖
function Foo() {}其实是var Foo = new Function（）
使用instanceof判断一个函数是否是一个变量的构造函数：
用于判断引用类型属于哪个构造函数的方法
比如判断一个变量是否为数组：变量 instanceof Array

### 5条原型规则：

1. 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（除了 null 意外）；

2. 所有的引用类型（数组、对象、函数），都有一个 __proto__ 属性，属性值是一个普通的对象；

3. 所有的函数，都有一个 prototype 属性，属性值也是一个普通的对象；

4. 所有的引用类型（数组、对象、函数），__proto__ 属性值指向它的构造函数的 prototype 属性值；

   隐式原型、显式原型

   obj.__proto__ === Object.prototype

5. 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的 __proto__ （即它的构造函数的 prototype ）

循环对象自身的属性

```javascript
var item
for ( item in f ）{
	// 高级浏览器已经在 for in 中屏蔽了来自原型的属性
	// 但是这里建议加上这个判断，保证程序的健壮性
	if ( f.hasOwnProperty( item ) ) {
		console.log( item )
	}
}
```

原型链