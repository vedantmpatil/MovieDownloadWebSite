let myrow = document.getElementsByClassName("myrow")
let rowplay = document.getElementById("rowplay")
let varNum;
let card = document.getElementsByClassName("card")
let mainCard = document.getElementById("mainCard")
let myarrow = document.getElementById("myarrow")
let container = document.getElementsByClassName("container")
let cardContent = document.getElementsByClassName("cardContent")
let row1 = document.getElementsByClassName("row1")
let isCardDown = 0
let myplay = document.getElementById("myplay");
let heart = document.getElementById("heart");
let liked = 1;
// Logic of Changing Number to Play Icon
for (var i = 0; i < myrow.length; i++) {
    myrow[i].addEventListener('mouseover', () => {
        console.log("mouseover")
        varNum = rowplay.innerHTML
        rowplay.innerHTML = `<i class="fa-solid fa-play"></i>`

    })
}
for (var i = 0; i < myrow.length; i++) {
    myrow[i].addEventListener('mouseout', () => {
        console.log("mouseout")
        // varNum = rowplay.innerHTML
        rowplay.innerHTML = `${varNum}`

    })
}

// ********************* CARD JS *****************************

let btnclick = document.getElementById("btnclick")
let coverimg = document.getElementById("coverimg")
let songtitle = document.getElementById("songtitle")
let sartist = document.getElementById("sartist")
// let sname = "songs/whatjhumka.mp3"  
// dispMainElement 0 - show list , 1 -  showcard 
function songClick(sname, scover, stitle, sarti, dispMainElement) {
     
    let songName = sname

    let audio = new Audio(`${songName}`);
    let myplay = document.getElementById("myplay");
    let progress = document.getElementById("progress")
    let currentTimedisp = document.getElementById("currentTimedisp")
    let maxDuration = document.getElementById("maxDuration")


    coverimg.src = scover

    songtitle.innerHTML = `${stitle}  `

    sartist.innerHTML = `${sarti} `


    // Logic For Toggle in Between Playlist & Card
    if (dispMainElement == 1) {
        for (var i = 0; i < card.length; i += 1) {
            // flex tha toh flex dikhega na bhai 
            card[i].style.display = 'flex';
        }
        for (var i = 0; i < container.length; i += 1) {
            container[i].style.display = 'none';
        }
    }

   
   
    audio.play();


    myplay.classList.remove("fa-circle-play")
    myplay.classList.add("fa-circle-pause")
    myplay.classList.add("fa-spin")
    //     time updater on display 
    setInterval(() => {
        let durationMin = Math.floor(audio.duration / 60)
        let durationSec = Math.floor(audio.duration % 60)
        maxDuration.innerHTML = `${durationMin} : ${durationSec}`

        let currentMin = Math.floor(audio.currentTime / 60)
        let currentSec = Math.floor(audio.currentTime % 60)
        currentTimedisp.innerHTML = `${currentMin} : ${currentSec} `
    }, 100)


    // Play And Pause Songs
    myplay.addEventListener('click', () => {
        if (audio.paused || audio.currentTime <= 0) {
            audio.play();
            myplay.classList.remove("fa-circle-play")
            myplay.classList.add("fa-circle-pause")
            myplay.classList.add("fa-spin")
            //     time updater on display 
            setInterval(() => {
                let durationMin = Math.floor(audio.duration / 60)
                let durationSec = Math.floor(audio.duration % 60)
                maxDuration.innerHTML = `${durationMin} : ${durationSec}`

                let currentMin = Math.floor(audio.currentTime / 60)
                let currentSec = Math.floor(audio.currentTime % 60)
                currentTimedisp.innerHTML = `${currentMin} : ${currentSec} `
            }, 100)

            // console.log(audio.currentTime)
        }
        else {
            audio.pause();
            myplay.classList.remove("fa-circle-pause")
            myplay.classList.add("fa-circle-play")
            myplay.classList.remove("fa-spin")
        }
    })

    // Progress indicator 
    audio.addEventListener('timeupdate', () => {
        // console.log("timeupdate")
        songProgress = parseInt((audio.currentTime / audio.duration) * 100)
        // console.log(songProgress)
        progress.value = songProgress

    })

    // Progress on click updater
    progress.addEventListener('click', () => {
        audio.currentTime = (progress.value * audio.duration) / 100
        audio.play();
        myplay.classList.remove("fa-circle-play")
        myplay.classList.add("fa-circle-pause")
        myplay.classList.add("fa-spin")


    })


}

