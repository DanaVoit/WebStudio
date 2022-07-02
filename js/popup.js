popup = document.getElementById('popup')
btn = document.getElementById('popup_open')
popupClose = document.getElementById('popup_close')
body = document.querySelector('#body')

btn.onclick = function() {
    popup.style.display = "block";
    body.style.overflow= "hidden";
    body.style.background= "rgba(0, 0, 0, 0.2)";
}


popupClose.onclick = function() {
    popup.style.display = "none";
    body.style.overflow = "scroll";
    body.style.background= "none";
}


