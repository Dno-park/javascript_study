let superObj = {superVal:'super'}
// let subObj = {subVal:'sub'}
// subObj.__proto__=superObj; // prototype과 __proto__가 헷갈릴 수 있음..
let subObj = Object.create(superObj);
subObj.subVal = 'sub'
debugger;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal ='sub';
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);
// superObj의 객체 값을 바꿨을 뿐, __proto__가 가리키고 있는 객체를 바꾼 것이 아니기 때문에, 객체의 property를 바꾸게 되면, 그 객체를 바꾸는 것이지,
// 객체의 proto를 바꾸는 것이 아니다.

let kim = {
    name: 'kim',
    first:10, second:20,
    sum: function(){return this.first + this.second}
}

let lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first + this.second)/2
}

// let lee = {
//     name: 'lee',
//     first:10, second:10
//     avg: function(){
//         return (this.first + this.second)/2;
//     }
// }
// lee.__proto__= kim;
console.log('lee sum() :' , lee.sum());
console.log('lee avg() :', lee.avg());

//처음부터 생긴 create는 아니지만, __proto__를 쓰기 싦음으로써 나중에 나온 기능이다.
//Javascript는 자유로운 언어임....너무 자유로움...
