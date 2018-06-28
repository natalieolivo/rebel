class Header extends React.Component {
    constructor() {
        super();

        this.state = { title : 'Natalie is full', url: 'http://www.businessinsider.com' }
    }

    render() {
        return (<header class="l-masthead">{this.state.title}</header>);
    }
}