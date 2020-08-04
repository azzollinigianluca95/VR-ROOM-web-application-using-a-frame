var startExperienteBtn = document.getElementById('start_experience');

startExperienteBtn.onclick = function(){
    document.getElementById('container').outerHTML = '';
    document.getElementsByTagName('a-scene')[0].style.zIndex = 'auto';
};

document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    scene.addEventListener('loaded', function (e) {
        splash.style.display = 'none';
    });
});
