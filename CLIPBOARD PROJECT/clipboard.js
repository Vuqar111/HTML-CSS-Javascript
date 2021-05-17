const copybutton = document.querySelector('#copy');
const alertcontainer = document.querySelector('#alertcontainer');
copybutton.addEventListener('click', copied);


function copied() {
    let text= document.getElementById("text");
    text.select();
    text.setSelectionRange(0,9999);
    document.execCommand("copy");
   alertcontainer.style.display = 'block';
}