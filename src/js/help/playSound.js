export class PlaySound {
    constructor(isWithSound, volume) {
        this.isWithSound = isWithSound;
        this.volume = volume;
    }
    
    play(isCorrect) {
        if (!this.isWithSound) return;
        const sound = new Audio();
        sound.volume = this.volume;
    
        if (isCorrect) {
            sound.src = '../../assets/sound/ok.mp3';
        } else {
            sound.src = '../../assets/sound/fail.mp3';
        }
    
        sound.play();
    }
}