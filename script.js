const button = document.querySelector('button');
const cardContainer = document.querySelector('.card-container');
const popUp = document.querySelector('.popup');
const closeIcon = document.querySelector('.close-icon');
const subscribeButton = document.querySelector('.sub-btn');
const footer = document.querySelector('footer');

button.addEventListener('click', (e)=> {
    e.stopPropagation();
    cardContainer.classList.add('open');
    footer.classList.add('footer-text');
});

subscribeButton.addEventListener('click', (e)=> {
    cardContainer.classList.remove('open');
    footer.classList.remove('footer-text');
});

closeIcon.addEventListener('click', (e)=> {
    e.stopPropagation();
    cardContainer.classList.remove('open');
    footer.classList.remove('footer-text');
});

popUp.addEventListener('click', (e)=> {
    e.stopPropagation();
});

cardContainer.addEventListener('click', (e)=> {
    cardContainer.classList.remove('open');
    footer.classList.remove('footer-text');
});