# react

[react系列一](https://mp.weixin.qq.com/s?__biz=Mzg5MDAzNzkwNA==&mid=2247483922&idx=1&sn=60c0031c9f660f3cecf65e2395fad781&chksm=cfe3f1edf89478fbd7ea68b9411319e18f1b05efab1fdadeb20791b70827e30edcf74a469e12&scene=126&sessionid=1594198912&key=ed43ae00844ee3406dbcc361e45e07b916501c43ec5303f8fb763c4531dcb9b53d77ad7c101bb90381781a8b590e7763db1c0c85780dc5a2305754a5690a930e3c863a24c49cf39622d94c6ae129956f&ascene=1&uin=MjAwMDUwNzMyMQ%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=zh_CN&exportkey=A5IsGjFB7PvJY45uhqFSAbc%3D&pass_ticket=V%2Fpuj%2Frm%2FEy0dLL5aRTOKGibPEZmilnYlDQbYxWi%2FTaBhBR9OFQgSbJQKVpBO%2BP5)



- 方式一：直接CDN引入

- - react依赖：https://unpkg.com/react@16/umd/react.development.js
  - react-dom依赖：https://unpkg.com/react-dom@16/umd/react-dom.development.js
  - babel依赖：https://unpkg.com/babel-standalone@6/babel.min.js

- 方式二：下载后，添加本地依赖

- 方式三：通过npm管理（后续脚手架再使用）

暂时我们直接通过CDN引入，来演练下面的示例程序：

- 这里有一个crossorigin的属性，这个属性的目的是为了拿到跨域脚本的错误信息

```js
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>


<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>


<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

下面我们通过一个Hello World的案例来看下如何使用React开发。

需求非常简单：通过React，在界面上显示一个Hello World

- 注意：这里我们编写React的script代码中，必须添加 `type="text/babel"`，作用是可以让babel解析jsx的语法

```
  <div id="app"></div> 
  
  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>  
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>     <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>  
  
  
  <script type="text/babel">    
  // 通过ReactDom对象来渲染内容    ReactDOM.render(<h2>Hello World</h2>, document.getElementById("app"));  
  </script>
```