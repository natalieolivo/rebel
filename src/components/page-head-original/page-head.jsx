class Header extends React.Component {
    constructor() {
        super();
    };

    render() {
        function ListItems(items) {

            const listData = items.listData;
            const verticals = listData.verticals;
            const listItems = verticals.map(function (vertical) {
                return <li className="verticals-flex-grow verticals-listitem" key={vertical.label}>
                    <a className="verticals-listitem-link" href={vertical.href}><span className="verticals-listitem-label">{vertical.label}</span></a>
                </li>
            });
            return (
                <ul className="row verticals list-unstyled">{listItems}</ul>
            );
        }

        return (
            <header className="l-masthead">
                <div className="container masthead-container">
                    <div className="row">
                        <div className="col-4 col-md-3 col-lg-2 col-xl-3 logo logo-vertically-center">
                            <a href={this.props.headerData.href} className="logo-vertically-center-link">
                                <svg className="svg-icon logo-BI-icon logo-vertically-center-icon" width="103" height="32" viewBox="0 0 103 32" xmlns="http://www.w3.org/2000/svg"><g className="logo-BI logo-vertically-center-icon-fill" fill="#111" fillRule="evenodd"><path d="M7.984 32h2.396V19.2H7.984zM16.767 31.808h2.146v-8.076L27.946 32V19.392h-2.14v7.938l-9.039-8.13zM32.845 28.708c1.168.91 2.57 1.436 4.073 1.436 1.464 0 2.491-.504 2.491-1.617 0-.97-.655-1.35-1.802-1.775l-1.857-.645c-1.712-.608-3.014-1.496-3.014-3.537 0-2.183 1.971-3.37 4.328-3.37 1.444 0 2.76.363 3.788 1.006v2.165c-1.069-.79-2.239-1.334-3.742-1.334-1.294 0-2.261.483-2.261 1.49 0 .91.607 1.274 1.676 1.64l2.069.726c2.005.705 2.925 1.798 2.925 3.596 0 2.262-1.99 3.511-4.601 3.511-1.716 0-3.175-.48-4.073-1.086v-2.206zM47.109 32h2.395V19.2h-2.395zM60.74 30.063c2.7 0 4.143-1.732 4.143-4.466 0-2.754-1.444-4.48-4.143-4.48h-2.67v8.946h2.67zM55.89 19.2h4.93c3.795 0 6.249 2.5 6.249 6.397 0 3.9-2.454 6.403-6.249 6.403h-4.93V19.2zM79.047 19.2v1.917H73.25v3.08h5.199v1.895h-5.2v3.971h5.798V32h-7.985V19.2zM87.549 24.996h2.377c1.407 0 2.2-.772 2.2-1.959s-.793-1.96-2.2-1.96h-2.377v3.92zm0 1.81V32h-2.115V19.2h4.532c2.584 0 4.256 1.331 4.256 3.837 0 2.143-.928 3.374-2.905 3.69L95.814 32h-2.406l-4.354-5.193H87.55zM7.147 6.59c.937-.343 1.667-1.372 1.667-2.787 0-2.358-1.667-3.58-4.334-3.58H0v13.163h4.896c2.667 0 4.334-1.308 4.334-3.773 0-1.394-.875-2.616-2.083-3.023zm-5.043-.836V2.153H4.46c1.48 0 2.271.536 2.271 1.779 0 1.243-.792 1.822-2.271 1.822H2.104zm0 1.844h2.75c1.46 0 2.251.728 2.251 1.929 0 1.179-.792 1.93-2.25 1.93h-2.75v-3.86zM19.005 13.6c3.063 0 5.126-1.844 5.126-5.445V.223h-2.167v7.674c0 2.53-1.042 3.71-2.959 3.71s-2.958-1.18-2.958-3.71V.223H13.88v7.91c0 3.623 2.083 5.467 5.125 5.467zm10.228-1.158c.896.644 2.355 1.158 4.063 1.158 2.605 0 4.584-1.33 4.584-3.73 0-1.908-.916-3.066-2.917-3.816l-2.062-.772c-1.063-.385-1.667-.771-1.667-1.736 0-1.072.958-1.586 2.25-1.586 1.5 0 2.667.578 3.73 1.415V1.08C36.193.395 34.88.009 33.442.009c-2.354 0-4.313 1.265-4.313 3.58 0 2.165 1.292 3.108 3 3.751l1.855.686c1.146.45 1.792.858 1.792 1.887 0 1.179-1.021 1.715-2.48 1.715-1.5 0-2.896-.558-4.063-1.522v2.336zM45.623.223h-2.166v13.162h2.166V.223zm6.182 13.146h2.088V4.806l8.788 8.767V.203h-2.082V8.62L51.805 0v13.369zM76.222.226v1.971h-5.626v3.168h5.045v1.949h-5.045v4.083h5.626v1.992h-7.75V.226h7.75zm5.045 12.207c.896.644 2.354 1.158 4.063 1.158 2.604 0 4.584-1.329 4.584-3.73 0-1.908-.917-3.065-2.917-3.816l-2.063-.771c-1.063-.386-1.667-.772-1.667-1.737 0-1.072.958-1.586 2.25-1.586 1.5 0 2.667.579 3.73 1.415V1.072C88.226.386 86.913 0 85.475 0c-2.354 0-4.313 1.265-4.313 3.58 0 2.165 1.292 3.108 3 3.751l1.855.686c1.146.45 1.792.858 1.792 1.887 0 1.179-1.02 1.715-2.48 1.715-1.5 0-2.896-.557-4.062-1.522v2.336zm13.086 0c.896.644 2.355 1.158 4.063 1.158 2.605 0 4.584-1.329 4.584-3.73 0-1.908-.917-3.065-2.917-3.816l-2.063-.771c-1.062-.386-1.667-.772-1.667-1.737 0-1.072.959-1.586 2.25-1.586 1.5 0 2.668.579 3.73 1.415V1.072C101.313.386 100 0 98.562 0c-2.355 0-4.313 1.265-4.313 3.58 0 2.165 1.292 3.108 3 3.751l1.855.686c1.146.45 1.792.858 1.792 1.887 0 1.179-1.021 1.715-2.48 1.715-1.5 0-2.896-.557-4.063-1.522v2.336z" /></g></svg>
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
                            <svg className="svg-icon menu-icon" data-menu aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 13"><desc id="desc">A vertical stack of three evenly spaced horizontal lines.</desc><path className="menu-icon-path" fill="none" stroke="#848F91" d="M0 0h19M0 6.5h19M0 13h19" /></svg>

                            <section class="linkset-shim">

                                <a class="linkset-icon-link linkset-profile-icon-link" title="Account" href="" data-accounts-list-icon="">
                                    <svg class="svg-icon profile-icon linkset-svg-profile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18.8">
                                        <path class="profile" fill="none" stroke="#848F91" d="M.5 14.8c.1-1.1 1-2.1 2.4-2.8.5.7 1.1 1.3 1.5 1.7.9.8 2.8 1.2 4 1.2s3.1-.4 4-1.2c.5-.5 1.2-1 1.7-1.6 1.4.7 2.2 1.7 2.3 2.7v3.4H.4l.1-3.4zm8-4c-3.6 0-4.6-4-4.6-6.2S5.9.5 8.5.5 13 2.3 13 4.6s-1 6.3-4.5 6.2z"></path>
                                    </svg>
                                </a>
                                <a class="linkset-icon-link linkset-search-icon-link" href="/s" title="Search" aria-label="Go to the search page.">
                                    <svg class="svg-icon search-icon linkset-svg-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
                                        <g class="search-icon-path" fill="none" stroke="#848F91">
                                            <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"></path>
                                            <circle cx="8" cy="8" r="7"></circle>
                                        </g>
                                    </svg>
                                </a>
                                <a class="linkset-icon-link" data-editions-list-icon="" href="">
                                    <svg class="svg-icon globe-icon linkset-svg-globe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <circle class="globe-water" fill="#FFF" cx="10" cy="10" r="9.5"></circle>
                                        <g class="globe-land-g" fill="#848F91">
                                            <path d="M9.7.3h.7c.3 0 .7 0 1 .1.6.1 1.2.2 1.8.4 1.5.5 2.8 1.4 3.9 2.6 1 1 1.7 2.2 2.1 3.6.2.8.4 1.5.4 2.3v1c0 .4-.1.8-.1 1.1-.1.8-.3 1.5-.6 2.2-.5 1.2-1.2 2.3-2.2 3.2-.7.7-1.5 1.3-2.3 1.7-1.6.8-3.3 1.1-5 1-.6 0-1.2-.1-1.8-.3-1.8-.3-3.4-1.2-4.6-2.6-.7-.7-1.3-1.6-1.7-2.5-.6-1.2-.9-2.5-.9-3.9 0-.5 0-1 .1-1.5.1-.7.2-1.3.5-2C1.4 5.3 2.3 4 3.5 2.9c1-1 2.2-1.7 3.6-2.1C7.9.6 8.6.4 9.4.4c.1-.1.2-.1.3-.1zm.1 5.2s0 .1 0 0c.1.1.1.1 0 0l.2.2c0 .1.1.2.2.2h.2s.1 0 .1.1c0 0 0 .1-.1.1h-.1c-.1 0-.3.1-.4.2 0 0-.1.1-.1 0l-.1-.1s0-.1.1-.1.1 0 .2-.1h-.1-.1c-.1 0-.1.1-.2.1h-.1c-.2 0-.3.1-.4.2-.1.2-.2.4-.4.4-.1.1-.1.2-.2.3 0 .1-.1.1-.1.1-.1 0-.1.1-.1.1v.1c-.1.4-.3.7-.7.9-.1.1-.2.2-.2.4 0 .1 0 .2.1.2 0 .2.1.4.1.6v.1h-.1c-.2-.2-.3-.3-.3-.5 0-.1 0-.1-.1-.2 0-.1-.1-.1-.2-.1h-.2s-.1 0-.1-.1c-.1 0-.2 0-.3.1-.1.1-.3.1-.4.1-.4 0-.7.2-.8.6v.1c-.1.1-.1.2-.1.3 0 .2.1.5.2.6.1.1.2.2.3.2h.3c.2 0 .2-.1.3-.3 0-.1.1-.2.2-.2h.4v.1l-.1.1c-.1.2-.1.3-.1.5 0 .1 0 .1.1.1h.3c.2 0 .4.2.3.4v.3c0 .1.1.3.2.3.1.1.2 0 .3 0 .1 0 .3.1.3.4v.3c0 .1 0 .1.1.1h.1v-.1c0-.1 0-.2.1-.3.1 0 .2 0 .3.1 0 0 .1.1.1 0h.2c.1.1.1.1.2 0H9.4c.1 0 .1 0 .1.1s0 .1.1.1h.1c.1 0 .2.1.2.1.1.1.1.2.2.2h.2c.3-.1.6.1.7.4 0 0 0 .1.1.1.1.1.1.1 0 .2v.1c.3 0 .5.1.8.2.2.1.4.2.6.2.1 0 .2.1.3.1.1.1.2.1.2.1.1 0 .2.1.2.2v.2c0 .1-.1.2-.2.3l-.2.2c-.1.1-.1.1-.1.2 0 .3-.1.6-.3.8-.1.1-.1.1-.1.2s-.2.2-.3.2h-.2c-.1 0-.2.1-.3.1-.1 0-.3.1-.3.3 0 .1 0 .1-.1.2-.1 0-.1.1-.2.1-.2.2-.4.4-.7.5-.1 0-.1.1-.2.1-.1.1-.2.2-.3.1-.1 0-.3 0-.3.1-.1.1-.1.1-.2.1s-.2.1-.3.2c0 .1 0 .2.1.2h1c.4 0 .8 0 1.2-.1.9-.1 1.8-.4 2.6-.8 1-.5 1.9-1.2 2.6-2 .5-.5.9-1 1.2-1.6V14v-.5c0-.3.1-.6.3-.8.1-.1.1-.3.1-.5s-.1-.4-.1-.6c0-.1-.1-.2 0-.3 0-.1 0-.2.1-.3.1-.2 0-.3-.2-.3h-.1-.2-.1c-.2.1-.3.1-.5.1s-.3 0-.5.1h-.1l-.3-.3c-.1-.1-.3-.2-.3-.4-.1-.1-.1-.2-.2-.3-.1-.1-.1-.2 0-.2v-.1c-.1-.1-.1-.1 0-.2 0 0 .1-.1.1-.2v-.1c0-.1 0-.2-.1-.3-.2-.3-.1-.5.1-.8.1-.1.2-.2.3-.4.1-.2.2-.3.4-.5V7c0-.2 0-.4.2-.5.1 0 .1-.1.1-.2v-.1h.1s.1 0 .1.1h.1c.1.1.2 0 .3 0 .3.7.4.6.6.7.2 0 .4.2.4.4 0 .1.1.2.2.3.1.1.2.1.3.2.1.1.1 0 .2 0s.1-.1.1-.1v-.1l-.3-.9c0-.1-.1-.2-.2-.3l-.2-.2v-.1.1c0 .1.1.1.1.2.1.1.1.2.2.3l.1.1v-.1c-.1-.1-.1-.2-.2-.3-.4-.1-.5-.2-.5-.3 0 0 0-.1-.1-.1s-.1 0-.1.1-.1.1-.2 0h-.1v.1c0 .1 0 .1-.1.2 0 0-.1 0-.1.1v.2c0 .1-.1.2-.2.2s-.1 0-.2.1h-.1c-.1-.1-.1-.1-.2-.1s-.1-.1-.1-.1c0-.1 0-.1-.1-.2s-.1-.1 0-.1c.1-.1.1-.2 0-.3v-.1-.1V6H17c.1 0 .2-.1.1-.2 0-.1-.1-.2-.2-.3l-.2-.2s-.1 0 0-.1c0 0 0-.1.1 0h.2s.1 0 .1-.1.1-.1.2-.1h.1v-.1-.1H17.7s0-.1-.1-.1c-.4-.5-.8-1-1.2-1.4-.6-.6-1.4-1.1-2.2-1.5H14l-.1.1c-.1 0-.1 0-.1.1-.1.1-.2.2-.3.2h-.2c-.2 0-.2.1-.2.3 0 .1 0 .1-.1.1v.5c0 .1-.2.2-.3.1l-.1-.1-.1-.1h-.2c-.4.1-.8-.1-.9-.5l-.3-.3c-.1-.1-.2-.2-.1-.3 0-.1.1-.2.3-.2h0-.3c-.1 0-.1 0-.1-.1s0-.1.1-.1H11.2c-.1 0-.2-.1-.3-.2-.2-.3-.3-.3-.4-.4-.3-.1-.6-.1-.9-.1C9.1.8 8.5.9 8 1c-1.5.3-2.8 1-3.9 1.9L4 3h.1c.2 0 .4-.1.6-.2.1-.1.3-.1.5-.1.1 0 .2 0 .3-.1.1-.1.3-.1.4 0 .1 0 .2 0 .2-.1s.1-.1.1-.1l.1-.1c.1-.1.2-.2.3-.1h.1l.1-.1h.1v.1H7.2s.1 0 .1-.1c0 0 0-.1.1-.1h.1c.1-.1.2 0 .3.1l.1.1v.1l-.1.1h-.1s-.1.1-.2.1h-.1H7.1l-.1.1c0 .2 0 .2-.1.2H7c-.1.2-.3.2-.4.3-.1 0-.2 0-.2.1-.1 0-.1.1-.2.2 0 0 0 .1-.1.1-.2.2 0 .5.2.7.1 0 .2.1.3.1H7c.3 0 .5.1.5.4 0 .1 0 .2.1.3.1.1.1.1.2 0l.1-.1v-.3c0-.1 0-.2.1-.3.1 0 .2-.1.2-.2.1-.1 0-.2-.1-.3-.1-.1-.1-.2 0-.2l.1-.1v-.3c0-.1 0-.1.1-.1H8.6c.2 0 .3 0 .4.1l.1.1c.1 0 .1.1.1.2s0 .1.1.2c.1 0 .2.1.3 0 .1 0 .1-.1.2-.1 0-.1.1-.1.2-.1s.1.1.1.1c.1.1.2.1.2.2s.1.2.2.2h.2c.3 0 .6.1.6.4v.3c0 .1-.1.3-.3.3-.1 0-.2 0-.2.1-.1.1-.3.1-.5.1h-.4c-.1 0-.2.1-.3.1-.1 0-.3.1-.4.3v.1s.1 0 .1-.1l.1-.1c.2-.1.4-.2.6-.2.1 0 .1 0 .1.1-.1.1-.1.1-.3.1.1 0 .1 0 0 0zM8.3 19.1V19v-.3c-.1-.2 0-.3 0-.5.1-.1.1-.2.1-.4v-.3c0-.1.1-.1.1-.2v-.7c0-.1-.1-.2-.2-.3-.5-.2-.8-.6-1-1-.1-.2-.2-.3-.4-.4 0 0-.1 0 0-.1v-.1-.2H7c.1-.1.1-.1 0-.1s-.1-.1 0-.2.1-.1.1-.2c0 0 0-.1.1-.1s.1-.1.1-.1l.1-.1.1-.1v-.3c0-.2 0-.4.1-.5.1-.1.1-.1.1-.2 0 0 0-.1.1-.1s.1-.1.2-.1c0 0 .1 0 .1-.1v-.1H8c-.1 0-.1 0-.1.1v.1h-.1l-.1-.1c-.5-.2-.7-.3-.9-.3-.1-.1-.2-.1-.2-.3 0-.2-.2-.3-.3-.4-.1 0-.2-.1-.4-.1-.1 0-.2-.1-.3-.2 0-.1-.1-.1-.2-.1h-.5c-.1 0-.1-.1-.2-.1-.2-.1-.3-.2-.5-.2-.2-.1-.3-.2-.3-.4 0-.3-.2-.5-.4-.7l-.1-.1c0-.1 0-.1-.1-.2 0-.2-.1-.3-.1-.5v-.1h-.1V8.9c0 .1.1.1.1.2.1.1.2.3.2.4 0 .1 0 .1.1.2l.1.1v.1h-.1c-.1-.1-.2-.2-.2-.3 0-.1-.1-.2-.2-.3-.1 0-.1-.1-.1-.1 0-.1 0-.2-.1-.3 0-.1 0-.1-.1-.2v-.2c0-.1-.1-.2-.1-.2s-.1 0-.1-.1c-.1 0-.1-.1-.1-.2s0-.2-.1-.3c-.2-.4-.2-.7 0-1.1v-.1c0-.2 0-.4-.1-.6 0-.1-.1-.3-.1-.4 0-.1-.1-.1-.1 0v.1c-.2.1-.4.3-.5.5C1 7.4.7 8.8.8 10.3c0 .7.1 1.3.3 1.9.4 1.8 1.3 3.3 2.7 4.5 1.1 1.1 2.5 1.8 4 2.2.1.1.3.1.5.2z"></path>
                                            <path d="M9.4 1.9h.2l-.1.1v.2h.5s.1.1.2.1h.2c.1 0 .1 0 .1.1s-.1.1-.2.1v.1h-.1-.1s-.1 0-.1-.1c-.1 0-.1 0-.2-.1h-.1v.2c.1.1.2.1.3.2.1 0 .1.1.2.1v.2h-.1c-.1 0-.3-.1-.4-.1h-.1.1c.1 0 .2.1.3.1v.1h-.1c-.3-.1-.4-.2-.5-.1 0 0-.1 0-.1-.1h-.1-.1S9 3 9 2.9c0 0 0-.1-.1-.1s-.2-.1-.2-.1h-.2c-.1.1-.2 0-.3 0 .1 0 .1-.1.2-.1h.5v-.1c.1 0 .1-.1.2-.1L9 2.3c-.3-.2-.4-.2-.5-.3 0 0-.1 0-.1-.1h-.1s-.1 0-.1-.1l-.1.1H8c-.2.1-.2.1-.3.1h-.1-.1-.4H7h-.1.2-.2-.1v-.1l.1-.1h.4V2s.1 0 .1.1h.1V2v-.1-.1c0-.1.1-.1.2-.1h.2v.2H8.2c.1-.1.1-.1.2-.1H8.7v.1h.4c0-.1.1-.1.3 0-.1-.1 0-.1 0 0 0-.1 0 0 0 0zM16.5 4.7v-.1c.1 0 .1-.1 0-.1 0 0-.1-.1-.2-.1v-.1c0-.1 0-.1-.1-.1 0 0-.1-.1 0-.1V4v-.1h.1V4c0 .1 0 .1.1.1 0 0 .1 0 .1.1s0 .1.1.2.2.3.3.4l.1.1s0 .1.1.1v.2H17c-.1 0-.2-.1-.2 0-.2-.3-.3-.4-.3-.5zM7.3 9.8H7.6c.1 0 .2.1.4.1h.1c0 .1.1.1.1.1h.1c.1 0 .1.1.2.1 0 0 .1 0 .1.1h-.4-.1v-.1-.1H8s-.1 0-.1-.1h-.1c-.1 0-.2 0-.2-.1h-.2-.1-.1c-.1.2-.2.2-.2.2s0-.1.1-.1c0 0 0-.1.2-.1zM8.8 10.6h-.3-.1H8.7s0-.1-.1-.1H9.3c.1 0 .1.1.1.1l.1.1c-.1-.1-.1 0-.2 0h-.1-.1s0 .1-.1.1c-.2-.1-.2-.1-.2-.2z"></path>
                                            <path d="M16.1 4.2s0-.1 0 0c0-.1 0-.1 0 0l.1-.1c.1 0 .1 0 .1.1v.1c0 .1 0 .1.1.1v.1h-.1-.1c-.1 0-.1 0-.1-.1v-.2s0-.1-.1-.1c0 .1 0 .1.1.1zM9.6 10.7c0-.1 0-.1 0 0v-.1h.1c0 .1 0 .1-.1.1z"></path>
                                        </g>
                                        <path class="globe-inner-circle" fill="#FFF" d="M10 1.1c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9-4-8.9-8.9-8.9zm0 16.7c-4.3 0-7.8-3.5-7.8-7.8S5.7 2.2 10 2.2s7.8 3.5 7.8 7.8-3.5 7.8-7.8 7.8z"></path>
                                        <path class="globe-outer-circle" fill="#848F91" d="M10 20C4.5 20 0 15.5 0 10S4.5 0 10 0s10 4.5 10 10-4.5 10-10 10zm0-1.1c4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9-8.9 4-8.9 8.9 4 8.9 8.9 8.9z"></path>
                                    </svg>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

// WebComponent wrapper for our React Header Component
class PageHeader extends HTMLElement {
    // create / initialize the object for the class
    constructor() {
        // Always call super first in constructor
        super();

        // Element functionality written in here
        let section = document.createElement('section');
        this.root = this.attachShadow({ mode: 'open' }).appendChild(section);
    }

    addStyles() {
        const style = document.createElement('style');
        const styleText = `@font-face{font-family:'LabGrotesque-Regular';src:url('//media.businessinsider.com/public/fonts/LabGrotesque-Regular.eot');src:url('//media.businessinsider.com/public/fonts/LabGrotesque-Regular.woff2') format('woff2'),url('//media.businessinsider.com/public/fonts/LabGrotesque-Regular.woff') format('woff')}body{margin:0}ul{margin:0;padding:0}a{color:#00709a;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:link,a:visited{text-decoration:none}svg:not(:root){overflow:hidden}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(min-width:600px){.container{max-width:930px}}@media(min-width:960px){.container{max-width:960px}}@media(min-width:1260px){.container{max-width:1260px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-2,.col-4,.col-6,.col-lg-2,.col-lg-8,.col-md-1,.col-md-3,.col-md-8,.col-xl-3,.col-xl-6{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col-2{flex:0 0 16.66667%;max-width:16.66667%}.col-4{flex:0 0 33.33333%;max-width:33.33333%}.col-6{flex:0 0 50%;max-width:50%}@media(min-width:600px){.col-md-1{flex:0 0 8.33333%;max-width:8.33333%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-8{flex:0 0 66.66667%;max-width:66.66667%}}@media(min-width:960px){.col-lg-2{flex:0 0 16.66667%;max-width:16.66667%}.col-lg-8{flex:0 0 66.66667%;max-width:66.66667%}}@media(min-width:1260px){.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-6{flex:0 0 50%;max-width:50%}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d}.l-nav .l-footer{display:block}.l-masthead{z-index:5;position:relative;width:100%;height:47px;background-color:#fff;box-shadow:0 1px 0 0 rgba(0,0,0,.1)}@media(min-width:600px){.l-nav .l-footer{display:none}.l-masthead{height:47px}}.l-nav{z-index:1000000;position:fixed;top:0;width:100%;height:100%;border-top:0;padding-bottom:5em;background:#fff;opacity:0;-webkit-transform:translateY(-400%);-moz-transform:translateY(-400%);-ms-transform:translateY(-400%);-o-transform:translateY(-400%);transform:translateY(-400%);-webkit-overflow-scrolling:touch}.l-nav.is-nav-active{overflow-y:scroll;box-shadow:none;opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}.l-nav.l-nav-centered{display:none}.l-nav.l-nav-full{display:block;padding-bottom:36px}.l-nav-padding-shim{padding-bottom:47px}.l-nav-bottom-shim{margin:20px 0 19px;border-bottom:1px solid #edeeef}.is-nav-active~.nav-menu{z-index:1000000;position:fixed;top:0;display:block;width:100%;background:#fff}.is-nav-scrolled~.nav-menu:after{display:block;height:1px;margin:0 15px;background:#edeeef;content:'0 0 30 30'}.nav-menu{display:none}.nav-menu-container{overflow:hidden}.nav-menu-links{display:flex;float:right;padding:12px 4px 12px 0;align-items:center}.nav-menu-link:first-child{padding-right:32px}@media(min-width:600px){.l-nav{position:fixed;overflow-y:hidden;height:100%;padding-bottom:0;box-shadow:none;opacity:1;-webkit-transform:translateY(-200%);-moz-transform:translateY(-200%);-ms-transform:translateY(-200%);-o-transform:translateY(-200%);transform:translateY(-200%)}.l-nav.is-nav-active{-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-webkit-overflow-scrolling:touch}.is-searchpanel-active~.l-nav{-webkit-transform:translateY(-200%);-moz-transform:translateY(-200%);-ms-transform:translateY(-200%);-o-transform:translateY(-200%);transform:translateY(-200%)}.l-nav.l-nav-centered{display:none}.linkset-wrapper{height:47px}.menu-icon:hover .menu-icon-path{fill:#299ecc}.menu-icon:active .menu-icon-path{fill:#299ecc}}@media(min-width:960px){.l-nav{position:relative;height:47px}.l-nav.l-nav-full{display:none}.l-nav.l-nav-centered{display:flex;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);align-items:center}.l-nav-padding-shim{padding-bottom:0}}.l-nav-footer{margin-top:20px;padding-bottom:60px;text-align:center}.icon-menu-bars:before{content:'http://www.w3.org/2000/svg'}.linkset-wrapper{position:relative}.linkset-navbar-profile-icon-link{width:16px;margin:10px 16px -3px 8px}.logo{display:block;width:100%;height:46px;background:0}.logo-BI-icon{width:90px}.logo-BI{fill:#185f7d}.logo-vertically-center-link{display:flex}.logo.logo-vertically-center{display:flex;align-items:center}@media(min-width:600px){.logo{display:inline-block;width:145px;height:47px;margin-left:0;vertical-align:middle}}@media(min-width:960px){.logo{width:165px;margin-left:0;background-size:165px 47px}}.menu-icon{display:inline-block;float:right;width:19px;height:26px;margin:10px 2px 0 0;vertical-align:middle}.menu-icon-path{fill:#111516}.is-menu-active .menu-icon-bar:nth-child(1){-webkit-transform:translateY(8px) rotate(135deg);-moz-transform:translateY(8px) rotate(135deg);-ms-transform:translateY(8px) rotate(135deg);-o-transform:translateY(8px) rotate(135deg);transform:translateY(8px) rotate(135deg)}.is-menu-active .menu-icon-bar:nth-child(2){opacity:0;-webkit-transform:translateY(0) rotate(0);-moz-transform:translateY(0) rotate(0);-ms-transform:translateY(0) rotate(0);-o-transform:translateY(0) rotate(0);transform:translateY(0) rotate(0)}.is-menu-active .menu-icon-bar:nth-child(3){-webkit-transform:translateY(-6px) rotate(45deg);-moz-transform:translateY(-6px) rotate(45deg);-ms-transform:translateY(-6px) rotate(45deg);-o-transform:translateY(-6px) rotate(45deg);transform:translateY(-6px) rotate(45deg)}.menu-icon-bar{display:block;width:23px;height:2px;margin:5px 0;background:#fff}@media(min-width:600px){.menu-icon{display:block}}@media(min-width:960px){.menu-icon{display:none}}.vertical-name{text-transform:capitalize}.vertical-name.vertical-name-simple{display:none}.vertical-link{display:inline-block}.vertical-link:active,.vertical-link:focus,.vertical-link:hover,.vertical-link:link,.vertical-link:visited{color:#185f7c}.vertical-link:hover{text-decoration:none}.vertical-name.vertical-name-extended{display:block;height:31.5px;margin-top:15px;border-bottom:4px solid #ddd;text-align:right}.vertical-name.vertical-name-extended>[class*=' icon-'],.vertical-name.vertical-name-extended>[class^=icon-]{display:inline-block;width:50px;font-size:14px;color:#00709a}.vertical-link.vertical-link-extended{float:left;height:31.5px;border-bottom:4px solid #185f7c;font-size:18.5px;line-height:31.5px;text-align:left;letter-spacing:0;text-transform:uppercase}.vertical-name-video.vertical-name-extended{display:none}@media(min-width:600px){.vertical-name-video.vertical-name-extended{display:block}.vertical-name.vertical-name-simple{display:inline-block;overflow:hidden;width:100%;height:47px;font-size:33px;line-height:47px;text-align:center;vertical-align:middle;white-space:nowrap;letter-spacing:normal;text-overflow:ellipsis}.vertical-name.vertical-name-extended{display:none}.is-masthead-condensed .vertical-name-wrapper{width:calc(33.33333% - 30px)}.is-masthead-condensed .vertical-name.vertical-name-simple{display:none;padding-top:23px;font-size:25px;letter-spacing:normal}.vertical-link:active,.vertical-link:focus,.vertical-link:hover,.vertical-link:link,.vertical-link:visited{color:#fff}.vertical-link.vertical-link-simple:after{display:none;width:100%;height:4px;margin:-5px auto 0;background-color:#00c59c;content:'rgba(0,0,0,0.5)'}.is-masthead-condensed .vertical-link.vertical-link-simple:after{position:relative;top:0;margin-top:0}}@media(min-width:960px){.vertical-name.simple{display:block}}.verticals{display:block;padding:0}.verticals-listitem,.verticals-listitem-label{display:block;white-space:nowrap}.verticals-listitem{margin-top:62px;text-align:center;text-transform:uppercase}.verticals-listitem:last-child{margin-bottom:4em}.verticals-listitem-link{display:inline-block;border-bottom:0;padding-bottom:0;font-size:15px;color:#111516;letter-spacing:2.4px;text-transform:uppercase}.verticals-listitem-link:hover{color:#111516;text-decoration:none}.verticals-subvertical-link{display:block;margin:23px 0 0;color:#111516;text-align:center;text-transform:uppercase}@media(min-width:600px){.verticals{position:relative;display:flex;height:44px;margin:0;line-height:41px;text-align:center;text-transform:capitalize;justify-content:space-between}.verticals-listitem{display:inline-block;height:inherit;margin:0;border-bottom:0;border-left:0;padding:0}.verticals-listitem:last-child{border-right:0}.verticals-listitem-label,.verticals-listitem-link{border-bottom:0}.verticals-listitem-link{height:44px;font-size:11px}.verticals-flex-grow{flex-grow:initial}.is-current-vertical .verticals-listitem-label{border-bottom:2px solid #299ecc;color:#299ecc;background:#fff}.is-vertical-selected:hover .verticals-listitem-label{height:inherit;color:#299ecc;border-bottom:2px solid #299ecc}.verticals-subvertical-section{display:none}}.verticals-accordion{clear:both;margin:86px 0 51px}.verticals-accordion-label{position:relative;display:block;margin:0;border-top:1px solid #edeeef;font-size:17px;line-height:52px;color:#111516;text-align:left;letter-spacing:3.6px;text-transform:uppercase}.verticals-accordion-label-last{border-bottom:1px solid #edeeef}.verticals-accordion-close-icon .close-icon-path,.verticals-accordion-search-icon .search-icon-path{stroke:#111516}.verticals-accordion-search-icon{width:20px;height:24px}.verticals-accordion-close-icon{width:17px;height:20px}.verticals-accordion-chevron-icon{position:absolute;top:21px;right:6px;width:13px;height:7px}.verticals-accordion-subvertical-section{overflow:hidden;max-height:0;padding-left:10px}.verticals-accordion-listitem{display:block;width:100%}.verticals-accordion-listitem-link{padding-left:10px}.verticals-accordion-listitem-link,.verticals-accordion-listitem-link:hover,.verticals-accordion-subvertical-link:hover{color:#111516;text-decoration:none}.verticals-accordion-subvertical-link{display:block;font-size:11px;line-height:36px;color:#111516;text-align:left;letter-spacing:2.4px;text-transform:uppercase}input:checked~.verticals-accordion-subvertical-section{max-height:20em;border-top:1px solid #edeeef;padding:10px 0 10px 10px}.verticals-accordion-input{position:absolute;top:0;opacity:0}.verticals-listitem-link{font-family:LabGrotesque-Regular,Helvetica,Arial,sans-serif}.verticals-subvertical-link{font-family:LabGrotesque-Regular,Helvetica,Arial,sans-serif}.verticals-accordion-subvertical-link{font-family:LabGrotesque-Regular,Helvetica,Arial,sans-serif}.verticals-accordion-label{font-family:LabGrotesque-Regular,Helvetica,Arial,sans-serif}.linkset-wrapper{position:relative}.linkset-wrapper.linkset-wrapper-flex{display:flex;justify-content:flex-end}.linkset-shim{display:none;height:47px;padding:0;vertical-align:middle}.linkset-social{float:right;clear:right}.linkset-social-link{font-size:11px;color:#fff}.linkset-social-listitem{float:left;margin-left:5px;padding-left:2px}.linkset-icon-link{width:18px;height:18px}.linkset-profile-icon-link{width:16px}.linkset-navbar-profile-icon-link{width:16px;margin:10px 16px -3px 8px}.linkset-search-icon-link{margin:0 25px}@media(min-width:600px){.linkset{float:none;clear:right}.linkset-single-link{margin-top:36px;line-height:20px}.linkset-wrapper{height:47px}.linkset-shim{display:none;float:right;max-width:172px;padding-right:10px;line-height:16px;text-align:right;justify-content:space-evenly;align-items:center}.linkset-edition{position:relative}.globe-icon:active .globe-outer-circle,.globe-icon:active .globe-water{fill:#111516}.globe-icon:active .globe-land-g{fill:#fff}.globe-icon:hover .globe-outer-circle,.globe-icon:hover .globe-land-g{fill:#299ecc}.profile-icon:hover .profile{stroke:#299ecc}.profile-icon:active .profile{stroke:#111516;fill:#111516}.search-icon:hover .search-icon-path{stroke:#299ecc}.search-icon:active .search-icon-path{stroke:#111516;stroke-width:2px}.menu-icon:hover .menu-icon-path{fill:#299ecc}.menu-icon:active .menu-icon-path{fill:#299ecc}.is-masthead-condensed .linkset-shim{display:none}}@media(min-width:960px){.linkset-shim{display:flex}.is-masthead-condensed .linkset-shim{display:flex}} * {box-sizing:border-box}`;

        style.setAttribute('type', 'text/css');
        style.appendChild(document.createTextNode(styleText));

        this.shadowRoot.appendChild(style);
    }

    // fires when custom element is inserted into DOM
    connectedCallback() {
        const domain = "http://www.businessinsider.com/";
        this.addStyles();

        const listData = {
            logo: {
                title: 'Natalie is hungry', href: 'http://www.businessinsider.com/'
            },
            verticals: [
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
                    name: "politics",
                    label: "Politics",
                    href: domain.concat("politics")
                },
                {
                    name: "strategy",
                    label: "Strategy",
                    href: domain.concat("strategy")
                },
                {
                    name: "life",
                    label: "Life",
                    href: domain.concat("life")
                },
                {
                    name: "research",
                    label: "Intelligence",
                    href: domain.concat("research")
                },
                {
                    name: "all",
                    label: "All",
                    href: domain.concat("all")
                },
            ]
        };

        ReactDOM.render(<Header headerData={listData} />, this.root);
    }
}

customElements.define('page-header', PageHeader);
