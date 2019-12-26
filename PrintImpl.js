"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonImpl_1 = require("../test/PersonImpl");
var PrintImpl = /** @class */ (function () {
    function PrintImpl() {
        this.varp = new PersonImpl_1.PersonImpl("Oliver", 27, 100);
    }
    PrintImpl.prototype.log = function (p, toString) { };
    return PrintImpl;
}());
();
;
