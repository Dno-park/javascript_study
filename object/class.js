// 객체를 만드는 공장으로서 class문법을 지원했었는데, javascript는 지원하지 않았었다. construtor function을 통해서 객체를 찍어냈었다.
// class의 표준 ECMA6의 표준에 따른다.
// Internet explore 에서는 사용이 불가능. 하지만, classes는 이미구현되어 있는 기능에 양념을 한것이기 때문에, 과거의 전통적인 코드로 변경하면 그대로 사용이 가능
// 그것을 Bable이 해준다.

// 객체를 만드는 공장이다.
// class Person{
//
// }
//
// const kim = new Person();
// console.log('kim',kim);

// const kim = new Person('kim', 10,20);
// const lee = new Person('lee',10,10)

// 객체의 초기 상태 세팅은?
// 객체의 초기상태를 지정하기 위한 객체가 만들어 지기 전에 약속되어 있는 함수 --> 'constructor' 이름을 써야지만 자동으로 출력해 준다.
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    // sum method 추가
    sum(){
        return (this.first+this.second);
    }
}
// average를 기존 class에 추가하고자 할 때 상속이 진행된다. use 'extends'//
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

// Person.prototype.sum = function(){
//     return (this.first+this.second);
// }

const kim = new PersonPlus('kim',20, 10,10);
console.log('kim',kim);
console.log(kim.sum());
console.log(kim.avg());


// const lee = new Person('lee', 10, 10);
// console.log(lee.sum());
//객체 안에 소속된 함수 (method)를 만드는 방법
