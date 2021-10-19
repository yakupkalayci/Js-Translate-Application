addEventListeners();

const uiObject = new UI();

function addEventListeners() {
    document.querySelector("#languages").addEventListener("change", translate)
}

function translate(e) {
    console.log("değişti");
    uiObject.changeBackground(document.querySelector("#languages").value);

    e.preventDefault();
} 