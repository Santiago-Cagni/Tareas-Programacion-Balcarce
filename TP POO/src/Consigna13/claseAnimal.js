var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase base Animal
var Animal = /** @class */ (function () {
    function Animal(tipo, seMueve, tieneOjos, tienePelo, tieneCerebro) {
        this.seMueve = seMueve;
        this.tipoAnimal = tipo;
        this.ojos = tieneOjos;
        this.pelos = tienePelo;
        this.cerebro = tieneCerebro;
    }
    Animal.prototype.latirCorazon = function () {
        console.log('Su corazón late');
    };
    Animal.prototype.Cerebro = function () {
        if (this.seMueve || this.cerebro) {
            console.log('Tiene cerebro y funciona bien');
        }
        else {
            console.log('No tiene cerebro o no funciona bien');
        }
    };
    Animal.prototype.Ojos = function () {
        if (this.ojos > 0) {
            console.log('Tiene ojos');
        }
    };
    return Animal;
}());
// Clase hija Perro
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(tipo, seMueve, tieneOjos, tienePelo, tieneCerebro, nombre, raza) {
        var _this = _super.call(this, tipo, seMueve, tieneOjos, tienePelo, tieneCerebro) || this;
        _this.nombre = nombre;
        _this.raza = raza;
        return _this;
    }
    Perro.prototype.ladrar = function () {
        console.log('¡Guau guau!');
    };
    Perro.prototype.Ojos = function () {
        console.log('El perro tiene dos ojos con buena visión');
    };
    Perro.prototype.mostrarInfo = function () {
        console.log("Perro llamado ".concat(this.nombre, ", de raza ").concat(this.raza));
    };
    return Perro;
}(Animal));
// Clase hija Pez
var Pez = /** @class */ (function (_super) {
    __extends(Pez, _super);
    function Pez(tipo, seMueve, tieneOjos, tienePelo, tieneCerebro, color) {
        var _this = _super.call(this, tipo, seMueve, tieneOjos, tienePelo, tieneCerebro) || this;
        _this.color = color;
        return _this;
    }
    Pez.prototype.nadar = function () {
        console.log('El pez nada tranquilo...');
    };
    Pez.prototype.Ojos = function () {
        console.log('El pez tiene ojos adaptados al agua');
    };
    Pez.prototype.mostrarInfo = function () {
        console.log("Pez de color: ".concat(this.color));
    };
    return Pez;
}(Animal));
// Pruebas
var perro = new Perro('Mamífero', true, 2, true, true, 'Peloton', 'Mestizo');
var pez = new Pez('Acuático', true, 2, false, true, 'Naranja');
console.log('\n--- INFO DEL PERRO ---');
perro.ladrar();
perro.Ojos(); // método redefinido
perro.Cerebro(); // método heredado
perro.mostrarInfo();
console.log('\n--- INFO DEL PEZ ---');
pez.nadar();
pez.Ojos(); // método redefinido
pez.Cerebro(); // método heredado
pez.mostrarInfo();
