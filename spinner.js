const wheel = document.querySelector('.wheel');
const startButton = document.querySelector('.button');
const display = document.querySelector('.display');
let deg = 0;
let zoneSize = 45;

const symbolSegments = {
    1: "50% OFF",
    2: "20% OFF",
    3: "Free Shipping",
    4: "50% OFF",
    5: "20% OFF",
    6: "Free Shipping",
    7: "50% OFF",
    8: "Free Shipping",
}

const handleWin = (actualDeg) => {
    const winSymbol = Math.ceil(actualDeg / zoneSize);
    console.log(winSymbol);
    display.innerHTML = symbolSegments[winSymbol];
}

startButton.addEventListener('click', () => {
    display.innerHTML = "";
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = 'all 15s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('spin');
});

wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('spin');
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    handleWin(actualDeg);
});
