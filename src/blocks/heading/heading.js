class Heading {
  constructor(container) {
    this.containerHTML = container;

    this.setDOMElements();
  }

  setDOMElements() {
    this.elementHTML = this.containerHTML.querySelector('.heading');
  }

  getElement() {
    return this.elementHTML;
  }

  getTextContent() {
    return this.elementHTML.textContent;
  }
}

export default Heading;
