mobileMenu = document.getElementById('mobile-menu')
btn = document.getElementById('mobile-menu-btn')
mobilemenuClose = document.getElementById('mobile-menu_close')
body = document.querySelector('#body')

btn.onclick = function() {
    mobileMenu.style.display = "block";
    body.style.overflow= "hidden";
 
}

mobilemenuClose.onclick = function() {
    mobileMenu.style.display = "none";
    body.style.overflow = "scroll";
    
}