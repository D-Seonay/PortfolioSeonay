document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.navbar').clientHeight,
            behavior: 'smooth'
        });
    });
});

const themeBtn = document.querySelector('.theme-btn'); //creation de themeBtn et le liee a la class theme-btn
themeBtn.addEventListener('click',() =>{ //ecouter l'event click sur le btn
    let element = document.body;  // declacrqation de la variable element sur le bloc courant
    element.classList.toggle('light-mode') //active le mode "light-mode" en toggle donc activation <---> desactivation
})
