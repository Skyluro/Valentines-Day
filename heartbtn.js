const proto = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
const envelope = document.querySelector('.container-env')

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function go() {
    for (var i = 0; i < 10; i++) {
        const heart = proto.cloneNode(true);
        heart.style.display = 'inline-flex';
        heart.style.animationDelay = `${rand(0, 0.3)}s`;
        heart.style.offsetPath = `path('M0,0 c 0,-200 ${rand(-200, 200)},${rand(-50, 50)} ${rand(-200, 200)},${rand(-50, 50)}')`;
        wrapper.append(heart);
    }
}

const button = document.querySelector('.js-button');

button.addEventListener('click', () => {
    envelope.style.zIndex="-1";
    go();
    button.blur();
    setTimeout(() => { window.location.href = "./yes.html"; }, 2000);
});