class LikeButton {
  constructor(htmlElem) {
    this.element = htmlElem;

    this.findHTMLElements();
    this.bindEventListeners();
    this.setStage();
  }

  findHTMLElements() {
    this.stage = this.element.dataset.stage;
    this.likeBtnHeart = this.element.querySelector('.like-button__heart');
    this.likeBtnLabel = this.element.querySelector('.like-button__label');
    this.materialIcon = this.likeBtnHeart.querySelector('.material-icons');
  }

  bindEventListeners() {
    this.element.addEventListener('click', this.changeStage.bind(this));
  }

  setStage() {
    if (this.stage === 'true') {
      this.setActive();
    } else if (this.stage === 'false') {
      this.setUnActive();
    }
  }

  changeStage() {
    this.element.classList.toggle('like-button_active');

    this.materialIcon.classList.toggle('material-icons_color_light-shade');
    this.materialIcon.classList.toggle('material-icons_color_purple');
    if (this.materialIcon.className.includes('material-icons_color_purple')) {
      this.materialIcon.textContent = 'favorite';
      this.likeBtnLabel.textContent = Number(this.likeBtnLabel.textContent) + Number(1);
    } else {
      this.materialIcon.textContent = 'favorite_border';
      if (this.likeBtnLabel.textContent >= 0) {
        this.likeBtnLabel.textContent = Number(this.likeBtnLabel.textContent) - Number(1);
      }
    }
    this.likeBtnLabel.classList.toggle('like-button__label_active');
  }

  setActive() {
    this.element.classList.add('like-button_active');
    this.materialIcon.classList.remove('material-icons_color_light-shade');
    this.materialIcon.classList.add('material-icons_color_purple');
    this.materialIcon.textContent = 'favorite';
    this.likeBtnLabel.classList.add('like-button__label_active');
  }

  setUnActive() {
    this.element.classList.remove('like-button_active');
    this.materialIcon.classList.add('material-icons_color_light-shade');
    this.materialIcon.classList.remove('material-icons_color_purple');
    this.materialIcon.textContent = 'favorite_border';
    this.likeBtnLabel.classList.remove('like-button__label_active');
  }
}

export default LikeButton;
