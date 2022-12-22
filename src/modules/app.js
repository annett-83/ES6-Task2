import {KalendarBlock} from './kalendar.js';
import { TimerBlock } from './timer-block.js';
import { JS_CREATION_DATE } from "../core/constants/settings.js";
import CookieConsent from './CookieConsent.js';

new CookieConsent(".cookie-consent");

export class App {
  #kalendarBlock
  #timerBlock
  constructor() {
    this.#kalendarBlock = new KalendarBlock();
    this.#timerBlock = new TimerBlock(new Date(JS_CREATION_DATE));
  }
  run() {
    const KalendarBlockHtml = this.#kalendarBlock.render();
    const timerBlockHtml = this.#timerBlock.render();
    document.body.append(KalendarBlockHtml, timerBlockHtml);
  }
}
    
