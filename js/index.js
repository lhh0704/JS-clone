// const clock = document.querySelector("h2#clock");
// function getClock() {

//     const christmasDate = new Date("2022-12-25");
//     const nowDate = new Date();
//     const day = christmasDate - nowDate
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");
//     clock.innerText = `${hours}h ${minutes}m ${seconds}s`;
//   }

//   getClock();
//   setInterval(getClock, 1000);

const clock = document.querySelector("h2#clock");

function diffDay() {
    const christmasTime = new Date("2022-12-25");
    const todayTime = new Date();

    const result = christmasTime - todayTime;

    const resultDay = String(Math.floor(result / (1000 * 60 * 60 * 24)));
    const resultHour = String(Math.floor((result / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const resultMin = String(Math.floor((result / (1000 * 60)) % 60)).padStart(2, "0");
    const resultSec = String(Math.floor(result / 1000 % 60)).padStart(2, "0");

    clock.innerText = `${resultDay}d ${resultHour}h ${resultMin}m ${resultSec}s`;
}

diffDay();
setInterval(diffDay, 1000)

