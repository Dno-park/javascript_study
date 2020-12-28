function Person (name, first, second, third);{
        this.name = name;
        this.first = first;
        this.second = second;
}

Person.prototype.sum = function(){
        return 'prototype:' + (this.first + this.second);
}

const kim = new Person ('kim', 10, 20);
const lee = new Person ('lee', 10, 10);

console.log(kim.sum);
console.log(lee.sum);

//prototype의 정의는?
//prototype을 사용하지 않고, 생성자 함수 안에서 method 혹은 속성을 정의하게 되면, 어떤 비효율이 생겨날까?
//그런 비효율을 prototype을 통해서 어떻게 극복했는가?

