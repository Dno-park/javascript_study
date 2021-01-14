import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h1");

const superEventHandler = {
    mouseOver: function (event) {
        title.style.color = colors[0];
        title.innerText = "The mouse is here!";
    },
    mouseLeave: function (event) {
        title.style.color = colors[1];
        title.innerText = "The mouse is gone!";
    },
    resized: function (event) {
        title.style.color = colors[2];
        title.innerText = "You just resized!";
    },
    click: function (event) {
        title.style.color = colors[3];
        title.innerText = "That was a right click!";
    }
};

title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resized);
title.addEventListener("click", superEventHandler.click);
