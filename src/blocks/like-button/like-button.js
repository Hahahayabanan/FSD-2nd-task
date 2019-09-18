/* eslint-disable array-callback-return */
const likeBtnList = document.querySelectorAll('.like-button');

const likeBtn = Array.prototype.slice.call(likeBtnList);

function likeBtnClick(event) {
  element = event.target
  element.classList.toggle('like-button_active');

  const likeBtnHeart = element.querySelector('.like-button__heart');
  const likeBtnLabel = element.querySelector('.like-button__label');
  const materialIcon = likeBtnHeart.querySelector('.material-icons');

  materialIcon.classList.toggle('material-icons_color_gray');
  materialIcon.classList.toggle('material-icons_color_purple');
  if (materialIcon.className.includes('material-icons_color_purple')) {
    materialIcon.textContent = 'favorite'
    likeBtnLabel.textContent = Number(likeBtnLabel.textContent) + Number(1);
  } else {
    materialIcon.textContent = 'favorite_border';
    if (likeBtnLabel.textContent >= 0) {
      likeBtnLabel.textContent = Number(likeBtnLabel.textContent) - Number(1);
    }
  }
  likeBtnLabel.classList.toggle('like-button__label_active');
}

likeBtn.map((element) => {
  element.addEventListener('click', likeBtnClick);
});
