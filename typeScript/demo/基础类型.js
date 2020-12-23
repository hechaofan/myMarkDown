//布尔值
var isDone = false;
//数字
var num = 1;
//字符串
var str = '123';
//数组
var numList = [1, 2, 3];
var strList = ['1', '22', '3'];
//console.log(strList)
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color[1];
console.log(c);
