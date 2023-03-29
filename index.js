const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();
    setTimeout(updateClock, 1000);

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();


    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`
    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`
    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`
    
}

updateClock();

// Digital clock

const hourEle = document.querySelector(".Dhour");
const minuteEle = document.querySelector(".Dminute");
const secondEle = document.querySelector(".Dsecond");


function updateDClock() {
    const currentDate = new Date();
    setTimeout(updateDClock, 1000);

    const hourD = currentDate.getHours();
    const minuteD = currentDate.getMinutes();
    const secondD = currentDate.getSeconds();

    console.log(hourD, minuteD, secondD);

    // hourEle.textContent = hourD;
    // minuteEle.textContent = minuteD;
    // secondEle.textContent = secondD;
    hourEle.textContent = getRealNum(hourD);
    minuteEle.textContent = getRealNum(minuteD);
    secondEle.textContent = getRealNum(secondD);

}



// getRealNum = (Num) =>{
//     if (Num>9) {
//         return Num;
//     }
//     else {
//         return '0'+ Num;
//     }
// }


function getRealNum(Num) {
    if (Num>9) {
        return Num;
    }
    else {
        return '0' + Num;
    }
}
getRealNum();
updateDClock();