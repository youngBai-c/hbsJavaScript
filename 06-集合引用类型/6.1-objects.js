/*显式创建Object对象*/

//使用new和Object构造函数
let person = new Object();
person.name = 'Nicholas';
person.age = 29;
console.log(person);
//{name: 'Nicholas', age: 29}

//使用对象字变量(不会实际调用Object构造函数)
person1 = {
  name: 'Nicholas',
  age: 29,
};
console.log(person1);
//{name: 'Nicholas', age: 29}

//开发者偏好
function displayInfo(args) {
  let output = '';

  if (typeof args.name == 'string') {
    output += 'Name: ' + args.name + '\n';
  }
  if (typeof args.name == 'number') {
    output += 'Name: ' + args.age + '\n';
  }
  alert(output);
}
displayInfo({
  name: 'Nicholas',
  age: 29,
});
//Name:Nicholas
displayInfo({
  name: 'Greg',
});
//Name:Greg

//属性取用：(1).语法 2.[]

console.log(person['name']);
console.log(person.name);

//通过变量访问值
let propertyName = 'name';
console.log(propertyName);

//错误写法：属性字符包含空格只能用[]
// person.first name // //Error
person['first name'] = 'Bob'; //Error
