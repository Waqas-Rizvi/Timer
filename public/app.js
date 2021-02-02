var a = document.getElementById("sec")
var b = document.getElementById("min")
var c = document.getElementById("hour")

function timer() {
    a.value--
    if (a.value == -1 ) {
        b.value--
        a.value = 59
    } else if (b.value == -1){
        c.value--
        b.value = 59
    }
}

function start() {
    paus = setInterval(timer, 1000)
}

function pause() {
    clearInterval(paus)
}