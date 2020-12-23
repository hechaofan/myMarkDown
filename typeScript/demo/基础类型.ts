//布尔值
let isDone: boolean = false;
//数字
let num : number = 1
//字符串
let str : string = '123'
//数组
let numList : number[] = [1,2,3]
let strList : Array<string> = ['1','22','3']
//console.log(strList)

//枚举
enum Color {Red, Green, Blue}
let c: Color = Color[1];
console.log(c)

//Any
let arr: any[] = [1,'2']

//作用于函数参数：

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}

//令人困惑的是，这里的冒号不是指示类型的。 如果你想指定它的类型， 仍然需要在其后写上完整的模式。
let {a, b}: {a: string, b: number} = o;
