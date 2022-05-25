一个网页是由三部分组成 HTML(文本)+CSS(渲染)+JavaScript(交互)

# 初识别HTML

## 什么是HTML

​	***Hyper Text Marked Language*** (超文本标记语言)

​	超文本：文字、图片、视频、音频、动画等

## HTML发展史

​	1993.6-至今（HTML 5）

​	现在最流行的是***HTML 5+CSS 3***

​	HTML5 实现动态渲染图形、图标、图像和动画，以及***不需要安装任何插件***直接使用网页播放视频等

## HTML5的优势

- ​	世界知名浏览器厂商对HTML5的支持(Java是通过JVM实现跨平台，而HTML5是天然的跨平台)：微软、Google、苹果、Opera、Mozilla
- ​	市场的需求(市场需要浏览器统一标准--兼容性考虑)
- ​	跨平台

## W3C标准

​	W3C：World Wide Web Consortium(万维网联盟):中立性技术标准机构--还有IEEE

​	W3C标准包括：

- ​	***结构***化标准语言(HTML、XML)
- ​	***表现***标准语言(CSS)
- ​	***行为***标准(DOM、ECMAScript)--目前到ECMAScript6==JavaScript

## 常见IDE

- 记事本
- Dreamweaver
- IDEA  ---JetBrains
- WebStorm(目前最主流前端开发工具)  ---JetBrains

## 进入学习

### 创建

Creat New Project---->“Java” Next Next----->设置Location为**html**(Name会联动变化)

展开项目，删除src目录，在根目录下创建一个新目录(**html**),在该目录上右键***“New>HTML File”***,起名>我的第一个网页

### 配置Web path（用于观察网页）

File>>Setting>>"web">>Tools>tools browser(设置浏览器)

修改Path为自己电脑上的浏览器，浏览器的***exe***文件所在位置

Apply>Ok

## HTML基本结构

