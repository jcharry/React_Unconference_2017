import React from 'react';
import openweathermap from 'openweathermap';
import key from '../creds/api';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            searchString: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Search for city
        this.setState({
            isLoading: true
        });

        let {searchString} = this.state;
        openweathermap.find({q: searchString, appid: key.APIKEY}, (err, json) => {
            console.log(json);
            this.setState({
                isLoading: false
            });
        });
    }

    handleChange(event) {
        this.setState({
            searchString: event.target.value
        });
    }

    render() {
        let {isLoading} = this.state;
        return (
            <div className='search'>
                <h2>Search</h2>
                { isLoading === true ?  <p>Loading!!!</p> : <div></div> }
                <input type='text' placeholder='Enter a city' onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

export default Search;
