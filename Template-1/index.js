const slides = document.getElementsByClassName('slide');
let index = 2;
const changeslide = () => {
    slides[index].classList.remove('active');
    index = (index + 1)%slides.length;
    slides[index].classList.add('active');
}
changeslide();
setInterval(changeslide,4000);

let tickets = document.querySelector('.tickets');
let backgroundOverlay = document.getElementById('background-overlay');

const displaytickets = () => {
    tickets.style.display = "block";
    backgroundOverlay.style.display = "block";
};

const closetickets = () => {
    tickets.style.display = "none";
    backgroundOverlay.style.display = "none";
};
const isBuyButton = (element) => {
    return element.id === 'btn';
};
window.onclick = (event) => {
    const target = event.target;
    const isInsideTickets = target.closest('.tickets');
    const isBuyButtonClick = isBuyButton(target);

    if (isInsideTickets) {

    } else if (isBuyButtonClick) {

    } else {
        tickets.style.display = "none";
        backgroundOverlay.style.display = "none";
    }
};
function myFunction() {
    let x = document.getElementsById('nav');
    if(x.className === 'navbar'){
        x.className += ' responsive';
    }
    else {
        x.className = 'navbar';
    }
}