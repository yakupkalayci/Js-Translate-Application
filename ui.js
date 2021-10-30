class UI {
    changeBackground(lang) {
        const length = document.body.classList.length;
        for (let i = 0; i < length; i++) {
            document.body.classList.remove(document.body.classList[i]);
        }
        document.body.classList.add(`background-${lang}`);
        if (document.body.classList.contains("background-de")) {
            document.querySelector("h1").style.color = "white";
        } else {
            document.querySelector("h1").style.color = "black";
        }
    }

    showResult(result) {
        let translatedText = document.querySelector("#translated-text");
        translatedText.innerHTML = result;
    }
}