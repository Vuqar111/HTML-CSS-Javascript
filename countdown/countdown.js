const time = document.querySelector('.time');
const min = document.querySelector('.min');
const starttbn = document.querySelector('.start');
const stopbtn = document.querySelector('.stop');

const downbtn = document.querySelector('.down');
let clicksong = new Audio("click.mp3");
let breaksong = new Audio("bell.mp3");


let seconds = "00";
let minutes = 25;


  function template() {
    document.querySelector('.time').innerHTML = minutes;
    document.querySelector('.min').innerHTML = seconds;
  }
  
  function starttimer() {
    clicksong.play();
    minutes = 24;
    seconds = 59;
  
   
    document.querySelector('.time').innerHTML = minutes;
    document.querySelector('.min').innerHTML = seconds;
  
 
    var minutesinterval = setInterval(minutesTimer, 60000);
    var secondsinterval = setInterval(secondsTimer, 1000);
  

    function minutesTimer() {
      minutes = minutes - 1;
      document.querySelector('.time').innerHTML = minutes;
    }
  
  
    function secondsTimer() {
      seconds = seconds - 1;
      document.querySelector('.min').innerHTML = seconds;
     if(seconds < 10) {
        document.querySelector('.min').innerHTML = "0" + seconds;
     }

      if (seconds == 0) {
        if (minutes == 0) {
          
          clearInterval(minutesinterval);
          clearInterval(secondsinterval);
          document.querySelector('.time').innerHTML = "00";
          document.querySelector('.min').innerHTML = "00";
  
          breaksong.play();
        }
       seconds = 60;
      }
    }
  }

function stoptimer() {
    clearInterval(starttimer);
    clicksong.play();

}

function upbutton() {
    clicksong.play();
    minutes += 1;
    document.querySelector('.time').innerHTML = minutes;
}
function downbutton() {
    clicksong.play();

    minutes -= 1;
    document.querySelector('.time').innerHTML = minutes;
}















// function starttimer() {
//     clicksong.play();
//     setInterval(function() {
//         time.innerHTML = second;
//         min.innerHTML = minutes;
//         second = 19;
//         minutes -=1;
//         if(minutes < 10) {
//             min.innerHTML = "0" + minutes;
//         }

//         if(minutes <= 0) {
           
//             second -= 1;
//             time.innerHTML = second;
//             minutes = 59;
//         }
//     }, 1000);
// }
//     starttbn.addEventListener('click', starttimer);