[1.我的第一个网页](http://localhost:63342/HTML/html/1.%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%BD%91%E9%A1%B5.html?_ijt=bbe48oqlm17md6vhlhn9lejcv9&_ij_reload=RELOAD_ON_SAVE)

### DOCTYPE声明

### \<title>标签

### \<meta>标签

```html
<!DOCTYPE html>
    
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>

<body>

</body>

</html>
```

## 网页基本标签

### 注释标签

```html
<!--我是注释-->
```

### 标题标签

```html
<!--标题标签-->
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

### 段落标签

```html
<!--段落标签-->
<p>段落标签</p>
```

### 换行标签水平线标签

```html
<!--换行标签-->
换行标签<br/>

<!--水平线标签-->
水平线标签<hr/>
```

### 字体样式标签

粗体、斜体

```html
<!--粗体 斜体-->
<h1>字体样式标签</h1>
粗体：<strong>粗体</strong>
斜体：<em>斜体</em>
```

### 特殊符号标签

空格、版权等

```html
<!--特殊符号  
	&     ；-->
空   格：
空&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格
<br/>
&gt;
<br/>
&lt;
<br/>
&copy;版权所有脆脆鲨
```

## 图像标签

[3.图像标签](http://localhost:63342/HTML/html/3.%E5%9B%BE%E5%83%8F%E6%A0%87%E7%AD%BE.html?_ijt=r7b666vhmmfv4kv6dbrb6bd0kb&_ij_reload=RELOAD_ON_SAVE)

常见的图像格式：JPG、GIF、PNG、BMP

```html
<img src="path" alt="text" />
<!--img
一般都新建一个总的 resources 目录，再分别为图像、视频、音频等文件分别创建对应的目录
src=“” -- （必填）
    相对路径（推荐使用）；绝对路径
    ../  --上级目录
alt=“” -- （必填）
    图像因路径、网络等原因加载不出来时的 替代文字 --一般是对图像的简单描述
title=""
    悬停文字
width=“”
    图像宽度
更多选项 在后面空格可以直接调用
-->
```

## 链接标签

```html
<a href="">
    
<!--使用name或id作为标记-->
<a name="top" href="">顶部</a>


<!--a标签  （快捷键 a+Tab）
href="":(必填)，表示要跳转到哪个页面
    	链接路径
target="":表示窗口在哪里打开
        _blank 在新标签中打开
        _self 默认，在当前标签打开

-->
<a href="1.我的第一个网页.html" target="_blank">点击我跳转到页面一</a>
<!--ctrl+D 快捷键，复制到下一行-->
<a href="https://www.baidu.com">点击我跳转到百度</a>

<br/>

<a href="1.我的第一个网页.html">
    <img src="../resources/image/1.bmp" alt="女儿" title="神乐" width="100">
</a>

<p>
    <a href="1.我的第一个网页.html">
        <img src="../resources/image/1.bmp" alt="女儿" title="神乐" width="100">
    </a>
</p>
<p>
    <a href="1.我的第一个网页.html">
        <img src="../resources/image/1.bmp" alt="女儿" title="神乐" width="100">
    </a>
</p><p>
    <a href="1.我的第一个网页.html">
        <img src="../resources/image/1.bmp" alt="女儿" title="神乐" width="100">
    </a>
</p><p>
    <a href="1.我的第一个网页.html">
        <img src="../resources/image/1.bmp" alt="女儿" title="神乐" width="100">
    </a>
</p><p>
    <a href="1.我的第一个网页.html">
        <img src="../resources/image/1.bmp" alt="女儿" title="神乐" width="100">
    </a>
</p><p>
    <a href="1.我的第一个网页.html">
        <img src="../resources/image/1.bmp" alt="女儿" title="神乐" width="100">
    </a>
</p><p>
    <a href="1.我的第一个网页.html">
        <img src="../resources/image/1.bmp" alt="女儿" title="神乐" width="100">
    </a>
</p><p>
    <a href="1.我的第一个网页.html">
        <img src="../resources/image/1.bmp" alt="女儿" title="神乐" width="100">
    </a>
</p>

<!--锚链接
    1.需要一个标记，一般用name属性作为标记：
    2.跳转到标记
    #
-->

<a href="#top">回到顶部</a>
<a name="down"></a>


<!--功能性标签
    邮件链接：mailto：
    qq链接：腾讯做的，QQ推广
-->
<a href="mailto:123456789@qq.com">点击联系我</a>
```

## 补充：块元素和行内元素

块元素--块级标签 div

- 无论内容多少，该元素独占一行
- (p、h1-h6...）

行内元素--行标签 span

- 内容撑开宽度，左右都是行内元素的可以排在一行
- (a、strong、em...)		

## 列表

- 有序列表:ol
- 无序列表:ul
- 自定义列表:dl

​	标题:dt 内容:dd

```html
<!--有序列表-->
<ol>
    <li>Java</li>
    <li>Python</li>
    <li>C++</li>
    <li>运维</li>
    <li>前端</li>
</ol>
<hr/>

<!--无序列表
    应用范围：导航、侧边栏
-->
<ul>
    <li>Java</li>
    <li>Python</li>
    <li>C++</li>
    <li>运维</li>
    <li>前端</li>
</ul>


<!--自定义列表
    dt:列表标题
    dd:列表内容
    应用范围：公司网站底部
-->
<dl>
    <dt>学科</dt>
    <dd>Python</dd>
    <dd>Java</dd>
    <dd>Linux</dd>
    <dd>C</dd>

    <dt>位置</dt>
    <dd>南京</dd>
    <dd>成都</dd>
    <dd>重庆</dd>
    <dd>上海</dd>
</dl>
```



## 表格

- 为什么使用表格
  - 简单通用
  - 结构稳定
- 基本结构
  - 单元格
  - 行
  - 列
  - 跨行
  - 跨列

```html
<!--表格table
    行 tr
    列 td
-->
<table border="1px">
    <tr>
    <!--colspan 跨列-->
        <td colspan="3" >1-1</td>
    </tr>
    <tr>
    <!--rowspan 跨行-->
        <td rowspan="2">2-1</td>
        <td>2-2</td>
        <td>2-3</td>
    </tr>
    <tr>
        <td>3-1</td>
        <td>3-2</td>
    </tr>
    <tr>
        <td rowspan="2">4-1</td>
        <td>4-2</td>
        <td>4-3</td>
    </tr>
    <tr>
        <td>5-1</td>
        <td>5-2</td>
    </tr>
</table>
```

## 视频和音频

- 视频元素
  - video
- 音频元素
  - audio

```html
<!--视频元素
video:
    src=“” 资源路径
    controls 控制开关
    autoplay 自动播放
-->
<video src="path" controls autoplay >
    <img src="" alt="">
</video>

<!--音频目录
audio：
    src="" 资源路径
    controls 控制开关
    autoplay 自动播放
-->
<audio src="" controls autoplay >

</audio>
```



## 页面结构分析

<table>
    <tr>
    	<td width="80">元素名</td>
    	<td>描述</td>
    </tr>
    <tr>
    	<td width="80">header</td>
    	<td>标题头部区域的内容(用于页面或页面中的一块区域)</td>
    </tr>
    <tr>
    	<td width="80">footer</td>
    	<td>标题脚部区域的内容(用于整个页面或页面中的一块区域)</td>
    </tr>
    <tr>
    	<td width="80">section</td>
    	<td>Web页面中的一块独立区域</td>
    </tr>
    <tr>
    	<td width="80">article</td>
    	<td>独立的文章内容</td>
    </tr>
    <tr>
    	<td width="80">aside</td>
    	<td>相关内容及应用(常用于侧边栏)</td>
    </tr>
    <tr>
    	<td width="80">nav</td>
    	<td>导航类辅助内容</td>
    </tr>
</table>

```html
<!DOCTYPE html>
<html lang="en">
<html>
<head>
	<meta charset ="UTF-8">
    <title></title>
</head>
<body>
    <header>
        
    </header>
    <aside>
    	<ul>
            <li></li>
            <li></li>
        </ul>
    </aside>
    <section>
    <nav>
    <article>
    </article>    
    </nav>
    </section>
    <footer>
    
    </footer>
</body>
</html>
```

## 内联框架

\<iframe src="" name="hello" width="" height="">\</iframe>

可以通过name实现在框架内

\<a herf="" target="_blank.hello">点击跳转\</a>

```html
<!--内联框架
    src="" 引用页面地址
    name="" 框架标识名,有了这个属性,我们就可以根据<a target="_blank.${name}"跳转到该内联>
    可以通过name实现跳转,类似<a name=""></a>
-->
<iframe src="" name="hello" frameborder="0" width="600" height="480"></iframe>
<a href="1.我的第一个网页.html" target="_blank.hello" >点击跳转</a>
```

## 表单语法

```html
<form action="" method="">
    <input type="" name="">
</form>
```

### 表单元素格式

<table>
    <tr>
    	<td width="80">属性</td>
    	<td>说明</td>
    </tr>
    <tr>
    	<td width="80">type</td>
    	<td>指定元素的类型。text、password、checkbox、radio、submit、reset、file、hidden、image、和button，默认为text</td>
    </tr>
    <tr>
        <td width="80"><strong>name</strong></td>
    	<td><strong>必填！！</strong>指定表单元素的名称（后期Java程序读取，就是读取这个name）</td>
    </tr>
    <tr>
    	<td width="80">value</td>
    	<td>元素初始值。type为radio时必须指定一个值</td>
    </tr>
    <tr>
    	<td width="80">size</td>
    	<td>指定表单元素的初始宽度。当type为text或password时，表单元素的大小以字符为单位。对于其他类型，宽度以像素为单位</td>
    </tr>    
    <tr>
    	<td width="80">maxlength</td>
    	<td>type为text或password时，输入的最大字符数</td>
    <tr>
    	<td width="80">checked</td>
    	<td>type为radio或checkbox时，指定按钮是否被选中</td>
    </tr>        
    </tr>    
</table>
```html
<h1>注册</h1>
<!--**************   form   ****************-->
<!--form表单语法
    action="" 表单提交位置，可以是一个网站，也可以是一个请求处理地址
    method="" post,get 提交方式
        get: 提交信息在URL中可见，不安全，高效
        post： 比较安全，传输大文件，
-->
<form action="1.我的第一个网页.html" method="post" >


<!--**************   input   ****************-->
    <!--input标签
        input type="text"
        name="" 必填项，后期通过Java程序读取，就是用这个name
        value="给个脆脆鲨" 默认值
        maxlength="8" 最大输入值
        size="30" 不常用，文本框长度
    -->
    <p>username: <input type="text" name="username" placeholder="请输入用户名"></p>

    <!--type="password" 密码框元素：
        input type="password"
    -->
    <p>password: <input type="password" name="password" required></p>

    <!--type="radio" 单选框元素
        input type="radio"
        value="boy" 单选框的值，选中男，那post提交的数据就是boy
        name="sex" 组，同组里面进行单选
        checked 默认选中
    -->
    <p>性别
        <input type="radio" value="boy" name="sex" checked/>男
        <input type="radio" value="girl" name="sex"/>女
    </p>

    <!--type="checkbox" 多选框元素
        input type="checkbox"
        value="sleep"
        name="hobby"
        checked 默认选中
    -->
    <p>爱好
        <input type="checkbox" value="sleep" name="hobby" checked>睡觉
        <input type="checkbox" value="swim" name="hobby">游泳
        <input type="checkbox" value="cycling" name="hobby">骑车
        <input type="checkbox" value="travelling" name="hobby">旅游
        <input type="checkbox" value="reading" name="hobby">读书
    </p>

    <!--按钮元素：button、image、submit、reset
        input type="button" 普通按钮
        input type="image"  图片按钮(也会进行数据的提交)
        input type="submit" 提交按钮
        input type="reset"  重置
    -->

    <!--type="button"元素：不会提交数据
        type="button"
        name="btn1" 按钮名
        value="点击" 按钮上显示的文字
    -->
    <p>
    <input type="button" name="btn1" value="点击">
    </p>


    <!--type="image"元素：图片按钮是可以提交数据的，和submit按钮类似
        type="image"
        src="../resources/image/1.bmp" 图片路径
    -->
    <p>
    <input type="image" src="../resources/image/1.bmp" width="100" name="picture">
    </p>
    <p>
        <input type="submit" name="Button" value="提交"/>
        <input type="reset" name="Button" value="重填"/>
    </p>
    <!--type="file"元素，文件域
        type="file"
        name="files" input标签下元素的必填项，提交数据都是以键值对的方式，所以每个提交项都要有name
        一般和file元素搭配的还会有一个上传的button元素
    -->
    <p>
        <input type="file" name="files">
        <input type="button" value="上传文件" name="upload">
    </p>

<!--**** input标签下一些带验证功能的元素email和url，但是自带的验证效果不好，还是推荐使用pattern=“”正则表达式进行验证 ******-->
    <!--type="email"邮件验证
        name
    -->
    <p>邮箱：
        <input type="email" name="email">
    </p>

    <!--type="url" url地址验证
        name
    -->
    <p>URL：
        <input type="url" name="url">
    </p>

    <!--type="number" 数字验证
        name="num"
        max="100" 最大值
        min="0" 最小值
        step="10" 步长
    -->
    <p>
        <input type="number" name="num" max="100" min="0" step="10">
    </p>

    <!--滑块
        input type="range"
    -->
    <p>滑块
        <input type="range" name="voice" max="100" min="0" step="2">
    </p>

    <!--搜索框
        input type="search"
    -->
    <p>搜索：
        <input type="search" name="search">
    </p>

    <!--pattern正则表达式
        常用正则表达式链接==》https://www.jb51.net/article/76901.htm
    -->
    <p>自定义邮箱：
        <input type="text" name="DIY_Mail" pattern="">
    </p>

<!--**************   select下拉框   ****************-->
    <!--select下拉框，列表框元素
        name 列表名称
        option 选项标签
            value 选项的值，真正被传递的值
            selected 默认选中
    -->
    <select name="列表名称" id="country">
        <option value="China" selected>中国</option>
        <option value="USA">美国</option>
        <option value="Switzerland">瑞士</option>
        <option value="India">印度</option>
    </select>



<!--**************   textarea文本框   ****************-->
    <!--textarea文本框标签
        name 文本框名称
        cols 列
        raws 行
    -->
    <p>反馈 <br/>
        <textarea name="textarea" id="" cols="10" rows="10" placeholder="信息"></textarea>
    </p>

    <!--label标签 增强鼠标可用性，可以锁定到一个位置
            for="" 标记名，和input的id属性相关联
    -->
    <p>
        <label for="mark">你点我试试</label>
        <input type="text" id="mark">
    </p>
    
</form>
```

**placeholder**提示用户输入

## 表单的应用

- 隐藏域 hidden -- 为隐藏域设置默认值，提交后隐藏域的默认值也会通过post进行提交
- 只读 readonly
- 禁用 disabled

## 表单的初级验证

### 思考？为什么要进行表单验证

​	安全

​	减少服务器压力（在前端先进行简单的验证，避免用户的错误输入也占用到服务器资源

### 常用方式

- placeholder 提示信息
- required 非空判断
- pattern 正则表达式
