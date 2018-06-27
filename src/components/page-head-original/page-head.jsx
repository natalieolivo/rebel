class Header extends React.Component {
    render() {
        return (<header>Hello world</header>);
    }
}

// WebComponent wrapper for our React Header Component
class Wrapper extends HTMLElement {
    // create / initialize the object for the class
    constructor() {
        // Always call super first in constructor
        super();

        // Element functionality written in here
        let section = document.createElement('section');
        this.root = this.attachShadow({ mode: 'open' }).appendChild(section);
    }

    // fires when custom element is inserted into DOM
    connectedCallback() {
        ReactDOM.render(<Header />, this.root);
    }
}

customElements.define('wrapper-test', Wrapper);