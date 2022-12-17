const subcolour = document.querySelector('#random');
const colour = document.querySelector('#random');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function rndmsubcolor() {
    let subrgb = [1, 1, 1];
    subrgb[0] = Math.floor(Math.random() * 100);
    subrgb[1] = Math.floor(Math.random() * 100);
    subrgb[2] = Math.floor(Math.random() * 100);
    return subrgb;
    }

subcolour.addEventListener('click', function () {
    const tempsubcolor = rndmsubcolor();
    const newsubcolor = `rgb(${tempsubcolor[0]},${tempsubcolor[1]},${tempsubcolor[2]})`;
    const newcolor = `rgb(${220 - tempsubcolor[0]},${220 - tempsubcolor[1]},${220 - tempsubcolor[2]})`;
    document.documentElement.style.setProperty('--subprimary', newsubcolor);
    document.documentElement.style.setProperty('--primary', newcolor);
});
/*
function rndmcolor() {
    let rgb = [1, 1, 1];
    rgb[0] = Math.floor(getRandomIntInclusive(150, 200));
    rgb[1] = Math.floor(getRandomIntInclusive(150, 200));
    rgb[2] = Math.floor(getRandomIntInclusive(150, 200));
    return rgb;
}

colour.addEventListener('click', function () {
    const tempcolor = rndmcolor();
    const newcolor = `rgb(${tempcolor[0]},${tempcolor[1]},${tempcolor[2]})`;
    document.documentElement.style.setProperty('--primary', newcolor);

});
*/