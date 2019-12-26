export interface Person {
    getName: string;
    toString:() => string;
    getSex: any;
    setName:(name:string)=>  void;
    setSalary:(salary:number)=>  void;
}