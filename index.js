const hourE1 = document.getElementById("hour")
const minuteE1 = document.getElementById("minute")
const secondE1 = document.getElementById("seconds")
const ampmE1 = document.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    console.log({ h, m, s })

    let ampm;

    if(h > 12) h = h - 12;

    if (h <= 12) ampm = "PM"
    else ampm = "AM"

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerHTML = ampm;

    setTimeout(() => updateClock(), 100)
}

updateClock()
