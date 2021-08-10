const daysCurrent = document.getElementById("days");
const hoursCurrent = document.getElementById("hours");
const minutesCurrent = document.getElementById("minutes");
const secondsCurrent = document.getElementById("seconds");


const nextYear = new Date().getFullYear()  + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

const updateCountdown = () => {
    const currentTime =  new Date();
    const difference = newYearTime - currentTime;
    daysCurrent.innerHTML = Math.floor(difference / 1000 / 60 / 60 / 24)
    hoursCurrent.innerHTML = Math.floor(difference / 1000 / 60 / 60) % 24
    minutesCurrent.innerHTML = Math.floor(difference / 1000 / 60) % 60
    secondsCurrent.innerHTML = Math.floor(difference / 1000) % 60

}

setInterval(() => {
    updateCountdown();    
}, 1000);
 