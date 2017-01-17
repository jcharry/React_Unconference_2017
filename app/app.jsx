// ES6
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Search from './components/Search';

require('./style.css');


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visiblePage: 'my-weather'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(pageId) {
        this.setState({
            visiblePage: pageId
        });
    }

    render() {
        return (
            <div className='app'>
                <Nav currentPage={this.state.visiblePage} buttonTapped={this.handleClick}/>

                <h1>React Weather</h1>

                {
                    this.state.visiblePage === 'my-weather' ?

                    <div className='my-weather'>
                        <h2>My Weather</h2>
                    </div>

                    :
                    <Search />
                }


            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
