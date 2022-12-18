// DOM Elements
const button = document.querySelector('#random');

// Generate random number
const getRandomNumber = (low, high) => {
	const r = Math.floor(Math.random() * (high - low + 1)) + low;
	return r;
}

// Get random hsla value
const getRandomColor = (h,s,l,a) => {
	var hue = getRandomNumber(h[0], h[1]);
	var saturation = getRandomNumber(s[0], s[1]);
	var lightness = getRandomNumber(l[0], l[1]);
	var alpha = getRandomNumber(a[0] * 100, a[1] * 100) / 100;
	
	return {
		h: hue,
		s: saturation,
		l: lightness,
		a: alpha,
		hslaValue: getHSLAColor(hue, saturation, lightness, alpha)
	}
}

// format hsla value
function getHSLAColor(h, s, l, a) {
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

// ranges for each value in hsla
const h_range = [0, 360];
const s_range = [100, 100];
const l_range = [40, 40];
const a_range = [1, 1];

// assign random hsla values and get complement
const changeTheme = () => {
	const color = getRandomColor(h_range, s_range, l_range, a_range);
	const complement = getHSLAColor(color.h - 180, 120 - color.s, 60 - color.l, color.a);
	document.documentElement.style.setProperty('--subprimary', complement);
    document.documentElement.style.setProperty('--primary', color.hslaValue);
}

// assign to button click and onload
button.addEventListener('click', () => {
	changeTheme();
});

changeTheme();