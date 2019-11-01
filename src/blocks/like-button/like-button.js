import MaterialIcons from '../material-icons/material-icons';

class LikeButton {
  constructor(htmlElem) {
    this.button = htmlElem;

    this.findHTMLElements();
    this.bindEventListeners();
    this.setStage();
  }

  findHTMLElements() {
    this.stageData = this.button.dataset.stage;
    this.heartContainer = this.button.querySelector('.js-like-button__heart');
    this.heart = new MaterialIcons(this.heartContainer);
    this.likesNumber = this.button.querySelector('.js-like-button__label');
  }

  bindEventListeners() {
    this.button.addEventListener('click', this.handleButtonClick.bind(this));
  }

  setStage() {
    if (this.stageData === 'true') {
      this.setActive();
    } else if (this.stageData === 'false') {
      this.setUnActive();
    }
  }

  handleButtonClick() {
    this.button.classList.toggle('like-button_active');

    if (this.button.className.includes('like-button_active')) {
      this.setActive();
      this.likesNumber.textContent = Number(this.likesNumber.textContent) + Number(1);
    } else {
      this.setUnActive();
      if (this.likesNumber.textContent >= 0) {
        this.likesNumber.textContent = Number(this.likesNumber.textContent) - Number(1);
      }
    }
  }

  setActive() {
    this.button.classList.add('like-button_active');
    this.heart.setColor('purple');
    this.heart.setTextContent('favorite');
    this.likesNumber.classList.add('like-button__label_active');
  }

  setUnActive() {
    this.button.classList.remove('like-button_active');
    this.heart.setColor('light-shade');
    this.heart.setTextContent('favorite_border');
    this.likesNumber.classList.remove('like-button__label_active');
  }
}

export default LikeButton;
