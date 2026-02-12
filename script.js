function clickfunc() {
    window.location.href = "page-yes.html"
}

function increaseSize() {
    // Supprimer tous les anciens GIFs "non"
    document.querySelectorAll('#no-gif').forEach(function(el) {
        el.remove();
    });
    // Créer et afficher le GIF
    const gif = document.createElement('img');
    gif.src = 'https://img.over-blog-kiwi.com/0/98/03/83/20200529/ob_f5525c_abf1020a.gif';
    gif.alt = 'gif triste';
    gif.id = 'no-gif';
    gif.style.display = 'block';
    gif.style.margin = '30px auto';
    gif.style.maxWidth = '300px';
    document.body.appendChild(gif);
}