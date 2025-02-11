var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        else if (swag == "veryCoolCode") {
            var alrUsed = localStorage.getItem("alrUsed");
            if (alrUsed) {
                message.innerText = "already used this code lmfao";
                return;
            }
            localStorage.setItem("alrUsed", "true");
            message.innerText = "adding 100 to click rgeg";
            var clickedTimes = parseInt(localStorage.getItem("clickedTimes") || "0");
            clickedTimes += 100;
            localStorage.setItem("clickedTimes", clickedTimes.toString());
            var clickedElement = document.getElementById('clicked');
            if (clickedElement) {
                clickedElement.innerText = "clicked: ".concat(clickedTimes);
            }
        }
        else {
            message.innerText = swag;
        }
        if (swag.startsWith("https://")) {
            var swag2 = swag.replace("https://", "");
            message.innerText = "going to ".concat(swag2, "! bai bai");
            window.location.href = swag;
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
// random words
function randword() {
    return __awaiter(this, void 0, void 0, function () {
        var g, random, greg, swag;
        return __generator(this, function (_a) {
            g = new Array("greg", "wow", "skibidi", "names is gay", "swag", "skibidi", "gay sex");
            random = Math.floor(Math.random() * g.length);
            greg = g[random];
            swag = document.getElementById('ran');
            swag.innerText = greg;
            console.log(greg);
            setTimeout(randword, 1000);
            return [2 /*return*/];
        });
    });
}
// random song play rgeg
function random_song() {
    var back = document.getElementById('music_prev');
    var next = document.getElementById('music_next');
    var play = document.getElementById('music_play');
    var musicDiv = document.getElementById('music');
    var songs = [
        "https://squirrel.freakybob.site/assets/WEBSITE/background-music/main.mp3",
        "https://squirrel.freakybob.site/assets/WEBSITE/background-music/about-music.mp3",
        "https://squirrel.freakybob.site/assets/WEBSITE/background-music/blog-music.mp3"
    ];
    var song_names = [
        "main.mp3 - squirrel.freakybob.site",
        "about-music.mp3 - squirrel.freakybob.site",
        "blog-music.mp3 - squirrel.freakybob.site"
    ];
    var song = document.createElement('audio');
    musicDiv.appendChild(song);
    var randomIndex = Math.floor(Math.random() * songs.length);
    song.src = songs[randomIndex];
    var songName = document.getElementById('song-name');
    songName.innerText = song_names[randomIndex];
    song.play();
    play.addEventListener('click', function () {
        song.pause();
        song.src = songs[randomIndex];
        if (song.paused) {
            song.play();
        }
    });
    next.addEventListener('click', function () {
        song.pause();
        randomIndex = (randomIndex + 1) % songs.length;
        song.src = songs[randomIndex];
        songName.innerText = song_names[randomIndex];
        song.play();
    });
    back.addEventListener('click', function () {
        song.pause();
        randomIndex = (randomIndex - 1 + songs.length) % songs.length;
        song.src = songs[randomIndex];
        songName.innerText = song_names[randomIndex];
        song.play();
    });
}
// random images
function randomImages() {
    var images = [
        "assets/coolShirtGuy.png",
        "assets/h.png"
    ];
    var randomIndex = Math.floor(Math.random() * images.length);
    var swag = document.getElementById('image');
    swag.src = images[randomIndex];
}
// main
function main() {
    randword();
    textbar();
    click();
    random_song();
    randomImages();
}
main();

