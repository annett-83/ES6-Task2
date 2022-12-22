import * as DateUtils from '../core/utils/data.js';

export class TimerBlock {
    #date;
    #timerContainer
    #timerTextHtml
    constructor(date) {
        this.#date = date;
        this.#timerContainer = document.createElement('div');
        this.#timerTextHtml = document.createElement('h2');
    }

    #getTimerContent () {
       return DateUtils.getPreciseDateDifference(new Date(), this.#date); 
    }
    #enableDteUpdate(){
        setInterval(()=>{
            this.#timerTextHtml.textContent = this.#getTimerContent();
        }, 1000);
    }
        
    
    render() {
        this.#timerContainer.id = 'timer';
        this.#timerTextHtml.className = 'timer-text';
        this.#timerTextHtml.textContent = this.#getTimerContent();

        const todayDayHtml = document.createElement('div');
        todayDayHtml.className = 'today-date';
        const todayDateFormat = DateUtils.getDataFormat(new Date());
        todayDayHtml.textContent = `Сегдня:${todayDateFormat}`;

        this.#timerContainer.append(this.#timerTextHtml, todayDayHtml);
        this.#enableDteUpdate();

        return this.#timerContainer;

    }
}