const btn = document.querySelector('.btn');
const colorInput = document.querySelector('.color');
const randomRgb = function (number) {
    return Math.floor(Math.random() * (number + 1));
};

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${randomRgb(255)}, ${randomRgb(255)}, ${randomRgb(255)})`;
    colorInput.innerHTML = `rgb(${randomRgb(255)}, ${randomRgb(255)}, ${randomRgb(255)})`;
});