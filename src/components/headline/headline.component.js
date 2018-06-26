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
     * this method attaches the custom element to it's showowRoot
     */
    render(){
        console.log('%crender custom element', 'color:green;font-weight:bold');
        const div = document.createElement('h1');
        div.textContent = this.text;
        this.shadowRoot.appendChild(div)
    }

    /**
     * Once we connect the custom element with our script this fires
     */
    connectedCallback() {
        console.log(`%cconnected Custom element`, 'color:orange');
        this.createShadowRoot();
        this.text = this.getAttribute('customInput');
        this.addStyles();
        this.render();
    }
}

// Define the new element
customElements.define('page-headline', PageHeadline);
