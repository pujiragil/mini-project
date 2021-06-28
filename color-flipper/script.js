const btn = document.querySelector('.btn');
const colorInput = document.querySelector('.color');
const randomHex = () => {
    let hex = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + hex.slice(0, 6);
};

btn.addEventListener('click', () => {
    colorInput.innerHTML = randomHex();
    document.body.style.backgroundColor = randomHex();
});