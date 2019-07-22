let likeBtn_list = document.querySelectorAll('.like-btn');


let likeBtn = Array.prototype.slice.call(likeBtn_list);

likeBtn.forEach(element => {
    element.addEventListener('click', function() {
        element.classList.toggle('active');

        let likeBtnHeart = element.querySelector('.like-btn__heart');
        let likeBtnLabel = element.querySelector('.like-btn__label');

        likeBtnHeart.classList.toggle('active');
        likeBtnHeart.innerHTML = (likeBtnHeart.className.includes('active')) ? "favorite" : "favorite_border";
        likeBtnLabel.classList.toggle('active');
    });
});

