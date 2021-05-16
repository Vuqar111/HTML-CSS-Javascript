var modal = document.querySelector('#simplemodal');
var modalbtn = document.querySelector("#modalbtn");
var closeBtn =  document.querySelector(".closebtn");


modalbtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickoutside)

function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}
 
   function clickoutside(e) {
    if(e.target === modal) {
        modal.style.display = 'none';  
    }
   }
