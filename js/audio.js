const music = document.getElementById("audio");
const playBtn = document.querySelector("div[class='music_btn'] i:nth-child(2)");
const nextBtn = document.querySelector("div[class='music_btn'] i:last-child");
const cover = document.querySelector(".music_img_overlay");
const coverImg = document.querySelector(".music_img_overlay img");
const lighting = document.querySelector('div[class="music_img_outlines_3"]');
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

const PLAY_BTN = "ri-play-fill";
const PAUSE_BTN = "ri-pause-fill";

// handlePlay & Pause

function toggle() {
  cover.classList.toggle("animation_running");
  light.classList.toggle("animation_running");

  const controlMusic = {
    playMusic: function () {
      music.play();
      playBtn.className = PAUSE_BTN;
    },
    pauseMusic: function () {
      music.pause();
      playBtn.className = PLAY_BTN;
    },
  };
  return music.paused ? controlMusic.playMusic() : controlMusic.pauseMusic();
}

playBtn.addEventListener("click", toggle);

// random Music
const musicList = musicInfo[Math.floor(Math.random() * musicInfo.length)];
function playingNow() {
  music.src = `asset/mp3/${musicList.src}.mp3`;
  artist.innerText = musicList.artist;
  title.innerText = musicList.title;
  coverImg.src = `asset/img/${musicList.img}.jpg`;
}
playingNow();
