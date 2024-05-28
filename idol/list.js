let myrow = document.getElementsByClassName("myrow")
let rowplay = document.getElementById("rowplay")
let varNum;
let card = document.getElementsByClassName("card")
let mainCard = document.getElementById("mainCard")
let myarrow = document.getElementById("myarrow")
let container = document.getElementsByClassName("container")
let cardContent = document.getElementsByClassName("cardContent")
let row1 = document.getElementsByClassName("row1")
let songItems = Array.from(document.getElementsByClassName("songItems"))
let isCardDown = 0
let myplay = document.getElementById("myplay");
let heart = document.getElementById("heart");
let liked = 1;
let currentSongIndex = 0;
let songimg = document.getElementsByClassName("songimg")
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



    // myplay.classList.remove("fa-circle-play")
    // myplay.classList.add("fa-circle-pause")
    // myplay.classList.add("fa-spin")
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

const mySongArray1 = [
    {
        url: 'songs/whatjhumka.mp3',
        cover: 'covers/whatjhumka.jpg',
        title: 'Song 1',
        artist: 'Artist 1',
        album: "one direction",
        dispMainElement: '1'
    },
    {
        url: 'songs/pyaarhotakaibaar.mp3',
        cover: 'covers/whatjhumka.jpg',
        title: 'Song 2',
        artist: 'Artist 2',
        album: "one direction",
        dispMainElement: '1'
    },
    {
        url: 'songs/pyaarhotakaibaar.mp3',
        cover: 'covers/whatjhumka.jpg',
        title: 'Song 2',
        artist: 'Artist 2',
        album: "one direction",
        dispMainElement: '1'
    },
    {
        url: 'songs/pyaarhotakaibaar.mp3',
        cover: 'covers/whatjhumka.jpg',
        title: 'Song 2',
        artist: 'Artist 2',
        album: "one direction",
        dispMainElement: '1'
    },
    {
        url: 'songs/pyaarhotakaibaar.mp3',
        cover: 'covers/whatjhumka.jpg',
        title: 'Song 2',
        artist: 'Artist 2',
        album: "one direction",
        dispMainElement: '1'
    },
    {
        url: 'songs/pyaarhotakaibaar.mp3',
        cover: 'covers/whatjhumka.jpg',
        title: 'Song 2',
        artist: 'Artist 2',
        album: "one direction",
        dispMainElement: '1'
    },
    {
        url: 'songs/pyaarhotakaibaar.mp3',
        cover: 'covers/whatjhumka.jpg',
        title: 'Song 2',
        artist: 'Artist 2',
        album: "one direction",
        dispMainElement: '1'
    },
    {
        url: 'songs/pyaarhotakaibaar.mp3',
        cover: 'covers/whatjhumka.jpg',
        title: 'Song 2',
        artist: 'Artist 2',
        album: "one direction",
        dispMainElement: '1'
    },
    {
        url: 'songs/pyaarhotakaibaar.mp3',
        cover: 'covers/whatjhumka.jpg',
        title: 'Song 2',
        artist: 'Artist 2',
        album: "one direction",
        dispMainElement: '1'
    },
    {
        url: 'songs/pyaarhotakaibaar.mp3',
        cover: 'covers/whatjhumka.jpg',
        title: 'Song 2',
        artist: 'Artist 2',
        album: "one direction",
        dispMainElement: '1'
    },
    // Add more songs in a similar format
];

songItems.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByClassName("songimg")[0].src = mySongArray1[i].cover
    element.getElementsByClassName("titlesong")[0].innerText = mySongArray1[i].title
    element.getElementsByClassName("songalbum")[0].innerText = mySongArray1[i].album
    element.getElementsByClassName("songartist")[0].innerText = mySongArray1[i].artist
})


// Iterate through each song item and add a click event listener
songItems.forEach((songItem, index) => {
    songItem.addEventListener('click', () => {
        // Get the song details from your array
        const songDetails = mySongArray1[index];

        // Call the songClick function with the song details
        songClick(songDetails.url, songDetails.cover, songDetails.title, songDetails.artist, songDetails.dispMainElement);
    });
});


function playNextSong() {
    currentSongIndex++; // Move to the next song
    if (currentSongIndex >= mySongArray1.length) { // Check if index is out of bounds
        currentSongIndex = 0; // Wrap around to the first song
    }
    
    // / Reset the displayed time to "0:00"
    const currentTimedisp = document.getElementById("currentTimedisp");
    currentTimedisp.innerHTML = "0:00";

    const nextSong = mySongArray1[currentSongIndex];
    songClick(nextSong.url, nextSong.cover, nextSong.title, nextSong.artist, 0); // 0 to display in the list, not card
     // Reset the progress bar to 0 when starting a new song
     const progress = document.getElementById("progress");
     progress.value = 0;
}

// Add an event listener to your "Next" button
document.getElementById("myskipnext").addEventListener("click", playNextSong);


function playPreviousSong() {
    currentSongIndex--; // Move to the previous song
    if (currentSongIndex < 0) { // Check if index is out of bounds
        currentSongIndex = mySongArray1.length - 1; // Wrap around to the last song
    }
    
    const previousSong = mySongArray1[currentSongIndex];
    songClick(previousSong.url, previousSong.cover, previousSong.title, previousSong.artist, 0); // 0 to display in the list, not card
    
    // Reset the progress bar to 0 when starting a new song
    const progress = document.getElementById("progress");
    progress.value = 0;
}

// Add an event listener to your "Previous" button
document.getElementById("myskipprevious").addEventListener("click", playPreviousSong);













