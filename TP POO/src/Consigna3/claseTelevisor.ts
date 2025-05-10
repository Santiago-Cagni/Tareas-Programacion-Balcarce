
export class Televisor {
    protected brand: string;
    protected volume: number = 0;
    protected channel: number = 1;
    protected isOn: boolean = false;
    protected isMute: boolean = false;
    public constructor(brand: string) {
        this.brand = brand;
    }

    public switchPower(): void {
        this.isOn = !this.isOn;
    }

    private getTime(): string {
        const fullDate = new Date();
        return `${fullDate.getHours()}:${fullDate.getMinutes()}`;
    }

    public info(): string{
        if (this.isOn === false) {
            return 'tv apagado';
        } else {
            const detalles = `
            Channel: ${this.channel}
            Brand: ${this.brand}
            Volume: ${this.volume}
            Hour: ${this.getTime()}
            `;
            return detalles;
        }
    
    }

    public channelUp(): void {
        if (this.channel === 99) {
            this.channel = 1
        } else {
            this.channel += 1
        }
    }

    public channelDown(): void {
        if (this.channel === 1) {
            this.channel = 99
        } else {
            this.channel -= 1
        }
    }

    public selectChannel(channelNumber: number): void {
        if (channelNumber > 0 && channelNumber <= 99) {
            this.channel = channelNumber;
        }
    }

    public subirVolumen(): void {
        if (this.isMute) {
            console.log("El televisor está silenciado. Desactiva el modo Mute para ajustar el volumen.");
            return;
        }
        this.volume = Math.min(this.volume + 1, 99); 
    }

    public bajarVolumen(): void {
        if (this.isMute) {
            console.log("El televisor está silenciado. Desactiva el modo Mute para ajustar el volumen.");
            return;
        }
        this.volume = Math.max(this.volume - 1, 0); 
    }

    public toggleMute(): void {
        this.isMute = !this.isMute;
        if (this.isMute) {
            console.log("El televisor está ahora en modo Silencio.");
        } else {
            console.log("El televisor salió del modo Silencio.");
        }
    }
}
// let miNuevoTv = new Televisor("Samsung");
// miNuevoTv.switchPower();
// miNuevoTv.selectChannel(5);
// miNuevoTv.subirVolumen(); 
// miNuevoTv.bajarVolumen();  
// miNuevoTv.toggleMute(); 
// miNuevoTv.subirVolumen(); 

// console.log(miNuevoTv.info());