

function menuIconClick() {
    changeVisibility("mainTitle", "block");
    changeVisibility("mam", "grid");
    changeIcon();
    changeMenuBackground();
}

function changeVisibility(ElemID, dispType) {
    let elem = document.getElementById(ElemID);
    let elemStyle = window.getComputedStyle(elem);

    if (elemStyle.getPropertyValue('display') == dispType) {
        elem.style.display = "none";
    }
    else {
        elem.style.display = dispType;
    }
}

function changeIcon() {
    let elem = document.getElementById("menuicon");
    var elemSrc = elem.src;

    if (elemSrc.indexOf('menuicon.png') >= 0) {
        elem.src = "./menucloseicon.png";
    }
    else {
        elem.src = "./menuicon.png";
    }
}

function changeMenuBackground() {
    let elem = document.getElementById("menu");
    let elemStyle = window.getComputedStyle(elem);

    var noColour = "rgba(0, 0, 0, 0)";
    var transparentGrey = "#48484857";

    if (elemStyle.getPropertyValue('background-color') == noColour) {
        elem.style.background = transparentGrey;
        document.body.style.overflow = "hidden";
    }
    else {
        elem.style.background = noColour;
        document.body.style.overflow = "auto";
    }
}