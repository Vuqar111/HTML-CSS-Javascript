let hour1 = 00;
let tens1 = 00;
let san1 = 00;
const appendhour = document.querySelector('#hour'); 
const appendtens = document.querySelector('#tens');
const appendsan = document.querySelector('#san');
const startbutton = document.querySelector('#start');
const stopbutton = document.querySelector('#stop');
const resetbutton = document.querySelector('#reset');
let interval;



function starttimer() {
     san1++;

     if(san1 < 9) {
         appendsan.innerHTML = "0" + san1;
     }
     if(san1 > 9) {
         appendsan.innerHTML = san1;
     }
     if(san1 > 99) {
         tens1++;
         appendtens.innerHTML = "0" + tens1;
         san1 = 0;
         appendsan.innerHTML = "0" + 0;
     }
     if(tens1 > 9) {
         appendtens.innerHTML = tens1;
     }
     if(tens1 > 60) {
         hour1++;
         appendhour.innerHTML = "0" + hour1;
         tens1 = 0;
         appendtens.innerHTML = "0" + 0;
     }

     if(hour1 > 9) {
         appendhour.innerHTML = hour1;
     }
}

startbutton.onclick = function() {
    interval = setInterval(starttimer);
}
stopbutton.onclick = function() {
    clearInterval(interval);
}
resetbutton.onclick = function() {
    clearInterval(interval);
    hour1 = "00";
    tens1 = "00";
    san1 = "00";
    appendhour.innerHTML = hour1;
    appendtens.innerHTML = tens1;
    appendsan.innerHTML = san1;
}


document.querySelector('.nightmoon').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});


