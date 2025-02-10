// the textbar js greg
function textbar() {
    const g = document.getElementById('swag');
    const d = document.getElementById('g');
    const message = document.getElementById("message");
    d.addEventListener('click', () => {
        const swag = g.value;
        if (swag == "greg") {
            message.innerText = "wow so peak";
        } else if (swag == "swag") {
            message.innerText = "so swag fr";
        } else {
            message.innerText = swag;
        }
    });
}

// click
function click() {
    const click = document.getElementById('click');
    const clicked = document.getElementById('clicked');
    let clickedTimes = parseInt(localStorage.getItem("clickedTimes") || "0");
    clicked.style.cssText = "color: white;";
    if (clickedTimes) {
        clicked.innerText = `clicked: ${clickedTimes}`;
    } else {
        clicked.innerText = "click greg";
    }
    click.addEventListener('click', () => {
        clickedTimes++;
        clicked.innerText = `clicked: ${clickedTimes}`;
        localStorage.setItem("clickedTimes", clickedTimes.toString());
    });
}

// random words
async function randword() {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let g = ["greg", "wow", "skibidi", "names is gay"];
    const random = Math.floor(Math.random() * g.length);
    const greg = g[random];
    const swag = document.getElementById('ran');
    swag.innerText = greg;
    console.log(greg);
    await sleep(2000);
    randword();
}

randword();
textbar();
click();

