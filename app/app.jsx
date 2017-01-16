// ES6
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main'>
                <h1>Welcome to React Weather</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.body);
