#去除inline-block元素间间距的N种方法#

现象： 真正意义上的inline-block水平呈现的元素间，换行显示或空格分隔的情况下会有间距。注： input是inline-block元素。

我们使用CSS更改非inline-block水平元素为inline-block水平，也会出现该问题。常见的例如a元素、li元素。

####方法之移除空格
元素间留白间距出现的原因就是标签段之间的空格，因此，去掉HTML中的空格，自然间距就没有了。考虑到代码可读性，显然代码连成一行的写法是不可取的，我们可以这样：

        <div class="space">
    		<a href="##">
    		嘻嘻</a><a href="##">
    		哈哈</a><a href="##">
    		噢噢</a>
    	</div>

或者是：

	<div class="space">
		<a href="##">嘻嘻</a
		><a href="##">哈哈</a
		><a href="##">噢噢</a>
	</div>	

或者是借助HTML注释：

    <div class="space">
		<a href="##">嘻嘻</a><!--
		--><a href="##">哈哈</a><!--
		--><a href="##">噢噢</a>
	</div>

####给父元素使用font-size：0；

	.space {
		font-size: 0;
	}
	.space a {
		font-size: 12px;
	}
这个方法，基本上可以解决大部分浏览器下inline-block元素之间的间距（IE7等浏览器有时候会有1像素的间距）。不过有个浏览器，就是Chrome，其默认有最小字体大小限制，因为，考虑到兼容性，我们还需要添加：

    .space {
		font-size: 0;
		-webkit-text-size-adjust: none;
	}

- 你肯定是将元素转为inline-block才会出现这种情况的，在父元素加一个 font-size:0;就可以了。

- 把 li 全写在一行上缝隙也没了哎

- inline-block元素之间是会产生空隙的，就是换行符导致的，解决方法很多：http://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/

- 最常见就是给父元素加font-size:0; 其实对于导航，不要将其转为inline-block，应该用浮动来实现比较好

