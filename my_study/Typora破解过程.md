# Typora破解过程

支持1.0.4以前的版本

1.安装python环境(没有的话)：[python官网](https://www.python.org/)

[^pip]: 在个性化安装的时候记得选上

2.安装nodejs环境：[Node.js官网](https://nodejs.org/zh-cn/)

3.在本地新建临时`repo`：

```git
git clone https://github.com/Mas0nShi/typoraCracker.git
```

4.找到Typora安装目录下的`resources`目录下的`app.asar`文件

默认应该是在 `C:\Program Files\Typora\resources\app.asar`

解包

```cmd
python typora.py "C:\Program Files\Typora\resources\app.asar" workstation\outfile\
```

5.使用脚本文件夹`example\path\License.js`替换掉`workstation\outfile\dec_app\License.js`文件

6.打包`app.asar`文件

```cmd
python typora.py -u workstation\outfile\dec_app workstation\outappasar
```

7、将打包回来的`app.asar`文件重新丢到`Typora`的`resources`目录下

8.授权码生成

```cmd
node example/keygen.js
```

9.激活：授权码输入生成的码，邮箱输入`crack@example.com`，完事。