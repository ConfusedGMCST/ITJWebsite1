let executed = false;

window.onload = function() {
    const pageTitle = document.getElementById('pageTitle');
    const SEHeader = document.getElementById('SEHeader');

    pageTitle.style.width = '90%';

    SEHeader.style.transition = '0.5s ease';
    SEHeader.onmouseenter = function(){
        SEHeader.style.color = 'lightblue';
        SEHeader.style.width = '90%';
    }
    SEHeader.onmouseleave = function(){
        SEHeader.style.color = 'white';
        SEHeader.style.width = '80%';
    }
}

function toGithub() {
    window.location.replace("https://github.com/ConfusedGMCST");
}