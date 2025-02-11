 // the textbar ts greg
 function textbar() {
  const g = document.getElementById('swag') as HTMLTextAreaElement;
const d = document.getElementById('g') as HTMLButtonElement;
const message = document.getElementById("message") as HTMLHeadElement;
d.addEventListener('click', () => {
let swag = g.value;
if (swag == "greg") {
  message.innerText = "wow so peak";
}
else if (swag == "swag") {
  message.innerText = "so swag fr";
}
else if(swag == "veryCoolCode") {
  var alrUsed = localStorage.getItem("alrUsed");
  if (alrUsed) {
    message.innerText = "already used this code lmfao";
    return;
  }
  localStorage.setItem("alrUsed", "true");
  message.innerText = "adding 100 to click rgeg";
  let clickedTimes = parseInt(localStorage.getItem("clickedTimes") || "0");
  clickedTimes += 100;
  localStorage.setItem("clickedTimes", clickedTimes.toString());
  const clickedElement = document.getElementById('clicked');
  if (clickedElement) {
    clickedElement.innerText = `clicked: ${clickedTimes}`;
  }

}
else {
  message.innerText = swag;
}
if (swag.startsWith("https://")) {
  let swag2 = swag.replace("https://", "");
  message.innerText = `going to ${swag2}! bai bai`;
  window.location.href = swag;
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

// random words
async function randword() {
  let g: string[] = new Array("greg", "wow", "skibidi", "names is gay", "swag", "skibidi", "gay sex");
  const random = Math.floor(Math.random() * g.length);
  const greg: string = g[random];
  const swag = document.getElementById('ran')!;
  swag.innerText = greg;
  console.log(greg);
  setTimeout(randword, 1000);
}

// random song play rgeg
function random_song() {
  const back = document.getElementById('music_prev') as HTMLButtonElement;
  const next = document.getElementById('music_next') as HTMLButtonElement;
  const play = document.getElementById('music_play') as HTMLButtonElement;
  const musicDiv = document.getElementById('music') as HTMLDivElement;
  const songs: string[] = [
    "https://squirrel.freakybob.site/assets/WEBSITE/background-music/main.mp3",
    "https://squirrel.freakybob.site/assets/WEBSITE/background-music/about-music.mp3",
    "https://squirrel.freakybob.site/assets/WEBSITE/background-music/blog-music.mp3"
  ];
  const song_names: string[] = [
    "main.mp3 - squirrel.freakybob.site",
    "about-music.mp3 - squirrel.freakybob.site",
    "blog-music.mp3 - squirrel.freakybob.site"
  ]
  

  const song = document.createElement('audio') as HTMLAudioElement;
  musicDiv.appendChild(song);

  let randomIndex = Math.floor(Math.random() * songs.length);
  song.src = songs[randomIndex];
  const songName = document.getElementById('song-name') as HTMLDivElement;
  songName.innerText = song_names[randomIndex];
  song.play();

  play.addEventListener('click', () => {
    song.pause();
    song.src = songs[randomIndex];
    if (song.paused) {
      song.play();
    }
  });

  next.addEventListener('click', () => {
    song.pause();
    randomIndex = (randomIndex + 1) % songs.length;
    song.src = songs[randomIndex];
    songName.innerText = song_names[randomIndex];
    song.play();

  });

  back.addEventListener('click', () => {
    song.pause();
    randomIndex = (randomIndex - 1 + songs.length) % songs.length;
    song.src = songs[randomIndex];
    songName.innerText = song_names[randomIndex];
    song.play();
  });
}

// random images
function randomImages() {
  const images: string[] = [
    "assets/coolShirtGuy.png",
    "assets/h.png"
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  const swag = document.getElementById('image') as HTMLImageElement;
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
