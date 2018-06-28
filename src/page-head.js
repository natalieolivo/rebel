// component functionality is encapsulated here
class PageHead extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        this._getPageHeadTemplate().then((html) => {
            // Element functionality written in here
            const domParser = new DOMParser();
            const templateDom = domParser.parseFromString(html, 'text/html');
            const template = templateDom.getElementById('page-head');
            if (template) {
                const templateContent = template.content;
                const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
            }
        });
    }

    async _getPageHeadTemplate() {
        const html = await (await fetch('page-head.component.html')).text();
        return html;
    }
}

// Define the new element
customElements.define('page-head', PageHead);
