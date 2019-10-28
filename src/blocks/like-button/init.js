import LikeButton from './like-button';

document.addEventListener('DOMContentLoaded', () => {
  const likeBtnList = document.querySelectorAll('.js-like-button');
  likeBtnList.forEach((val) => new LikeButton(val));
});
