class UI {
    constructor() {
        this.body = document.body;
        this.text = document.querySelector("#translated-text");
    }

    changeBackground(language) {
        this.body.classList = (`background-${language}`);
    }
}