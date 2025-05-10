import { Televisor } from '../Consigna3/claseTelevisor';

class Decodificador extends Televisor {
    public channelUp(): void {
        if (this.channel === 499) {
            this.channel = 1
        } else {
            this.channel += 1
        }
    }
    public channelDown(): void {
        if (this.channel === 1) {
            this.channel = 499
        } else {
            this.channel -= 1
        }
    }
    public selectChannel(channelNumber: number): void {
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
