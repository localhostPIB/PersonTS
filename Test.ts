import {PersonImpl, SEX, person as olli} from "./PersonImpl";

/**
 * Test Klasse zum experiementieren mit den Import-Anweiungen.
 */
class Test{

    /**
     * Edit Person.
     */
    public edit():void {
        //var person: PersonImpl = new PersonImpl("Olli", 11, 12, SEX.MALE);
        olli.setSalary(7777);
        olli.setAge(555);
        olli.setName("Oliver");

        console.log(olli.toString());
    }
}
//See Result....
var test:Test = new Test();

test.edit();