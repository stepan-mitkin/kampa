var headerText = "";

function render(parent) {
    html.clear(parent);
    parent.style.textAlign = "center";
    parent.style.textAlign
    html.addText(parent, headerText);
}

function setHeaderText(text) {
    headerText = text;
}