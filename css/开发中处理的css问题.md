# 开发中处理的css问题



## 1.background(背景图)



###1.1背景图铺满背景

```
background-image url("../../img/youpchomepage/home-part1-1.png")
background-repeat no-repeat
background-size cover //铺满
background-position: center 0px //以中心定位
```



## 2.overflow和滚动条的问题

1.属性

当父元素,子元素的高宽确定时,

​            overflow: auto;     父<子,出滚动条

​            overflow: scroll;    不管 父是不是<子,都出滚动条

​            overflow: hidden;    子溢出的都会被截掉

2.overflow作用于谁上面

考虑 document html body;

​    1.html body中只有一个有overflow属性时,这个属性会传给document

​    2.html body都存在overflow属性时.body的overflow属性才能生效,

​    3.当html body都存在overflow属性时.body的overflow属性一直都会作用于body身上,

​                                  html的overflow属性一直都会作用于document身上

3.禁止系统滚动条

```
html,body{
    height: 100%;
    overflow: hidden;
}
```

4.隐藏滚动条

```
::-webkit-scrollbar {/隐藏滚动条/
	display: none;
}
```

```javascript
//stylus中
.visitSearchdiv
width 100%
height 100%
overflow auto
background-color #ffffff
&::-webkit-scrollbar
display: none
```



## 3.input(样式设置)

```javascript
border-radius:8px; //设置圆角
border: 1px solid #DBDBDB; //去除阴影
outline:none //消除聚焦时的外边框
background-image: url(../../assets/workdiary/riqi.png);/*设置小图标*/
background-size:15px 15px;/*小图标的大小*/
background-position: 10px 6px;/*小图标在input的位置*/
background-repeat: no-repeat;/*背景小图标不重复*/
padding: 8px 10px 8px 40px;/*设置input内边距*/
```

 设置placeholder提示字体的大小和颜色还有边距

```javascript
placeholder="筛选日志发布时间"
```

```javascript
text-indent 32px //更改input中文字到左边距离
background-color #eff0f4 //input 背景色
```



## 4.变手指

```
cursor: pointer;
```



## 5.文字

```javascript
//强制不换行
white-space:nowrap; 

//自动换行
div{ 
word-wrap: break-word; 
word-break: normal; 
}


//单排省略号
.overHide {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/*双排胜率*/
.overHide2{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
```



## 6.转字符

```javascript
&emsp; //空格
```



## 图片宽高相等

```
.goodPic-wrap{
          position:relative;
          width: 100%;
          height: 0;
          padding-top: 100%;
          .goodPic-img{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background: #efefef;
          }
```



## 文字超过宽度100%

```
.white-full-space{
  white-space: pre-wrap;      /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap;     /* Opera <7 */
  white-space: -o-pre-wrap;   /* Opera 7 */
  word-wrap: break-word;      /* IE */
}
```



# 那些你总是记不住但又总是要用的css

## **一、设置input 的placeholder的字体样式**

```js
input::-webkit-input-placeholder {    /* Chrome/Opera/Safari */
    color: red;
}
input::-moz-placeholder { /* Firefox 19+ */
    color: red;
}
input:-ms-input-placeholder { /* IE 10+ */
    color: red;
}
input:-moz-placeholder { /* Firefox 18- */
    color: red;
}
```

**设置input聚焦时的样式**

```js
input:focus {
  background-color: red;
}
```

**取消input的边框**

```js
border: none;
outline: none;
```

## **二、隐藏滚动条或更改滚动条样式**

```js
css主要部分的样式*//*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 10px; /*对垂直流动条有效*/
    height: 10px; /*对水平流动条有效*/
}

/*定义滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: rosybrown;
    border-radius: 3px;
}

/*定义滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb{
    border-radius: 7px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #E8E8E8;
}

/*定义两端按钮的样式*/
::-webkit-scrollbar-button {
    background-color:cyan;
}

/*定义右下角汇合处的样式*/
::-webkit-scrollbar-corner {
    background:khaki;
}
```

## **三、文字超出隐藏并显示省略号**

### **单行（一定要有宽度）**

```js
width:200rpx;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

**多行**

```js
word-break: break-all;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
```

## **四、控制div内的元素自动换行**

```js
word-wrap: break-word;
word-break：break-all;
```

## **五、 纯css画三角形**

```js
demo {
    width: 0;
    height: 0;
    border-width: 20px;
    border-style: solid;
    border-color: transparent transparent red transparent;
}
```

## **六、 绝对定位元素居中（水平和垂直方向）**

```js
emo {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: green;
}
```

## **七、表格边框合并**

```js
table,tr,td{border: 1px solid #333;}
table{
  border-collapse: collapse;
}
```