// JavaScript source code
const myHeading = document.querySelector("h1");
myHeading.textContent = "Billie Eilish";

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla é legal, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, ${storedName}`;

}

myButton.onclick = () => {
    setUserName();
};

function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
}
