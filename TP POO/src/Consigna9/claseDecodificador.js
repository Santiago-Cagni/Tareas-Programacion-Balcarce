"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const claseTelevisor_1 = require("../Consigna3/claseTelevisor");
class Decodificador extends claseTelevisor_1.Televisor {
    channelUp() {
        if (this.channel === 499) {
            this.channel = 1;
        }
        else {
            this.channel += 1;
        }
    }
    channelDown() {
        if (this.channel === 1) {
            this.channel = 499;
        }
        else {
            this.channel -= 1;
        }
    }
    selectChannel(channelNumber) {
        if (channelNumber > 0 && channelNumber <= 499) {
            this.channel = channelNumber;
        }
    }
}
let teleConDeco = new Decodificador("Lg");
teleConDeco.switchPower();
teleConDeco.selectChannel(499);
console.log(teleConDeco.info());
teleConDeco.channelUp();
console.log(teleConDeco.info());