// Toggle arrow logic Card <----> Playlist  
function togglearrow() {


    if (isCardDown == 0) {
        // if(audio.paused){
        //     myplay.classList.remove("fa-circle-pause")
        //     myplay.classList.remove("fa-spin")
        //     myplay.classList.add("fa-circle-play")
        // }else{console.log("all good")}
        for (var i = 0; i < container.length; i += 1) {
            container[i].style.display = 'block';
        }
        myarrow.classList.remove("fa-chevron-down")
        myarrow.classList.add("fa-angle-up")

        // 1 = true 
        isCardDown = 1
    }
    else {
        for (var i = 0; i < card.length; i += 1) {
            // flex tha toh flex dikhega na bhai 
            card[i].style.display = 'flex';
        }
        for (var i = 0; i < container.length; i += 1) {
            container[i].style.display = 'none';
        }
        myarrow.classList.remove("fa-angle-up")
        myarrow.classList.add("fa-chevron-down")

        isCardDown = 0
    }



    myplay.classList.remove("fa-circle-play")
    myplay.classList.add("fa-circle-pause")
    myplay.classList.add("fa-spin")
    //     time updater on display 
    setInterval(() => {
        let durationMin = Math.floor(audio.duration / 60)
        let durationSec = Math.floor(audio.duration % 60)
        maxDuration.innerHTML = `${durationMin} : ${durationSec}`

        let currentMin = Math.floor(audio.currentTime / 60)
        let currentSec = Math.floor(audio.currentTime % 60)
        currentTimedisp.innerHTML = `${currentMin} : ${currentSec} `
    }, 100)


    // Play And Pause Songs
    myplay.addEventListener('click', () => {
        if (audio.paused || audio.currentTime <= 0) {
            audio.play();
            myplay.classList.remove("fa-circle-play")
            myplay.classList.add("fa-circle-pause")
            myplay.classList.add("fa-spin")
            //     time updater on display 
            setInterval(() => {
                let durationMin = Math.floor(audio.duration / 60)
                let durationSec = Math.floor(audio.duration % 60)
                maxDuration.innerHTML = `${durationMin} : ${durationSec}`

                let currentMin = Math.floor(audio.currentTime / 60)
                let currentSec = Math.floor(audio.currentTime % 60)
                currentTimedisp.innerHTML = `${currentMin} : ${currentSec} `
            }, 100)

            // console.log(audio.currentTime)
        }
        else {
            audio.pause();
            myplay.classList.remove("fa-circle-pause")
            myplay.classList.add("fa-circle-play")
            myplay.classList.remove("fa-spin")
        }
    })

    // Progress indicator 
    audio.addEventListener('timeupdate', () => {
        // console.log("timeupdate")
        songProgress = parseInt((audio.currentTime / audio.duration) * 100)
        // console.log(songProgress)
        progress.value = songProgress

    })

    // Progress on click updater
    progress.addEventListener('click', () => {
        audio.currentTime = (progress.value * audio.duration) / 100
        audio.play();
        myplay.classList.remove("fa-circle-play")
        myplay.classList.add("fa-circle-pause")
        myplay.classList.add("fa-spin")


    })


}

function toggleheart() {
    // 0-false , 1 -true  

    if (liked == 1) {
        heart.style.color = "red"
        liked = 0
        heart.style.transition = "all 0.5s ease-out"
    } else {
        heart.style.color = "black"
        liked = 1
        heart.style.transition = "all 0.5s ease-in"
    }
}


// function first_function(str){
//     console.log(str)
// }

// var array_of_functions = [
//     function() { first_function('a string') }]

//     for (i = 0; i < array_of_functions.length; i++) {
//         array_of_functions[i]();
//     }

// let mySongArray = [function() { songClick('a string') },
// function() { songClick('a string') },
// function() { songClick('a string') },
// function() { songClick('a king') },
// function() { songClick('a string') }]

    // for (i = 0; i < mySongArray.length; i++) {
    //     mySongArray[i]();
    // }


    // chatgpt 


  // Your existing code...

// Define your mySongArray (assuming it's already defined)
const mySongArray = [
    {
        url: 'songs/whatjhumka.mp3',
        cover: 'path_to_cover_image1.jpg',
        title: 'Song 1',
        artist: 'Artist 1'
    },
    {
        url: 'songs/whatjhumka.mp3',
        cover: 'path_to_cover_image2.jpg',
        title: 'Song 2',
        artist: 'Artist 2'
    },
    // Add more songs in a similar format
];

class CircularQueue {
    constructor(array) {
        this.queue = array;
        this.currentSongIndex = 0;
    }

    next() {
        this.currentSongIndex = (this.currentSongIndex + 1) % this.queue.length;
        return this.queue[this.currentSongIndex];
    }

    previous() {
        this.currentSongIndex = (this.currentSongIndex - 1 + this.queue.length) % this.queue.length;
        return this.queue[this.currentSongIndex];
    }

    getCurrentSong() {
        return this.queue[this.currentSongIndex];
    }
}

const songQueue = new CircularQueue(mySongArray);

// Function to play the current song
function playCurrentSong() {
    //  audio.pause();
    // myplay.classList.remove("fa-circle-pause")
    // myplay.classList.add("fa-circle-play")
    // myplay.classList.remove("fa-spin")
    const currentSong = songQueue.getCurrentSong();
    songClick(currentSong.url, currentSong.cover, currentSong.title, currentSong.artist, 0);
    // You may also want to update other UI elements here, such as cover image, title, artist, etc.
}

// Function to handle "Next" button click
function nextSong() {
    const nextSong = songQueue.next();
    songClick(nextSong.url, nextSong.cover, nextSong.title, nextSong.artist, 0);
   
    playCurrentSong();
}

// Function to handle "Previous" button click
function prevSong() {
    const prevSong = songQueue.previous();
    songClick(prevSong.url, prevSong.cover, prevSong.title, prevSong.artist, 0);
    playCurrentSong();
}

// Add event listeners for the "Next" and "Previous" buttons
document.getElementById('myskipnext').addEventListener('click', nextSong);
document.getElementById('myskipprevious').addEventListener('click', prevSong);

// Your existing code...
