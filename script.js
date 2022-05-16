const btn = document.querySelector('.burger')
btn.addEventListener('click', () => {
    console.log("click");
    const nav = document.querySelector('.list')
    if (nav.style.display === 'none') {
        nav.style.display = 'block'
    } else {
        nav.style.display = 'none'
    }
})

const hippo = document.querySelector('.poop');
hippo.addEventListener('click', function(event) {
    event.preventDefault();
    alert("You're the best, click on OK dude !");


    window.open("hippo.html", '_blank');
});

function Jouerson() {
    const sound = document.querySelector(".logo-toilets");
    sound.play();
}