class Translate {
    constructor(text, language) {
        this.text = text;
        this.language = language;
        this.apiKey = "trnsl.1.1.20211019T103806Z.f49ab3be36a3bb17.02a041ddf11094472735fdf8fd83175b5a18e4fc";
    }
    async translate() {
        let endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.text}&lang=tr-${this.language}`;
        let response = await fetch(endpoint);
        let data = await response.json();
        return data.text[0];
    }

    changeWord() {
        this.text = document.querySelector("#translate-text").value;
        this.language = document.querySelector("#languages").value;

    }
}