interface Person {
    getName:() => string
    toString:() => string;
}


class PersonImpl implements Person {
    private name: string;
    private age: number;
    private salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    get getName(): string {
       return  this.name;
    }

    toString(): string {
        return `${this.name} (${this.age}) (${this.salary})`; // As of version 1.4
    }

}
