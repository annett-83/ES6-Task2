import HASE_IMAGE from "../../assets/kalendar.png";
export class KalendarBlock {
    #container

    constructor() {
        this.#container = document.createElement('div');
        this.#container.className = 'kalendar-23';

    }
    render() {
        const mainTitle = document.createElement('h1');
        mainTitle.className = 'main-title';
        mainTitle.textContent = 'C Новым Годом Сергей!';

        const HaseImageHtml = document.createElement('img');
        HaseImageHtml.className = 'hase-image';
        HaseImageHtml.src = HASE_IMAGE;

        const foundedText = document.createElement('p');
        foundedText.textContent = 'До нового года сталось совсем чуть-чуть!'
        foundedText.className = 'founded-text';
        this.#container.append(mainTitle, HaseImageHtml, foundedText);

        return this.#container;
    }
}