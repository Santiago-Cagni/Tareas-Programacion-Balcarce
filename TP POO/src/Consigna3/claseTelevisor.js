"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisor = void 0;
class Televisor {
    constructor(brand) {
        this.volume = 0;
        this.channel = 1;
        this.isOn = false;
        this.isMute = false;
        this.brand = brand;
    }
    switchPower() {
        this.isOn = !this.isOn;
    }
    getTime() {
        const fullDate = new Date();
        return `${fullDate.getHours()}:${fullDate.getMinutes()}`;
    }
    info() {
        if (this.isOn === false) {
            return 'tv apagado';
        }
        else {
            const detalles = `
            Channel: ${this.channel}
            Brand: ${this.brand}
            Volume: ${this.volume}
            Hour: ${this.getTime()}
            `;
            return detalles;
        }
    }
    channelUp() {
        if (this.channel === 99) {
            this.channel = 1;
        }
        else {
            this.channel += 1;
        }
    }
    channelDown() {
        if (this.channel === 1) {
            this.channel = 99;
        }
        else {
            this.channel -= 1;
        }
    }
    selectChannel(channelNumber) {
        if (channelNumber > 0 && channelNumber <= 99) {
            this.channel = channelNumber;
        }
    }
    subirVolumen() {
        if (this.isMute) {
            console.log("El televisor está silenciado. Desactiva el modo Mute para ajustar el volumen.");
            return;
        }
        this.volume = Math.min(this.volume + 1, 99);
    }
    bajarVolumen() {
        if (this.isMute) {
            console.log("El televisor está silenciado. Desactiva el modo Mute para ajustar el volumen.");
            return;
        }
        this.volume = Math.max(this.volume - 1, 0);
    }
    toggleMute() {
        this.isMute = !this.isMute;
        if (this.isMute) {
            console.log("El televisor está ahora en modo Silencio.");
        }
        else {
            console.log("El televisor salió del modo Silencio.");
        }
    }
}
exports.Televisor = Televisor;
// let miNuevoTv = new Televisor("Samsung");
// miNuevoTv.switchPower();
// miNuevoTv.selectChannel(5);
// miNuevoTv.subirVolumen(); 
// miNuevoTv.bajarVolumen();  
// miNuevoTv.toggleMute(); 
// miNuevoTv.subirVolumen(); 
// console.log(miNuevoTv.info());
