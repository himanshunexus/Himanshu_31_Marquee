const container = document.getElementById('container');
const btnIncrease = document.getElementById('increase');
const btnDecrease = document.getElementById('decrease');
const btnReset = document.getElementById('reset');


btnIncrease.addEventListener('click', () => {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
});


btnDecrease.addEventListener('click', () => {
    if (container.lastElementChild) {
        container.lastElementChild.remove();
    }
});


btnReset.addEventListener('click', () => {
    container.innerHTML = '';
});