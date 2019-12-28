import {Person} from '../test/Person'

export enum SEX{
    MALE,
    FEMALE,
    DIV
}

/**
 * Try and Error ;-)
 */
export class PersonImpl implements Person {
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

    public get getAge(): number {
        return  this.age;
    }

    public setAge(age:number): void{
        this.age = age;
    }

    public setName(name:string): void{
       this.name = name;
    }

    public setSalary(salary:number): void{
        this.salary = salary;
    }

    public getSex(): SEX{
        return this.sex;
    }

    public toString(): string {
        return `${this.name} (${this.age}) (${this.salary}) (${this.sex})`; // As of version 1.4
    }
}
 var p = new PersonImpl("Oliver",27,100,SEX.MALE);
export{p as person}
console.log(p.toString());

p.setName("Olli");
p.setSalary(7.77);
console.log(p.toString());