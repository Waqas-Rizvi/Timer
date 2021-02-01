// var hour = 0
// var min = 0
// var sec = 0
// var mili = 0
// var hours = document.getElementById("hour")
// var minutes = document.getElementById("min")
// var seconds = document.getElementById("sec")
// var miliseconds = document.getElementById("mili")

// function stopwatch() {
//     mili++
//     miliseconds.innerHTML = mili
//     if (mili == 100) {
//         sec++
//         seconds.innerHTML = sec
//         mili = 0
//     } else if (sec == 59) {
//         sec = 0
//         min++
//         minutes.innerHTML = min  
//     } else if (min == 60) {
//         hour++
//         hours.innerHTML = hour
//         min = 0
//     }
// }

// function start(){
//     paus = setInterval(stopwatch, 10)
//     document.getElementById("start").style.display = "none"
//     document.getElementById("pause").style.display = "inline-block"
// }

// function pause(){
//     clearInterval(paus)
//     document.getElementById("pause").style.display = "none"
//     document.getElementById("resume").style.display = "inline-block"
//     document.getElementById("reset").style.display = "inline-block"
// }

// function resume(){
//     setInterval(stopwatch, 10)
//     document.getElementById("resume").style.display = "none"
//     document.getElementById("pause").style.display = "inline-block"
//     document.getElementById("reset").style.display = "none"
// }

// function reset(){
//     hour = "00"
//     min = "00"
//     sec = "00"
//     mili = "00"
//     hours.innerHTML = hour
//     minutes.innerHTML = min
//     seconds.innerHTML = sec
//     miliseconds.innerHTML = mili
// }


"TIMER"

var hour = 0
var min = document.getElementById("min")
var sec = document.getElementById("sec")
var displayhour = document.getElementById("saad")



function w(){
    hour++
    displayhour.innerHTML = hour
}
setInterval(w, 10)