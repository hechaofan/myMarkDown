## TypeScript

[typeScript中文文档](https://www.tslang.cn/docs/handbook/generics.html)

### TypeScript的基本介绍

### 怎么用？

因为typescript是一个编程语言，它最终会被转换成javaScript代码运行，tsc就是用来进行转换的工具

1. 安装 tsc
   npm i typescript -g

2. 编写TS代码

3. 利用tsc命令对文件进行编译 ts->js

   ```
   tsc index.ts
   ```

   

### TypeScript初体验

### 在ts中只要是:后面都是声明类型

### TypeScript配置文件的说明

1. 创建配置文件

```
tsc --init
```

2. 设置配置项

   * target: 指的就是将ts代码要转换成哪个版本的js代码 es5 es3
   * module: 指的就是将ts代码转换成js代码之后，使用的模块化的标准是什么
   * outDir: 指的就是将ts代码转换成js代码之后，js代码存放的文件夹路径
   * rootDir: 指的就是要将哪个目录中的ts代码进型转换，ts代码的存放路径
   * strict: 是否要将ts代码转换为严格模式的js代码！

3. 使用配置文件

   ```
   tsc -p ./tsconfig.json
   ```

   



### TypeScript中的类型

#### 数组

TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上`[]`，表示由此类型元素组成的一个数组：

```ts
let list: number[] = [1, 2, 3];
```

第二种方式是使用数组泛型，`Array<元素类型>`：

```ts
let list: Array<number> = [1, 2, 3];
```

#### Object

`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

```
// let o: object = {};
// let o1: object = [];

// 对象类型

let o: { name: string, age: number } = { name: "张学友", age: 18 };
```



#### 任意值any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用`any`类型来标记这些变量：

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

在对现有代码进行改写的时候，`any`类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为`Object`有相似的作用，就像它在其它语言中那样。 但是`Object`类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：

```ts
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

当你只知道一部分数据的类型时，`any`类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：

```ts
let list: any[] = [1, true, "free"];

list[1] = 100;
```



#### 空值:void



#### 枚举

`enum`类型是对 JavaScript 标准数据类型的一个补充。 像 C###等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

```
// enum: 枚举类型

// gender: 0  1  -1

enum Gender{
    male = 1,
    female = 0,
    unknow = -1
}

let gender: Gender = Gender.male;

let obj = {
    gender: Gender.male
}
```





#### 类型断言

 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型 

 “尖括号”语法： 

```
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

另一个为`as`语法：

```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

### TypeScript中的类

```
class Person{
    // 和ES6不同的是，TS中属性必须声明，需要指定类型
    greeting: string
    // 声明好属性之后，属性必须赋值一个默认值或者在构造函数中进行初始化(age: number = 10)
    age: number
    constructor(name: string, age: number) {
        this.greeting = name;
        this.age = age;
    }

    sayHello(msg: string): void {
        console.log(msg);
    }
}
```



### TypeScript中类的继承实现

```
class Animal{
    age: number
    constructor(age: number) {
        this.age = age;
    }

    eat() {
        console.log("吃个大鸡腿儿")
    }
}


class Dog extends Animal{
    type: string
    constructor(type: string, age: number) {
        super(age);
        this.type = type;
    }

    // 子类中如果出现了和父类同名的方法，则会进行覆盖
    // 也就是调用的时候，调用的就是子类中的方法了！
    eat() {
        console.log('狗对象中的eat方法')
    }
}

var dog = new Dog("哈士奇", 18);

dog.eat();
```



### TypeScript类成员的访问修饰符介绍

```ts
// 访问修饰符：
// 指的就是可以在类的成员前通过添加关键字来设置当前成员的访问权限
// public: 公开的，默认   所有人都可以进行访问
// private： 私有的， 只能在当前类中进行访问(只可以在car中使用)
// protected： 受保护的，这能在当前类或者子类中进行访问(在car，和audi中使用，不可以在具体的byd中使用)


enum Color{
    red,
    yellow,
    blue
}

class Car{
    // 如果不加访问修饰符 则当前成员默认是公开的 所有人都可以访问的
    public color: Color
    constructor() {
        this.color = Color.red;
        // this.run();
        // this.loadPeople();
    }

    // 加了private之后，当前成员就只能在当前类中使用了！
    private run() {
        
    }

    // 加了protected之后，当前成员就只能在当前类或者子类中使用了！
    protected loadPeople() {
        
    }
}

let byd = new Car();
// byd.color
// byd.run();
// byd.loadPeople();


class Audi extends Car{
    sayHi() {
        console.log(this.color)
        // this.run();
        // this.loadPeople();
    }
}
let audi = new Audi();
// audi.color;
// audi.run();

```



### TypeScript中类的只读属性和参数属性说明



(public type: string)   等价于     添加type: string  this.type = type

```ts
class Cat{
    // 如果给属性添加了readonly修饰 则这个属性无法被赋值
    // 而且属性必须在声明的时候或者在构造函数中被赋值！
    readonly name: string
    // type: string
    // 构造函数中给参数前面加上修饰符，就相当于声明了一个属性！
    constructor(public type: string) {
        this.name = "加菲"
        // this.type = type
    }
}

var cat = new Cat("橘猫");
// cat.name = "123"
// cat.type;
```



### TypeScript中类成员的存取器

存取器中可以添加相关的校验逻辑

```
class People{
    // name: string = ""
    private _name: string = ""
    // 属性的存取器
    get name(): string{
        return this._name;
    }

    set name(value: string) {
        // 设置器中可以添加相关的校验逻辑
        if (value.length < 2 || value.length > 5) {
            throw new Error("名字不合法，不许使用！")
        }
        this._name = value;
    }
}

var p = new People();
p.name = "的司法考试来得及"

console.log(p.name);

```



### TypeScript接口的作用以及最基本的使用方式

接口可以理解为一个约定 一个规范，让用户按照这个接口预定规范使用

```ts
//声明一个ajax传参接口，传入的参数必须按照这个规定使用



// 接口使用interface进行声明
interface AjaxOptions{
    url: string,
    // 给属性加上？之后，这个属性就是可选的！
    type?: string,
    data?: object,
    success(data: object): void
}


// option参数中 需要包含 url type data success
function ajax(options: AjaxOptions) {
    
}

ajax({
    url: "http://www.baidu.com",
    type: "get",
    data: {},
    success(data) {
        
    }
})
```



### 接口中的可选属性(?)和只读属性(readonly)的说明

readonly是用在属性上的，const使用在变量上的

```
interface Point{
    readonly x: number,
    y: number,
    [propName: string]: any
}

let poi: Point = {
    x: 10,
    y: 10
}

// poi.x = 100;


let poi1: Point = {
    x: 10,
    y: 10,
    z: 100
}
```



### 接口中额外的属性检查([propName: string]: any)

```
interface Point{
    readonly x: number,
    y: number,
    [propName: string]: any
}

let poi: Point = {
    x: 10,
    y: 10
}

// poi.x = 100;


let poi1: Point = {
    x: 10,
    y: 10,
    z: 100
}
```





### 函数

 Typescript 文档地址：[Functions](https://www.typescriptlang.org/docs/handbook/functions.html) 

```
// 来到我们的第一个例子，约定输入，约定输出
function add(x: number, y: number): number {
  return x + y
}
// 可选参数
function add(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}
```

```
const add = (x: number, y: number, z?: number): number => {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}
interface ISum {
  (x: number, y: number, z?: number): number
}
let add2: ISum = add
```



```


// 函数本身的类型   在ts中只要是:后面都是声明类型
const add2: (x: number, y: number, z?:number) => number = add

// interface 描述函数类型
const sum = (x: number, y: number) => {
  return x + y
}
interface ISum {
  (x: number, y: number): number
}
const sum2: ISum = sum
```









### 函数类型的接口和类类型(implements)的接口

```
interface SumInterFace{
    (a: number, b: number): number
}

let sum: SumInterFace = function (a: number, b: number) {
    return a + b;
}
```

```
interface PersonInterFace{
    name: string,
    age: number,
    eat():void
}

class XiaoMing implements PersonInterFace{
    name: string = "小明";
    age: number = 18;

    eat() {
        
    }
}


class XiaoHong implements PersonInterFace{
    name: string = "小红";
    age: number = 18;

    eat() {
        
    }
}

// var xh = new XiaoHong();
// xh.name;
// xh.age;
// xh.eat();


// 数据访问层代码的
// mysql orcal mssql mongodb
// dbinteface CRUD
```



一个类复合多个接口

```
interface Radio {
  switchRadio(trigger: boolean): void;
}
class Car implements Radio {
  switchRadio(trigger) {
    return 123
  }
}
class Cellphone implements Radio {
  switchRadio() {
  }
}

interface Battery {
  checkBatteryStatus(): void;
}

// 要实现多个接口，我们只需要中间用 逗号 隔开即可。
class Cellphone implements Radio, Battery {
  switchRadio() {
  }
  checkBatteryStatus() {

  }
}
```







### 接口的继承说明



接口继承接口

```
interface TwoDPoint{
    x: number,
    y: number
}

interface ThreeDPoint{
    z: number
}



interface FourDPoint extends ThreeDPoint, TwoDPoint{
    time: Date
}

let poi2: FourDPoint = {
    z: 100,
    x: 100,
    y: 100,
    time: new Date()
}
```



接口继承类

```
class Bird{
    type: string = "画眉鸟"
    fly():void {
        
    }
}


interface Fly extends Bird{

}

let flyingBird: Fly = {
    type: "啄木鸟",
    fly(): void {
        
    }
}
```

### 类型推论，联合类型,类型守卫 和 类型断言

```
// type inference类型推论
let str = 'str'

// union types 联合类型
let numberOrString: number | string

function getLength(input: string | number): number {
// 这里我们可以用 as 关键字，告诉typescript 编译器，你没法判断我的代码，但是我本人很清楚，这里我就把它看作是一个 string，你可以给他用 string 的方法。
  const str = input as string //类型断言
  if (str.length) {
    return str.length
  } else {
    const number = input as number //类型断言
    return number.toString().length
  }
}
 
//type guard 类型守卫
// typescript 在不同的条件分支里面，智能的缩小了范围，这样我们代码出错的几率就大大的降低了。
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}
```



### 类型别名 ，联合类型， 交叉类型

[类型别名 Type Aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases)

类型别名，就是给类型起一个别名，让它可以更方便的被重用。

```javascript
let sum: (x: number, y: number) => number
const result = sum(1,2)
type PlusType = (x: number, y: number) => number
let sum2: PlusType

// 支持联合类型
type StrOrNumber = string | number
let result2: StrOrNumber = '123'
result2 = 123

// 字符串字面量
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Up'
```

[交叉类型 Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types)

```javascript
interface IName  {
  name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: 'hello', age: 12}
```





### 声明文件

[声明文件使用](https://www.tslang.cn/docs/handbook/declaration-files/consumption.html)

[@types 官方声明文件库](https://github.com/DefinitelyTyped/DefinitelyTyped/) [@types 搜索声明库](https://microsoft.github.io/TypeSearch/)



### 内置类型

[内置类型](https://github.com/Microsoft/TypeScript/tree/master/src/lib)

```javascript

//global objects
const a: Array<number> = [1,2,3]
// 大家可以看到这个类型，不同的文件中有多处定义，但是它们都是 内部定义的一部分，然后根据不同的版本或者功能合并在了一起，一个interface 或者 类多次定义会合并在一起。这些文件一般都是以 lib 开头，以 d.ts 结尾，告诉大家，我是一个内置对象类型欧
const date: Date = new Date()
const reg = /abc/




//build-in object
// 我们还可以使用一些 build in object，内置对象，比如 Math 与其他全局对象不同的是，Math 不是一个构造器。Math 的所有属性与方法都是静态的。
Math.pow(2,2)

// DOM 和 BOM 标准对象
// document 对象，返回的是一个 HTMLElement
let body: HTMLElement = document.body
// document 上面的query 方法，返回的是一个 nodeList 类型
let allLis = document.querySelectorAll('li')

//当然添加事件也是很重要的一部分，document 上面有 addEventListener 方法，注意这个回调函数，因为类型推断，这里面的 e 事件对象也自动获得了类型，这里是个 mouseEvent 类型，因为点击是一个鼠标事件，现在我们可以方便的使用 e 上面的方法和属性。
document.addEventListener('click', (e) => {
  e.preventDefault()
})
```

[Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

Typescript 还提供了一些功能性，帮助性的类型，这些类型，大家在 js 的世界是看不到的，这些类型叫做 utility types，提供一些简洁明快而且非常方便的功能。

```javascript
// partial，它可以把传入的类型都变成可选
interface IPerson {
  name: string
  age: number
}

let viking: IPerson = { name: 'viking', age: 20 }
type IPartial = Partial<IPerson>
let viking2: IPartial = { }

// Omit，它返回的类型可以忽略传入类型的某个属性

type IOmit = Omit<IPerson, 'name'>
let viking3: IOmit = { age: 20 }
```



## 泛型 Generics

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

### **基本使用**

```
function echo(arg) {
  return arg
}
const result = echo(123)
// 这时候我们发现了一个问题，我们传入了数字，但是返回了 any

function echo<T>(arg: T): T {
  return arg
}
const result = echo(123)

// 泛型也可以传入多个值
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result = swap(['string', 123])
```



```
编写一个函数，传入什么数据类型返回对应数据类型
const app = <T>(arg: T): T =>  {
  return arg
}
function app1<T>(arg: T): T{
  return arg
}
let result = app<number>(1) //传入所有的参数，包含类型参数
let result1 = app1(1)//利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
```





### 泛型变量约束

在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法，所以要对泛型变量进行约束

例子一：泛形变量必须含有length属性

```ts

function echoWithArr<T>(arg: T): T {
  console.log(arg.length)
  return arg
}

// 上例中，泛型 T 不一定包含属性 length，我们可以给他传入任意类型，当然有些不包括 length 属性，那样就会报错

interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

echoWithLength('str')
const result3 = echoWithLength({length: 10})
const result4 = echoWithLength([1, 2, 3])
```



例子二：泛型变量是指定数据类型的数组

```ts
//泛型变量是含有这种{name: string,sex: string}数据结构对象的数组
interface person {
  name: string,
  sex: string
}
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
let arr = loggingIdentity<person>([{name: '小米',sex: '男'}])



//或者
interface person {
  name: string,
  sex: string
}
function loggingIdentity<T>(arg: T): T {
    //这样写就不可以使用数组的length，不知道T
  return arg
}
let arr = loggingIdentity<person[]>([{name: '小米',sex: '男'}])

```

### 泛型与类和接口

```
class Queue {
  private data = [];
  push(item) {
    return this.data.push(item)
  }
  pop() {
    return this.data.shift()
  }
}

const queue = new Queue()
queue.push(1)
queue.push('str')
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())

//在上述代码中存在一个问题，它允许你向队列中添加任何类型的数据，当然，当数据被弹出队列时，也可以是任意类型。在上面的示例中，看起来人们可以向队列中添加string 类型的数据，但是那么在使用的过程中，就会出现我们无法捕捉到的错误，

class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()

//泛型和 interface
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 1, value: "str"}
let kp2: KeyPair<string, number> = { key: "str", value: 123}
```

