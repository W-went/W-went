/**
 * prototype : 原型
 */


/**
 * 构造函数创建对象
 */

function Person(){

}
var person = new Person()
person.name = 'Kevin';
console.log(person.name)

/**
 * Person 就是一个构造函数， 使用new创建了一个实例对象 person
 */


/**
 * prototype : 原型
 * 每个函数都有一个prototype属性
 */
function Person(){

}
//protype 是函数才会有的属性
Person.prototype.name='Kevin'
var person1 = new Person()
var person2 = new Person()

console.log(person1.name);
console.log(person2.name);



