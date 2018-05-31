# Array的转换方法 #
- toString()方法
- valueOf()方法
- toLocaleString()方法

调用数组的**toString()**方法会返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的**字符串**。

而调用**valueOf()**方法返回的还是**数组**。

当调用数组的**toLocaleString()**方法时，它也会创建一个数组值的以逗号分隔的**字符串**。而与前两个方法唯一的不同之处在于，这一次为了取得每一项的值，调用的是每一项的toLocaleString()方法，而不是toString()方法。

----------
例如：

    var colors = ["red", "blue", "green"];
	alert(colors.toString());     //red,blue,green
    alert(colors.valueOf());      //red,blue,green
    alert(colors);                //red,blue,green

在这里，我们首先显式地调用了toString()方法，以便返回数组的字符串表示，每个值的字符串表示拼接成了一个字符串，中间以逗号分隔。接着调用valueOf()方法，而最后一行代码直接将数组传递给了alert()。

由于alert()要接受字符串参数，所以它会在后台调用toString()方法，由此会得到与直接调用toString()方法相同的结果。

对比如下：

![](https://github.com/shizhongzheng/ThedisappearanceofZ/images/compare.jpg)

使用join()方法，可以使用不同的分隔符来构建这个字符串。join()方法只接收一个参数，即用作分隔符的字符串，然后返回包含所有数组项的字符串。

    var colors = ["red", "green", "blue"];
    alert(colors.join(","));      //red,green,blue
    alert(colors.join("||"));     //red||green||blue

如果数组中的某一项的值是null或者undefined, 那么该值在join()、toLocaleString()、 toString()和valueOf()方法返回的结果中以空字符串表示。


5/31/2018 2:01:04 PM 