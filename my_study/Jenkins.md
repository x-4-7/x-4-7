# Jenkins

## Quick Note

> 1.变量配置

​	**全局变量**尽量在 **Configure System** 里配置，

​	**单个项目**使用到的变量在其Configure下的 General 配置 ==》This project is parameterized

​	常见的全局变量

<table>
    <tr>
    <td>Name</td>
    <td></td>
    </tr>
    <tr>
    <td>Global Passwords</td>
    <td>配置一些project里用于爬虫的网站</td>
    </tr>
    <tr>
    <td>Jenkins Location</td>
    <td>${JENKINS_URL}</td>
    </tr>
    <tr>
    <td>Global properties</td>
    <td>${Environment variables}自定义的变量基本都在这里增删改</td>
    </tr>
</table>



mv mw_e2c mw_e2c_old

mv mw_e2c_tmp mw_e2c



mv mw_e2c mw_e2c_tmp

mv mw_e2c_old mw_e2c 



