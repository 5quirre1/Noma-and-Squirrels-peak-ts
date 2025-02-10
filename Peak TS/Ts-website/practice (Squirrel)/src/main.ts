// the textbar ts greg
function textbar() {
    const g = document.getElementById('swag') as HTMLTextAreaElement;
const d = document.getElementById('g') as HTMLButtonElement;
const message = document.getElementById("message") as HTMLHeadElement;
d.addEventListener('click', () => {
  const swag = g.value;
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
};


// click
function click() {
    const click = document.getElementById('click') as HTMLButtonElement;
    const clicked = document.getElementById('clicked') as HTMLParagraphElement;
    let clickedTimes = parseInt(localStorage.getItem("clickedTimes") || "0");
    clicked.style.cssText = "color: white;";
    if (clickedTimes) {
        clicked.innerText = `clicked: ${clickedTimes}`;
    }
    else {
        clicked.innerText = "click greg";
    }
    click.addEventListener('click', () => {
      clickedTimes++;
      clicked.innerText = `clicked: ${clickedTimes}`;
      localStorage.setItem("clickedTimes", clickedTimes.toString());
    });
  }
  
  textbar();
  click();
