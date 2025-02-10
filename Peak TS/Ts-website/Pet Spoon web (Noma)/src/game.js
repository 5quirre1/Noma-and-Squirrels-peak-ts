console.log("Pet Spoon Game Loaded!");
var button = document.getElementById('feed');
var pizzaButton = document.getElementById('pizza');
var donutButton = document.getElementById('donut');
var info = document.getElementById('info');
var container = document.getElementById('container');
var diedcontainer = document.getElementById('diedcontainer');
var feedDiv = document.getElementById('feedwhat');
var playAgainButton = document.getElementById('again');
var notEnough = document.getElementById('no');
playAgainButton.addEventListener('click', playAgain);
function playAgain() {
    health = 100;
    hunger = 100;
    localStorage.setItem("health", health.toString());
    localStorage.setItem("hunger", hunger.toString());
    diedcontainer.style.display = 'none';
    container.style.display = 'block';
    updateInfo();
}
var health = Number(localStorage.getItem("health"));
var hunger = Number(localStorage.getItem("hunger"));
var level = Number(localStorage.getItem("level"));
var xp = Number(localStorage.getItem("xp"));
var requiredXP = Number(localStorage.getItem("requiredXP"));
var pizza = Number(localStorage.getItem("pizza"));
var donut = Number(localStorage.getItem("donut"));
if (isNaN(level) || level === 0)
    level = 1;
if (isNaN(xp) || xp === 0)
    xp = 0;
if (isNaN(requiredXP) || requiredXP === 0)
    requiredXP = 100;
if (isNaN(health) || health === 0)
    health = 100;
if (isNaN(hunger) || hunger === 0)
    hunger = 100;
if (isNaN(pizza) || pizza === 0)
    pizza = 3;
if (isNaN(donut) || donut === 0)
    donut = 10;
if (!localStorage.getItem("level"))
    localStorage.setItem("level", String(level));
if (!localStorage.getItem("xp"))
    localStorage.setItem("xp", String(xp));
if (!localStorage.getItem("requiredXP"))
    localStorage.setItem("requiredXP", String(requiredXP));
if (!localStorage.getItem("health"))
    localStorage.setItem("health", String(health));
if (!localStorage.getItem("hunger"))
    localStorage.setItem("hunger", String(hunger));
if (!localStorage.getItem("pizza"))
    localStorage.setItem("pizza", String(pizza));
if (!localStorage.getItem("donut"))
    localStorage.setItem("donut", String(donut));
function updateInfo() {
    if (hunger <= 0) {
        if (health <= 0) {
            if (container) {
                container.style.display = 'none';
            }
            if (diedcontainer) {
                diedcontainer.style.display = 'block';
            }
        }
        health--;
    }
    else {
        hunger--;
    }
    if (info) {
        info.innerText = "Health: ".concat(health, " | Hunger: ").concat(hunger, " |  XP : ").concat(xp, " | Level : ").concat(level, " | Next level : ").concat(requiredXP, " XP.");
    }
    pizzaButton.innerText = "Pizza (".concat(pizza, " left)");
    donutButton.innerText = "Donut (".concat(donut, " left)");
    localStorage.setItem("health", String(health));
    localStorage.setItem("hunger", String(hunger));
    localStorage.setItem("xp", String(xp));
    localStorage.setItem("level", String(level));
    localStorage.setItem("requiredXP", String(requiredXP));
    localStorage.setItem("pizza", String(pizza));
    localStorage.setItem("donut", String(donut));
}
function loadInfo() {
    if (info) {
        info.innerText = "Health: ".concat(health, " | Hunger: ").concat(hunger, " |  XP : ").concat(xp, " | Level : ").concat(level, " | Next level : ").concat(requiredXP, " XP.");
        if (health <= 0) {
            if (container) {
                container.style.display = 'none';
            }
            if (diedcontainer) {
                diedcontainer.style.display = 'block';
            }
        }
    }
}
button.addEventListener('click', showFeedOptions);
function showFeedOptions() {
    if (feedDiv.style.display == 'block') {
        feedDiv.style.display = 'none';
    }
    else {
        feedDiv.style.display = 'block';
    }
}
function feedPizza() {
    if (pizza <= 0) {
        notEnough.style.display = 'block';
    }
    else {
        pizza--;
    }
    if (hunger < 100) {
        hunger += 20;
        if (hunger > 100)
            hunger = 100;
        giveXP(10);
    }
    if (health < 100) {
        health += 10;
        if (health > 100)
            health = 100;
    }
    updateInfo();
}
function feedDonut() {
    if (donut <= 0) {
        notEnough.style.display = 'block';
    }
    else {
        donut--;
    }
    if (hunger < 100) {
        hunger += 10;
        if (hunger > 100)
            hunger = 100;
        giveXP(5);
    }
    if (health < 100) {
        health += 5;
        if (health > 100)
            health = 100;
        updateInfo();
    }
    updateInfo();
}
loadInfo();
pizzaButton.addEventListener('click', feedPizza);
donutButton.addEventListener('click', feedDonut);
setInterval(function () {
    updateInfo();
}, 20000);
function giveXP(amount) {
    xp += amount;
    if (xp >= requiredXP) {
        level++;
        requiredXP = 100 * Math.pow(2, level - 1);
        xp = 0;
    }
    updateInfo();
}
function giveDonut(amount) {
    donut += amount;
    updateInfo();
}
function givePizza(amount) {
    pizza += amount;
    updateInfo();
}
setInterval(function () { return giveDonut(1); }, 50000);
setInterval(function () { return givePizza(1); }, 100000);
updateInfo();
