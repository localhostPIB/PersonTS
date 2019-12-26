import {Person} from '../test/Person'

enum SEX{
    MALE,
    FEMALE,
    DIV
}

class PersonImpl implements Person {
    private name: string;
    private age: number;
    private salary: number;
    private sex: SEX;

    constructor(name: string, age: number, salary: number, sex:SEX ) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.sex = sex;
    }

    public get getName(): string {
       return  this.name;
    }

    public setName(name:string): void{
       this.name = name;
    }

    public setSalary(salary:number): void{
        this.salary = salary;
    }

    public get getSex(): SEX{
        return this.sex;
    }

    public toString(): string {
        return `${this.name} (${this.age}) (${this.salary}) (${this.sex})`; // As of version 1.4
    }
}
var p = new PersonImpl("Oliver",27,100,SEX.MALE);
console.log(p.toString());

p.setName("Olli");
p.setSalary(7.77);
console.log(p.toString());