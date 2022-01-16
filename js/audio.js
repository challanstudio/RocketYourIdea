const music = document.getElementById("audio");
const playBtn = document.querySelector("div[class='music_btn'] i:nth-child(2)");
const PLAY_BTN = "ri-play-fill";
const PAUSE_BTN = "ri-pause-fill";
let isPlaying = false;

function toggle() {
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
