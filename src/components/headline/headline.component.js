// DONE: a string can be passed in through data attributes
// DONE: style can be added to element via style tag or link a style sheet
// TODO: needs events for interactions
// TODO: use template string in place of clones


/**
 * PageHeadline component
 */
class PageHeadline extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    addStyles() {
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.href = 'http://static4.businessinsider.com/assets/css/min-base-us.css?1529505387';
        this.shadowRoot.appendChild(style);
    }

    /**
     * Once we connect the custom element with our script this fires
     */
    connectedCallback() {
        console.log(`%cconnected Custom element Page Headline`, 'color:orange');
        this.createShadowRoot();
        this.text = this.getAttribute('customInput');
        this.addStyles();
        this.render();
    }

    attributeChangedCallback() {
        console.log('input changed');
    }

    /**
     * this method attaches the custom element to it's showowRoot
     */
    render() {
        console.log('%crender custom element Page Headline', 'color:green;font-weight:bold');
        const div = document.createElement('h1');
        div.textContent = this.text;
        this.shadowRoot.appendChild(div)
    }
}

// Define the new element
try {
    customElements.define('page-headline', PageHeadline);
} catch (error) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!";
    document.body.appendChild(h3);
}
