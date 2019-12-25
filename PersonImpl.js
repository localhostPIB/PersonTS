var PersonImpl = /** @class */ (function () {
    function PersonImpl(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Object.defineProperty(PersonImpl.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    PersonImpl.prototype.toString = function () {
        return this.name + " (" + this.age + ") (" + this.salary + ")"; // As of version 1.4
    };
    return PersonImpl;
}());
