// the textbar ts greg
function textbar() {
    var g = document.getElementById('swag');
    var d = document.getElementById('g');
    var message = document.getElementById("message");
    d.addEventListener('click', function () {
        var swag = g.value;
        if (swag == "greg") {
            message.innerText = "wow so peak";
        }
        else if (swag == "swag") {
            message.innerText = "so swag fr";
        }
        else {
            message.innerText = swag;
        }
    });
}
;
// click
function click() {
    var click = document.getElementById('click');
    var clicked = document.getElementById('clicked');
    var clickedTimes = parseInt(localStorage.getItem("clickedTimes") || "0");
    clicked.style.cssText = "color: white;";
    if (clickedTimes) {
        clicked.innerText = "clicked: ".concat(clickedTimes);
    }
    else {
        clicked.innerText = "click greg";
    }
    click.addEventListener('click', function () {
        clickedTimes++;
        clicked.innerText = "clicked: ".concat(clickedTimes);
        localStorage.setItem("clickedTimes", clickedTimes.toString());
    });
}
textbar();
click();
