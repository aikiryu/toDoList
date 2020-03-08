
const timmer = document.querySelector('.timmer'),
hr = document.querySelector('.hr'),
min = document.querySelector('.min'),
sec = document.querySelector('.sec');
let clock = function(){
    const now = new Date(),
    nowHr = now.getHours(),
    nowMin = now.getMinutes(),
    nowSec = now.getSeconds();

    hr.innerText = nowHr;
    min.innerText = nowMin;
    sec.innerText = nowSec
}
setInterval(clock,500)