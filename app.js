// cambio entre fuentes 

document.getElementById('switch-font').addEventListener('click', function() {
    const body = document.querySelector('body');

    if (body.classList.contains('roboto')) {
        body.classList.remove('roboto');
        body.classList.add('mi-fuente');
    } else {
        body.classList.remove('mi-fuente');
        body.classList.add('roboto');
    }
});

//cambio iconos LIKE

document.querySelector('.like-button').addEventListener('click', function() {
    const noLikeIcon = document.querySelector('.no-like');
    const likeIcon = document.querySelector('.like');
    
    if (noLikeIcon.style.display === 'none') {
        noLikeIcon.style.display = 'inline';
        likeIcon.style.display = 'none';
    } else {
        noLikeIcon.style.display = 'none';
        likeIcon.style.display = 'inline';
    }
});