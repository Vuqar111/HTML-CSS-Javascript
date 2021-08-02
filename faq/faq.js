const toogles = document.querySelectorAll('.fag-toogle');


toogles.forEach(toggle =>  {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})