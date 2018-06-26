// component functionality is encapsulated here
class PageHead extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here
    let template = document.getElementById('page-head');
    let templateContent = template.content;
    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
  }
}

// Define the new element
customElements.define('page-head', PageHead);
