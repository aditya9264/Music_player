console.log("Welcome to Sun Bhai ")

let songIndex = 0;
let audioElement = new Audio('songs/song 1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName');
let sontItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Benaqab", filePath: "songs/song 1.mp3", coverPath: "cover/benaqab.jpg" },
    { songName: "Chalo ek baar", filePath: "songs/song 2.mp3", coverPath: "cover/chalo ek baar.jpg" },
    { songName: "Dil kehta hai", filePath: "songs/song 3.mp3", coverPath: "cover/dil kehta hai.jpg" },
    { songName: "Dildaar", filePath: "songs/song 4.mp3", coverPath: "cover/dildaar.jpg" },
    { songName: "Falak tak", filePath: "songs/song 5.mp3", coverPath: "cover/falak tak.jpg" },
    { songName: "Kaash", filePath: "songs/song 6.mp3", coverPath: "cover/kaash.jpg" },
    { songName: "Kahani suno", filePath: "songs/song 7.mp3", coverPath: "cover/kahani suno.jpg" },
    { songName: "Tujh me rab dikhta hai", filePath: "songs/song 8.mp3", coverPath: "cover/tujh me rab dikhta hai.jpg" },
];

sontItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName

});

//audioElement.play();

//handle play / pause  click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})





//listen to events
audioElement.addEventListener('timeupdate', () => {  // we have used timeupdate it is an event in javascript

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //console.log(progress);
    myprogressbar.value = progress;
});
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})


const makeallPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target)
        makeallPlays();
        
        songIndex = parseInt(e.target.id);
        
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/song ${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/song ${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/song ${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')
})