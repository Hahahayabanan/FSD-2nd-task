likeBtn = document.querySelector('.like-btn');
likeBtnHeart = document.querySelector('.like-btn__heart');
likeBtnLabel = document.querySelector('.like-btn__label');

likeBtn.addEventListener('click', function() {
    likeBtn.classList.toggle('active');
    likeBtnHeart.classList.toggle('active');
    likeBtnHeart.innerHTML = (likeBtnHeart.className.includes('active')) ? "favorite" : "favorite_border";
    likeBtnLabel.classList.toggle('active');

});