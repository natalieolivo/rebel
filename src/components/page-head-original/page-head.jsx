class Header extends React.Component {
    constructor() {
        super();
    };

    render() {
        function ListItems (items) {

            const listData  = items.listData;
            const verticals = listData.verticals;
            const listItems = verticals.map(function(vertical) {
                return <li className="verticals-flex-grow verticals-listitem" key={vertical.label}>
                            <a href={vertical.href}>{vertical.label}</a>
                       </li>
            });
            return(
                <ul className="row verticals list-unstyled">{listItems}</ul>
            );
        }

        return (
            <header className="l-masthead">
                <div className="container masthead-container">
                    <div className="row">
                        <div className="col-4 col-md-3 col-lg-2 col-xl-3 logo logo-vertically-center">
                            <a href={this.props.headerData.href} className="logo-vertically-center-link">
                                <svg className="svg-icon logo-BI-icon logo-vertically-center-icon" width="103" height="32" viewBox="0 0 103 32" xmlns="http://www.w3.org/2000/svg"><g className="logo-BI logo-vertically-center-icon-fill" fill="#111" fill-rule="evenodd"><path d="M7.984 32h2.396V19.2H7.984zM16.767 31.808h2.146v-8.076L27.946 32V19.392h-2.14v7.938l-9.039-8.13zM32.845 28.708c1.168.91 2.57 1.436 4.073 1.436 1.464 0 2.491-.504 2.491-1.617 0-.97-.655-1.35-1.802-1.775l-1.857-.645c-1.712-.608-3.014-1.496-3.014-3.537 0-2.183 1.971-3.37 4.328-3.37 1.444 0 2.76.363 3.788 1.006v2.165c-1.069-.79-2.239-1.334-3.742-1.334-1.294 0-2.261.483-2.261 1.49 0 .91.607 1.274 1.676 1.64l2.069.726c2.005.705 2.925 1.798 2.925 3.596 0 2.262-1.99 3.511-4.601 3.511-1.716 0-3.175-.48-4.073-1.086v-2.206zM47.109 32h2.395V19.2h-2.395zM60.74 30.063c2.7 0 4.143-1.732 4.143-4.466 0-2.754-1.444-4.48-4.143-4.48h-2.67v8.946h2.67zM55.89 19.2h4.93c3.795 0 6.249 2.5 6.249 6.397 0 3.9-2.454 6.403-6.249 6.403h-4.93V19.2zM79.047 19.2v1.917H73.25v3.08h5.199v1.895h-5.2v3.971h5.798V32h-7.985V19.2zM87.549 24.996h2.377c1.407 0 2.2-.772 2.2-1.959s-.793-1.96-2.2-1.96h-2.377v3.92zm0 1.81V32h-2.115V19.2h4.532c2.584 0 4.256 1.331 4.256 3.837 0 2.143-.928 3.374-2.905 3.69L95.814 32h-2.406l-4.354-5.193H87.55zM7.147 6.59c.937-.343 1.667-1.372 1.667-2.787 0-2.358-1.667-3.58-4.334-3.58H0v13.163h4.896c2.667 0 4.334-1.308 4.334-3.773 0-1.394-.875-2.616-2.083-3.023zm-5.043-.836V2.153H4.46c1.48 0 2.271.536 2.271 1.779 0 1.243-.792 1.822-2.271 1.822H2.104zm0 1.844h2.75c1.46 0 2.251.728 2.251 1.929 0 1.179-.792 1.93-2.25 1.93h-2.75v-3.86zM19.005 13.6c3.063 0 5.126-1.844 5.126-5.445V.223h-2.167v7.674c0 2.53-1.042 3.71-2.959 3.71s-2.958-1.18-2.958-3.71V.223H13.88v7.91c0 3.623 2.083 5.467 5.125 5.467zm10.228-1.158c.896.644 2.355 1.158 4.063 1.158 2.605 0 4.584-1.33 4.584-3.73 0-1.908-.916-3.066-2.917-3.816l-2.062-.772c-1.063-.385-1.667-.771-1.667-1.736 0-1.072.958-1.586 2.25-1.586 1.5 0 2.667.578 3.73 1.415V1.08C36.193.395 34.88.009 33.442.009c-2.354 0-4.313 1.265-4.313 3.58 0 2.165 1.292 3.108 3 3.751l1.855.686c1.146.45 1.792.858 1.792 1.887 0 1.179-1.021 1.715-2.48 1.715-1.5 0-2.896-.558-4.063-1.522v2.336zM45.623.223h-2.166v13.162h2.166V.223zm6.182 13.146h2.088V4.806l8.788 8.767V.203h-2.082V8.62L51.805 0v13.369zM76.222.226v1.971h-5.626v3.168h5.045v1.949h-5.045v4.083h5.626v1.992h-7.75V.226h7.75zm5.045 12.207c.896.644 2.354 1.158 4.063 1.158 2.604 0 4.584-1.329 4.584-3.73 0-1.908-.917-3.065-2.917-3.816l-2.063-.771c-1.063-.386-1.667-.772-1.667-1.737 0-1.072.958-1.586 2.25-1.586 1.5 0 2.667.579 3.73 1.415V1.072C88.226.386 86.913 0 85.475 0c-2.354 0-4.313 1.265-4.313 3.58 0 2.165 1.292 3.108 3 3.751l1.855.686c1.146.45 1.792.858 1.792 1.887 0 1.179-1.02 1.715-2.48 1.715-1.5 0-2.896-.557-4.062-1.522v2.336zm13.086 0c.896.644 2.355 1.158 4.063 1.158 2.605 0 4.584-1.329 4.584-3.73 0-1.908-.917-3.065-2.917-3.816l-2.063-.771c-1.062-.386-1.667-.772-1.667-1.737 0-1.072.959-1.586 2.25-1.586 1.5 0 2.668.579 3.73 1.415V1.072C101.313.386 100 0 98.562 0c-2.355 0-4.313 1.265-4.313 3.58 0 2.165 1.292 3.108 3 3.751l1.855.686c1.146.45 1.792.858 1.792 1.887 0 1.179-1.021 1.715-2.48 1.715-1.5 0-2.896-.557-4.063-1.522v2.336z"/></g></svg>
                                {this.props.headerData.title}
                            </a>
                        </div>
                        <div className="col-6 col-md-8 col-lg-8 col-xl-6">
                            <nav className="l-nav l-nav-centered" data-nav data-track-page-area="Navigation">
                                <section className="container">
                                    <ListItems listData={this.props.headerData} />
                                </section>
                            </nav>
                        </div>
                        <div className="col-2 col-md-1 col-lg-2 col-xl-3 linkset-wrapper link-set-wrapper-flex">
                            <svg className="svg-icon menu-icon" data-menu aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 13"><desc id="desc">A vertical stack of three evenly spaced horizontal lines.</desc><path className="menu-icon-path" fill="none" stroke="#848F91" d="M0 0h19M0 6.5h19M0 13h19"/></svg>
                        </div>
                    </div>
                </div>
            </header>
        );
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

    addStyles() {
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.href = 'http://media.businessinsider.com/public/styles/core.css';
        this.shadowRoot.appendChild(style);
    }

    // fires when custom element is inserted into DOM
    connectedCallback() {
        const domain    = "http://www.businessinsider.com/";
        this.addStyles();

        const listData = {
            logo : {
                title : 'Natalie is hungry', href: 'http://www.businessinsider.com/'
            },
            verticals : [
                {
                    name: "sai",
                    label: "Tech",
                    href: domain.concat("sai")
                },
                {
                    name: "clusterstock",
                    label: "Finance",
                    href: domain.concat("clusterstock")
                },
                {
                    name:"politics",
                    label: "Politics",
                    href: domain.concat("politics")
                },
                {
                    name:"strategy",
                    label: "Strategy",
                    href: domain.concat("strategy")
                },
                {
                    name:"life",
                    label: "Life",
                    href: domain.concat("life")
                },
                {
                    name:"research",
                    label: "Intelligence",
                    href: domain.concat("research")
                },
                {
                    name:"all",
                    label: "All",
                    href: domain.concat("all")
                },
            ]
        };

        ReactDOM.render(<Header headerData={listData} />, this.root);
    }
}

customElements.define('wrapper-test', Wrapper);