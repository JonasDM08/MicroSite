//menu code
window.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu');
    var NavContent = document.querySelector('.navigation')
    var links = NavContent.getElementsByTagName('a')

    if (window.scrollY > 50) {
        menu.style.backgroundColor = 'white';
        Array.from(links).forEach(link => link.style.color = 'black');
    } else {
        menu.style.backgroundColor = 'transparent';
        Array.from(links).forEach(link => link.style.color = 'white');
    }
    if (window.scrollY > 500) {
        menu.style.transform = 'translateY(-100%)';
        menu.style.opacity = '0';
        menu.style.transition = 'transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease';
        Array.from(links).forEach(link => link.style.opacity = '0'); 
    } else {
        menu.style.transform = 'translateY(0)'; 
        menu.style.opacity = '1'; 
        menu.style.transition = 'transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease'; 
        Array.from(links).forEach(link => link.style.opacity = '1');
    }
    if (window.scrollY <= 30) {
        setTimeout(function() {
            if (window.scrollY <= 30) {
                Array.from(links).forEach(link => {
                    link.style.transition = '';
                    link.style.color = '';
                    link.style.opacity = ''; 
                });
                menu.style.backgroundColor = '';
            }
        }, 300);
    }
});