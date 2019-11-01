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
    this.heart = this.heartContainer.querySelector('i');
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
    this.heart.classList.toggle('material-icons_color_light-shade');
    this.heart.classList.toggle('material-icons_color_purple');
    if (this.heart.className.includes('material-icons_color_purple')) {
      this.heart.textContent = 'favorite';
      this.likesNumber.textContent = Number(this.likesNumber.textContent) + Number(1);
    } else {
      this.heart.textContent = 'favorite_border';
      if (this.likesNumber.textContent >= 0) {
        this.likesNumber.textContent = Number(this.likesNumber.textContent) - Number(1);
      }
    }
    this.likesNumber.classList.toggle('like-button__label_active');
  }

  setActive() {
    this.button.classList.add('like-button_active');
    this.heart.classList.remove('material-icons_color_light-shade');
    this.heart.classList.add('material-icons_color_purple');
    this.heart.textContent = 'favorite';
    this.likesNumber.classList.add('like-button__label_active');
  }

  setUnActive() {
    this.button.classList.remove('like-button_active');
    this.heart.classList.add('material-icons_color_light-shade');
    this.heart.classList.remove('material-icons_color_purple');
    this.heart.textContent = 'favorite_border';
    this.likesNumber.classList.remove('like-button__label_active');
  }
}

export default LikeButton;
