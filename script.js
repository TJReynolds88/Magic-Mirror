var video = document.querySelector('video');
var select = document.querySelector('select');

function changeEffect() {
    video.style.filter = select.value
}

select.addEventListener('change', changeEffect);

navigator.mediaDevices
    .getUserMedia({
        video:true,
    })
    .then(function (stream) {
        video.srcObject = stream
    })