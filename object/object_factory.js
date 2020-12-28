// const kim = {
//     name:'kim',
//     first: 10,
//     second: 20,
//     third: 30,
//     sum: function(){
//         return this.first+this.second+this.third;
//     }
// }
//
// const lee = {
//     name:'lee',
//     first: 10,
//     second: 10,
//     third: 10,
//     sum: function(){
//         return this.first+this.second+this.third;
//     }
// }
// console.log (kim.sum());
// console.log (lee.sum());


let d1 = new Date('2020-6-17');
console.log (d1.getFullYear());
// 지정한 Date의 해당 연도를 출력해 준다


function Person(name, first, second, third){
        this.name=name;
        this.first= first;
        this.second= second;
        this.third= third;
        this.sum= function(){
        return this.first+this.second+this.third;
    }
}
// console.log(new Person());
const kim = new Person('kim', 30, 20, 10);
const lee = new Person('lee',10, 10, 10);

console.log(kim.sum());
console.log(lee.sum());


