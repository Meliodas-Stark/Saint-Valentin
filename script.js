function clickfunc() {
    window.location.href = "page-yes.html"
}

function increaseSize() {
    // Supprimer tous les anciens GIFs "non"
    document.querySelectorAll('#no-gif').forEach(function(el) {
        el.remove();
    });
    // Supprimer l'ours en peluche principal s'il existe
    const bear = document.querySelector('.bear-img');
    if (bear) {
        bear.style.display = 'none';
    }
    // Alternance entre deux GIFs "non"
    if (!window.noGifToggle) window.noGifToggle = false;
    window.noGifToggle = !window.noGifToggle;
    const gif = document.createElement('img');
    if (window.noGifToggle) {
        gif.src = 'https://img.over-blog-kiwi.com/0/98/03/83/20200529/ob_f5525c_abf1020a.gif';
        gif.alt = 'gif triste';
    } else {
        gif.src = 'https://www.photofunky.net/output/image/a/2/8/9/a28945/photofunky.gif';
        gif.alt = 'gif photofunky';
    }
    gif.id = 'no-gif';
    gif.style.display = 'block';
    gif.style.margin = '30px auto';
    gif.style.maxWidth = '300px';
    document.body.appendChild(gif);
}