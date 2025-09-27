//dom操作核心思想：将网页中所有的元素当做对象来处理
/*常见事件：
1.鼠标事件：
（1）click：鼠标点击
（2）mouseenter：鼠标移入
（3）mouseleave：鼠标移出
（4）mouseover：鼠标移入
2.键盘事件：
（1）keydown：按下键盘
（2）keyup：松开键盘
3.表单事件：
（1）submit：提交表单
（2）input：输入内容
4.焦点事件：
（1）focus：获得焦点
（2）blur：失去焦点
*/

//js文件之间可以通过import和export来进行相互调用
//export用于导出变量和函数
//import用于导入变量和函数
//在使用import导入时，可以使用as关键字来重命名导入的变量和函数
//例如：import {add as addNum} from './math.js'
//这里将math.js文件中的add函数重命名为addNum
//在当前文件中就可以使用addNum来调用add函数