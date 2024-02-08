const lid = document.getElementsByClassName("lid")[0];
const card = document.getElementsByClassName("card")[0];
const container = document.getElementById("envelope-container");
const move_button = document.getElementById("move-btn");
const yes_no_container_hide = document.getElementById("yes-no-container-hide");


var envelopeOpen = false;
container.addEventListener("click", openEnvelope);

move_button.addEventListener('mouseover', function () {
    move_button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    move_button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
move_button.addEventListener('click', function () {
    alert('you clicked me')
});

function openEnvelope() {
    if (envelopeOpen) {
        lid.style.animation="open-rev 2s";
        lid.style.animationFillMode="";

        card.style.animation="slide-rev 0.2s ease-out";
        card.style.animationDelay="";
        card.style.animationFillMode="";

        yes_no_container_hide.style.visibility="hidden";
        yes_no_container_hide.style.opacity="0";

        setTimeout(() => {
            move_button.style.position="";
            move_button.style.float="left";
            move_button.style.left="auto";
            move_button.style.top="auto";
        }, 2000);
    } else {
        lid.style.animation="open 0.5s";
        lid.style.animationFillMode="forwards";

        card.style.animation="slide 0.2s";
        card.style.animationDelay="0.5s";
        card.style.animationFillMode="forwards";

        yes_no_container_hide.style.visibility="visible";
        yes_no_container_hide.style.opacity="1";

        move_button.style.position="absolute";
        move_button.style.left=getCssProperty("move-btn", "left");
        move_button.style.top=getCssProperty("move-btn", "top");
    }
    envelopeOpen = !envelopeOpen;
}

function getCssProperty(elmId, property){
    var elem = document.getElementById(elmId);
    return window.getComputedStyle(elem,null).getPropertyValue(property);
}
