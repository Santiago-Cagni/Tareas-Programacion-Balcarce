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
// Clase base sin validación
var Moto = /** @class */ (function () {
    function Moto(marca, motor, ruedas) {
        this.marca = marca;
        this.motor = motor;
        this.ruedas = ruedas;
    }
    Moto.prototype.describir = function () {
        console.log("Moto marca ".concat(this.marca, " con motor ").concat(this.motor.tipo, " y ").concat(this.ruedas.cantidad, " ruedas"));
    };
    return Moto;
}());
// Subclase que agrega validación con método privado
var MotoSimple = /** @class */ (function (_super) {
    __extends(MotoSimple, _super);
    function MotoSimple(marca, motor, ruedas) {
        var _this = _super.call(this, marca, motor, ruedas) || this;
        _this.validarMoto(ruedas);
        return _this;
    }
    // Método privado exclusivo de esta clase
    MotoSimple.prototype.validarMoto = function (ruedas) {
        if (ruedas.cantidad > 2) {
            throw new Error('Una moto simple no puede tener más de 2 ruedas');
        }
    };
    return MotoSimple;
}(Moto));
var MotoSidecar = /** @class */ (function (_super) {
    __extends(MotoSidecar, _super);
    function MotoSidecar(marca, motor, ruedas, sidecar) {
        var _this = _super.call(this, marca, motor, ruedas) || this;
        _this.sidecar = sidecar;
        return _this;
    }
    return MotoSidecar;
}(MotoSimple));
// Subclase con polimorfismo
var Triciclo = /** @class */ (function (_super) {
    __extends(Triciclo, _super);
    function Triciclo(marca, motor, ruedas, canasto) {
        var _this = _super.call(this, marca, motor, ruedas) || this;
        _this.canasto = canasto;
        return _this;
    }
    Triciclo.prototype.describir = function () {
        _super.prototype.describir.call(this);
        console.log(this.canasto ? 'Tiene canasto' : 'No tiene canasto');
    };
    return Triciclo;
}(Moto));
// ✅ Pruebas
var motorTriciclo = { tipo: '3 cilindros' };
var ruedasTriciclo = { cantidad: 3 };
var miTriciclo = new Triciclo('Yamaha', motorTriciclo, ruedasTriciclo, true);
miTriciclo.describir();
var motoChica = new MotoSimple('Honda', { tipo: 'monocilíndrico' }, { cantidad: 2 });
motoChica.describir();
var motoConSidecar = new MotoSidecar("Motomel", { tipo: "monoCilindro" }, { cantidad: 2 }, { tieneSidecar: true });
motoConSidecar.describir();
// Esto lanzaría un error
// const errorMoto = new MotoSimple('Rara', { tipo: '4T' }, { cantidad: 4 });
