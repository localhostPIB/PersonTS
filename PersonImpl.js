"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SEX;
(function (SEX) {
    SEX[SEX["MALE"] = 0] = "MALE";
    SEX[SEX["FEMALE"] = 1] = "FEMALE";
    SEX[SEX["DIV"] = 2] = "DIV";
})(SEX || (SEX = {}));
/**
 * Try and Error ;-)
 */
var PersonImpl = /** @class */ (function () {
    function PersonImpl(name, age, salary, sex) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.sex = sex;
    }
    Object.defineProperty(PersonImpl.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    PersonImpl.prototype.setName = function (name) {
        this.name = name;
    };
    PersonImpl.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Object.defineProperty(PersonImpl.prototype, "getSex", {
        get: function () {
            return this.sex;
        },
        enumerable: true,
        configurable: true
    });
    PersonImpl.prototype.toString = function () {
        return this.name + " (" + this.age + ") (" + this.salary + ") (" + this.sex + ")"; // As of version 1.4
    };
    return PersonImpl;
}());
var p = new PersonImpl("Oliver", 27, 100, SEX.MALE);
console.log(p.toString());
p.setName("Olli");
p.setSalary(7.77);
console.log(p.toString());
