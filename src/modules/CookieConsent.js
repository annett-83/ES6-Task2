import { COOKIE_CONSENT_KEY } from "./constants";

class CookieConsent {
  constructor(selector) {
    this.el = document.querySelector(selector);
    if (localStorage.getItem(COOKIE_CONSENT_KEY) !== "true" && this.el) {
      this.acceptBtn = this.el.querySelector(".cookie-consent__button");
      if (this.acceptBtn){
        this.acceptBtn.addEventListener("click", this.onAccept.bind(this));
      }
    } else {
      this.el.classList.add("hide");
    }
  }
  onAccept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true"); //сохраняется по клику в localstorag
    this.el.remove(); 
  }
  
}

export default CookieConsent;
