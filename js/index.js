// javascript是一门跨平台，面向对象的脚本语言，是用来控制网页行为，实现页面的交互效果
//一般javascript代码必须位于script标签之间
//在HTML文档中，可以在任何地方放置任意数量的script
//一般会把脚本置于body元素的底部，可改善显示速度
// js中用let关键字来声明变量（变量可以存放不同类型的值），js是弱类型语言，变量的类型是动态的，可以随时改变
// js中用const关键字来声明常量，一旦声明常量的值就不能改变
//输出语句：
// 1.使用alert()方法输出
// 2.使用console.log()方法输出
// 3.使用document.write()方法输出
//js的数据类型分为：基本数据类型和引用数据类型
/*1.基本数据类型：
(1)number:数字
(2)boolean:布尔值
(3)null:对象为空，js是对大小写敏感的，因此null\NULL是完全不同的
(4)undefined:当声明的变量未初始化时，该变量的默认值是undefined
(5)string:字符串,单引号和双引号都可以
*/

//模版字符串语法：
// 1.使用反引号（`）来定义字符串
// 2.在字符串中可以使用${}来插入变量

let name = "张三";

alert(`你好，${name}`);
//函数定义，具名函数
function add(a,b)
{
    return a+b
}

//匿名函数
// let add=function(a,b)
// {
//     return a+b;
// }

//箭头函数,在箭头函数中this不指向当前对象
// let add=(a,b)=>
// {
//     return a+b;
// }

user={
    name:"李四",//逗号分隔
    age:20,
    //对象的方法
    sayHello:function()
    {
        alert(`你好，${this.name}`);

    }
}
//json常作为数据载体，在网络中进行数据传输
//json数据格式和对象之间的相互转换
let jsonStr1=`{"name":"王五","age":30}`
let obj1=JSON.parse(jsonStr1)//json转对象
console.log(obj1)

let obj2={name:"赵六",age:40}
let jsonStr2=JSON.stringify(obj2)//对象转json
console.log(jsonStr2)