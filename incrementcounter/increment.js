const counters = document.querySelectorAll('.number');

counters.forEach(counter => {
     counter.innerText = '0';

     const updatecounter = () => {
       const target = +counter.getAttribute('data-target');
       const c = +counter.innerText;

       const incrementspeed =  target / 200;

       if(c < target) {
           counter.innerText = `${Math.ceil(c + incrementspeed)}`;
           setTimeout(updatecounter, 10)
       }else {
           counter.innerText = target;
       }

         
     }
updatecounter();

})