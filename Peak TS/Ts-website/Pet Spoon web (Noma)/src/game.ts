console.log("Pet Spoon Game Loaded!");

const button = document.getElementById('feed') as HTMLButtonElement;
const pizzaButton = document.getElementById('pizza') as HTMLButtonElement;
const donutButton = document.getElementById('donut') as HTMLButtonElement;
const info = document.getElementById('info') as HTMLParagraphElement;
const container = document.getElementById('container') as HTMLDivElement;
const diedcontainer = document.getElementById('diedcontainer') as HTMLDivElement;
const feedDiv = document.getElementById('feedwhat') as HTMLDivElement;
const playAgainButton = document.getElementById('again') as HTMLButtonElement;
const notEnough = document.getElementById('no') as HTMLParagraphElement;

playAgainButton.addEventListener('click', playAgain);

function playAgain(): void {
    health = 100;
    hunger = 100;

    localStorage.setItem("health", health.toString());
    localStorage.setItem("hunger", hunger.toString());

    diedcontainer.style.display = 'none';
    container.style.display = 'block';

    updateInfo();
}

let health: number = Number(localStorage.getItem("health"));
let hunger: number = Number(localStorage.getItem("hunger"));
let level: number = Number(localStorage.getItem("level"));
let xp: number = Number(localStorage.getItem("xp"));
let requiredXP: number = Number(localStorage.getItem("requiredXP"));
let pizza: number = Number(localStorage.getItem("pizza"));
let donut: number = Number(localStorage.getItem("donut"));


if (isNaN(level) || level === 0) level = 1;
if (isNaN(xp) || xp === 0) xp = 0;
if (isNaN(requiredXP) || requiredXP === 0) requiredXP = 100;
if (isNaN(health) || health === 0) health = 100;
if (isNaN(hunger) || hunger === 0) hunger = 100;
if (isNaN(pizza) || pizza === 0) pizza = 3;
if (isNaN(donut) || donut === 0) donut = 10;

if (!localStorage.getItem("level")) localStorage.setItem("level", String(level));
if (!localStorage.getItem("xp")) localStorage.setItem("xp", String(xp));
if (!localStorage.getItem("requiredXP")) localStorage.setItem("requiredXP", String(requiredXP));
if (!localStorage.getItem("health")) localStorage.setItem("health", String(health));
if (!localStorage.getItem("hunger")) localStorage.setItem("hunger", String(hunger));
if (!localStorage.getItem("pizza")) localStorage.setItem("pizza", String(pizza));
if (!localStorage.getItem("donut")) localStorage.setItem("donut", String(donut));


function updateInfo(): void {
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
    } else {
        hunger--;
    }

    if (info) {
        info.innerText = `Health: ${health} | Hunger: ${hunger} |  XP : ${xp} | Level : ${level} | Next level : ${requiredXP} XP.`;
    }

    pizzaButton.innerText = `Pizza (${pizza} left)`;
    donutButton.innerText = `Donut (${donut} left)`;

    localStorage.setItem("health", String(health));
    localStorage.setItem("hunger", String(hunger));
    localStorage.setItem("xp", String(xp));
    localStorage.setItem("level", String(level));
    localStorage.setItem("requiredXP", String(requiredXP));
    localStorage.setItem("pizza", String(pizza));
    localStorage.setItem("donut", String(donut));
}

function loadInfo(): void {
    if (info) {
        info.innerText = `Health: ${health} | Hunger: ${hunger} |  XP : ${xp} | Level : ${level} | Next level : ${requiredXP} XP.`;
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

function showFeedOptions(): void {
    if (feedDiv.style.display == 'block') {
        feedDiv.style.display = 'none';
    } else {
        feedDiv.style.display = 'block';
    }
}

function feedPizza(): void {
    if (pizza <=0) {
        notEnough.style.display = 'block';
    }

    else {
        pizza--;
    }

    if (hunger < 100) {
        hunger += 20;
        if (hunger > 100) hunger = 100;
        giveXP(10);
    }

    if (health < 100) {
        health += 10;
        if (health > 100) health = 100;
    }
    updateInfo();
}

function feedDonut(): void {
    if (donut <= 0) {
        notEnough.style.display = 'block';
    }

    else {
        donut--;
    }

    if (hunger < 100) {
        hunger += 10;
        if (hunger > 100) hunger = 100;
        giveXP(5);
    }

    if (health < 100) {
        health += 5;
        if (health > 100) health = 100;
        updateInfo();
    }

    updateInfo();
}

loadInfo();

pizzaButton.addEventListener('click', feedPizza);
donutButton.addEventListener('click', feedDonut);

setInterval(() => {
    updateInfo();
}, 20000);


function giveXP(amount: number): void {

    xp += amount;

    if (xp >= requiredXP) {
        level++;
        requiredXP = 100 * Math.pow(2, level - 1);
        xp = 0;
    }

    updateInfo();
}

function giveDonut(amount: number): void {
    donut += amount;
    updateInfo();
}

function givePizza(amount: number): void {
    pizza += amount;
    updateInfo();
}


setInterval(() => giveDonut(1), 50000); 
setInterval(() => givePizza(1), 100000); 


updateInfo();
