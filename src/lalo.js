window.onload = ()=>{
    [...document.querySelectorAll('[data-src]')].map(img => img.addEventListener('load', e => img.src = img.dataset.src))
}