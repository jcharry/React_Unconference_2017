// ES6
import React from 'react';
import ReactDOM from 'react-dom';

import Nav from 'app/components/Nav';
import Search from 'app/components/Search';

import './style.css';

// ES6 classes are equivalent to regular Javascript Function constructors
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visiblePage: 'myweather'
        };

        // React doesn't set the 'this' keyword to point to the component we're
        // inside on custom class methods.  On React lifecycle methods, 'this'
        // is corretly applies, so no need for a line like this
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(pageId) {
        console.log('clicked a thing with event', pageId);

        this.setState({
            visiblePage: pageId
        });
    }

    render() {
        let page = this.state.visiblePage;
        function renderPage() {
            switch (page) {
                case 'myweather':
                    return (
                        <div className='my-weather'>
                            <h2>Current Weather at your location</h2>
                        </div>
                    );
                case 'search':
                    return (
                        <Search />
                    );
                default:
                    return <div></div>;
            }
        }

        return (
            <div className='main'>
                <Nav pageId={this.state.visiblePage} handleClick={this.handleClick}/>
                <h1>Welcome to React Weather</h1>
                {renderPage()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
