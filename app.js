let text = document.querySelector("#translate-text").value;
let language = document.querySelector("#languages").value;

addEventListeners();

const uiObject = new UI();
const translateObject = new Translate(text, language);

function addEventListeners() {
    document.querySelector("#languages").addEventListener("change", changeUI)
    document.querySelector("#translateBtn").addEventListener("click", translate);
}


function changeUI() {
    uiObject.changeBackground(document.querySelector("#languages").value);   
}

function translate() {
    translateObject.changeWord();

    translateObject.translate()
    .then(response => uiObject.showResult(response))
    .catch(err => uiObject.showResult("Veriler alınamıyor.."));
}