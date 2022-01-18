const music = document.getElementById("audio");
const cover = document.querySelector(".music_img_overlay");
const lighting = document.querySelector('div[class="music_img_outlines_3"]');

const PLAY_BTN = "ri-play-fill";
const PAUSE_BTN = "ri-pause-fill";

// ******* Handle Toggle Play & Pause
const controlMusic = {
  playMusic: function () {
    music.play();
    playBtn.className = PAUSE_BTN;
    cover.classList.add("animation_running");
    lighting.classList.add("animation_running");
  },
  pauseMusic: function () {
    music.pause();
    playBtn.className = PLAY_BTN;
    cover.classList.remove("animation_running");
    lighting.classList.remove("animation_running");
  },
};

function toggle() {
  // cover.classList.toggle("animation_running");
  // lighting.classList.toggle("animation_running");
  return music.paused ? controlMusic.playMusic() : controlMusic.pauseMusic();
}

// ******* OnLoad Random Music
const coverImg = document.querySelector(".music_img_overlay img");
const playBtn = document.querySelector("div[class='music_btn'] i:nth-child(2)");
const nextBtn = document.querySelector("div[class='music_btn'] i:last-child");
const artist = document.getElementById("music-artist");
const title = document.getElementById("music-title");
const musicInfo = [
  {
    title: "BOOM",
    artist: "Timothy Infinite",
    src: "BOOOM - Timothy Infinite",
    img: "human1",
  },
  {
    title: "Humbot",
    artist: "Wave Saver",
    src: "Humbot - Wave Saver",
    img: "human2",
  },
  { title: "Maverick", artist: "Ooyy", src: "Maverick - Ooyy", img: "human3" },
  {
    title: "I Remember",
    artist: "Victor Lundberg",
    src: "I Remember - Victor Lundberg",
    img: "human4",
  },
  {
    title: "Raise Your Shoes",
    artist: "WSplasher!",
    src: "Raise Your Shoes - Splasher!",
    img: "human5",
  },
];

const player = {
  nextMusic: function () {
    const musicList = musicInfo[Math.floor(Math.random() * musicInfo.length)];
    music.src = "";
    artist.innerText = "";
    title.innerText = "";
    coverImg.src = "";
    music.src = `asset/mp3/${musicList.src}.mp3`;
    artist.innerText = musicList.artist;
    title.innerText = musicList.title;
    coverImg.src = `asset/img/${musicList.img}.jpg`;
    return music.paused ? controlMusic.pauseMusic() : controlMusic.playMusic();
  },
  autoMusic: function () {
    const musicList = musicInfo[Math.floor(Math.random() * musicInfo.length)];
    music.src = "";
    artist.innerText = "";
    title.innerText = "";
    coverImg.src = "";
    music.src = `asset/mp3/${musicList.src}.mp3`;
    artist.innerText = musicList.artist;
    title.innerText = musicList.title;
    coverImg.src = `asset/img/${musicList.img}.jpg`;
    return music.paused ? controlMusic.playMusic() : controlMusic.pauseMusic();
  },
};

function musicPlayer() {
  const musicList = musicInfo[Math.floor(Math.random() * musicInfo.length)];
  music.src = `asset/mp3/${musicList.src}.mp3`;
  artist.innerText = musicList.artist;
  title.innerText = musicList.title;
  coverImg.src = `asset/img/${musicList.img}.jpg`;
  nextBtn.addEventListener("click", player.nextMusic);
  music.addEventListener("ended", player.autoMusic);
  playBtn.addEventListener("click", toggle);
}

// result
window.addEventListener("load", musicPlayer);
