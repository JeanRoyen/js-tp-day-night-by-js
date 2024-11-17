const wrapElement= document.querySelector('.tumbler__wrapper');
const bodyElement = document.body;
const tumblerElement = document.querySelector('.tumbler');
const postElement = document.querySelectorAll('.post')
wrapElement.addEventListener('click', () => {
    bodyElement.classList.toggle('body--night-mode')
    tumblerElement.classList.toggle('tumbler--night-mode')
    postElement.forEach(post => {
        post.classList.toggle('post--night-mode')
    })
})