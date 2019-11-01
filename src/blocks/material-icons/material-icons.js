class MaterialIcons {
  constructor(container) {
    this.containerHTML = container;

    this.setDOMElements();
  }

  setDOMElements() {
    this.elementHTML = this.containerHTML.querySelector('.material-icons');
  }

  setColor(color) {
    this.elementHTML.classList.remove('material-icons_color_purple');
    this.elementHTML.classList.remove('material-icons_color_light-shade');
    this.elementHTML.classList.add(`material-icons_color_${color}`);
  }

  getElement() {
    return this.elementHTML;
  }

  getTextContent() {
    return this.elementHTML.textContent;
  }

  setTextContent(text) {
    this.elementHTML.textContent = text;
  }
}

export default MaterialIcons;
