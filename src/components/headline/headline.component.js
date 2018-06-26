// DONE: a string can be passed in through data attributes
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
        // TODO: can me make this dynamic'
        style.setAttribute('custom-style', '');

        const headTag = document.getElementsByTagName('head')[0];
        console.dir(headTag);
        headTag.appendChild();
    }

    /**
     * Once we connect the custom element with our script this fires, before render
     */
    connectedCallback() {
        console.log(`%cconnected Custom element`, 'color:orange');
        this.createShadowRoot();
        this.text = this.getAttribute('customInput');
        this.render();
    }

    render(){
        console.log('%crender custom element', 'color:green;font-weight:bold');
        const div = document.createElement('h1');
        div.textContent = this.text;
        this.shadowRoot.appendChild(div)
    }
}

// Define the new element
customElements.define('page-headline', PageHeadline);
