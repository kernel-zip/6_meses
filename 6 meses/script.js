function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "6" && password === "11-12-2022") {
        document.getElementById("login").style.display = "none";
        document.getElementById("profiles").style.display = "block";
    } else {
        alert("Tonta pe, hazlo bien");
    }
}

function showContent() {
    document.getElementById("profiles").style.display = "none";
    document.getElementById("content").style.display = "block";
}

function togglePlay() {
    var video = document.getElementById("video-player");
    var playBtn = document.getElementById("play-btn");

    if (video.paused) {
        video.play();
        playBtn.innerHTML = "&#10074;&#10074;";
    } else {
        video.pause();
        playBtn.innerHTML = "&#9658;";
    }
}

function toggleMute() {
    var video = document.getElementById("video-player");
    var muteBtn = document.getElementById("mute-btn");

    if (video.muted) {
        video.muted = false;
        muteBtn.innerHTML = "&#128266;";
    } else {
        video.muted = true;
        muteBtn.innerHTML = "&#128263;";
    }
}

function adjustVolume() {
    var video = document.getElementById("video-player");
    var volumeSlider = document.getElementById("volume-slider");
    video.volume = volumeSlider.value;
}

function confirmButtonClicked(message) {
    if (message === 'Sip❤') {
        alert("Intentabas darle 'No' p, ya vi, Jajajajaja, te amo mucho mi amor, gracias por todo, te amo❤");
    } else if (message === 'No') {
        alert("ᵃ");
    }
    document.getElementById("additional-content").style.display = "none";
    document.getElementById("profiles").style.display = "block";
}


setTimeout(function() {
  document.getElementById("additional-content").style.display = "block";
}, 30000);

// Obtener el elemento de texto
var textoElemento = document.getElementById("textoo");

// Mostrar el texto inicialmente
textoElemento.style.visibility = "visible";

// Ocultar el texto después de 10 segundos
setTimeout(function() {
  textoElemento.style.visibility = "hidden";
}, 30000);

