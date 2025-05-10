"use strict";
class CuentaBancaria {
    constructor(cuenta, saldo) {
        this.saldoCuenta = saldo;
        this.numeroCuenta = cuenta;
    }
    agregarSaldo(saldo) {
        return this.saldoCuenta = this.saldoCuenta + saldo;
    }
    retirarDinero(saldoRetiro) {
        if (saldoRetiro <= this.saldoCuenta) {
            return this.saldoCuenta -= saldoRetiro;
        }
        else {
            console.log(`El monto excede el saldo de su cuenta`);
        }
    }
    verSaldo() {
        console.log(`El saldo de la cuenta numero ${this.numeroCuenta} es ${this.saldoCuenta}`);
    }
}
let cuentaPrueba = new CuentaBancaria(231231, 1234);
cuentaPrueba.verSaldo();
cuentaPrueba.agregarSaldo(1);
cuentaPrueba.verSaldo();
cuentaPrueba.retirarDinero(1);
cuentaPrueba.verSaldo();
cuentaPrueba.retirarDinero(2000);
