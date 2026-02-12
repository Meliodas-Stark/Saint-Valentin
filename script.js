function clickfunc() {
    window.location.href = "page-yes.html"
}

function increaseSize() {
    const bear = document.querySelector('.bear-img');
    if (bear) {
        // Remplacer l'image par un ours énervé (exemple de GIF libre)
        bear.src = "https://img.over-blog-kiwi.com/0/98/03/83/20200529/ob_f5525c_abf1020a.gif";
        bear.alt = "Ours en colère";
    }
}