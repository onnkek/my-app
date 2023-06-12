import React, { Component, createElement } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26
        }
    }
    render() {
        const { name, surname, link } = this.props;
        const { years } = this.state;
        return (
            <>
            <button></button>
                <h1>My name is {name}, surname - {surname}, {years}</h1>
                <a href={link}>My profile</a>
            </>
        )
    }
}


const All = () => {
    return (
        <>
            <WhoAmI name='John' surname='ZZZ' link='google.com' />
            <WhoAmI name='John2' surname='ZZZZ' link='google.com' />
            <WhoAmI name='John3' surname='ZZZZ' link='google.com' />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root'))
    .render(<App />);


