"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    ;
    Persona.prototype.cualEsTuNombre = function () {
        return "Mi nombre es " + this.nombre.split(" ");
    };
    ;
    Persona.prototype.cualEsTuEdad = function () {
        var edad = 2022 - this.nacimiento;
        return "Mi edad es " + edad + " años";
    };
    ;
    Persona.prototype.cualEsTuGeneracion = function () {
        if (this.nacimiento < 1975) {
            return "Soy un Baby Boomer";
        }
        if (this.nacimiento >= 1975 && this.nacimiento < 1999) {
            return "Soy un Millenial";
        }
        if (this.nacimiento >= 1999 && this.nacimiento < 2010) {
            return "Soy un Centenial";
        }
        if (this.nacimiento >= 2010) {
            return "Soy un Alfa";
        }
    };
    ;
    return Persona;
}());
exports.Persona = Persona;
;
var fede = new Persona(2004, "Federico");
console.log(fede.cualEsTuNombre());
console.log(fede.cualEsTuGeneracion());
console.log(fede.cualEsTuEdad());
