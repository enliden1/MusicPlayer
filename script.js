const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//Song titles
const songs = ['patience', 'Fåglane', 'jimihendrix', 'Octopus', 'Somla'];

// Keep track of songs
let songIndex = 0;



function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `img/${song}.jpg`
}
function playSong() {

    loadSong(songs[songIndex])

    musicContainer.classList.add('play');
    
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();

}

function pauseSong() {
    musicContainer.classList.remove('play');
    
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    
    audio.pause();
    
}


playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

prevBtn.addEventListener('click', () => {
    
    if(songIndex>0){
        songIndex -=1;
    }
    console.log(songIndex)
    playSong()
  
})

nextBtn.addEventListener('click', () => {
    
    if(songIndex<songs.length-1){
        songIndex +=1;
    }
    console.log(songIndex)
    playSong()
    
})

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
  
  // Set progress bar
  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    console.log(duration)
  
    audio.currentTime = (clickX / width) * duration;
  }

audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);