
console.log("working");
let btnclick = document.getElementById("btnclick")
// let sname = "songs/whatjhumka.mp3"
function songClick(sname){
        let songName = sname

        let audio = new Audio(`${songName}`);
        let myplay = document.getElementById("myplay");
        let progress = document.getElementById("progress")
        let currentTimedisp = document.getElementById("currentTimedisp")
        let maxDuration = document.getElementById("maxDuration")
        audio.play();
         //     time updater on display 
         setInterval(()=>{
                let durationMin = Math.floor(audio.duration/60)
                let durationSec = Math.floor(audio.duration%60)
                maxDuration.innerHTML = `${durationMin} : ${durationSec}`

            let currentMin = Math.floor(audio.currentTime/60)
            let currentSec = Math.floor(audio.currentTime%60)
            currentTimedisp.innerHTML = `${currentMin} : ${currentSec} `
    },100)
// let audio = new Audio(`${songName}`);
// let myplay = document.getElementById("myplay");
// let progress = document.getElementById("progress")
// let currentTimedisp = document.getElementById("currentTimedisp")
// let maxDuration = document.getElementById("maxDuration")

// Play And Pause Songs
myplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime <= 0){
            audio.play();
            myplay.classList.remove("fa-circle-play")
            myplay.classList.add("fa-circle-pause")
            myplay.classList.add("fa-spin")
        //     time updater on display 
            setInterval(()=>{
                    let durationMin = Math.floor(audio.duration/60)
                    let durationSec = Math.floor(audio.duration%60)
                    maxDuration.innerHTML = `${durationMin} : ${durationSec}`

                let currentMin = Math.floor(audio.currentTime/60)
                let currentSec = Math.floor(audio.currentTime%60)
                currentTimedisp.innerHTML = `${currentMin} : ${currentSec} `
        },100)
       
        // console.log(audio.currentTime)
    }
    else{
        audio.pause();
        myplay.classList.remove("fa-circle-pause")
            myplay.classList.add("fa-circle-play")
            myplay.classList.remove("fa-spin")
    }
})

// Progress indicator 
audio.addEventListener('timeupdate',()=>{
        // console.log("timeupdate")
        songProgress = parseInt((audio.currentTime/audio.duration)*100) 
        // console.log(songProgress)
        progress.value = songProgress

})

// Progress on click updater
progress.addEventListener('click',()=>{
      audio.currentTime = (progress.value*audio.duration)/100 
        audio.play();
        myplay.classList.remove("fa-circle-play")
        myplay.classList.add("fa-circle-pause")
        myplay.classList.add("fa-spin")
       
       
})
}

// btnclick.addEventListener('click',()=>{
//         console.log("working event of btnclick")
//         songClick("songs/whatjhumka.mp3")
// })