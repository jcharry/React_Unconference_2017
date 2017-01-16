import React from 'react';
import openweathermap from 'openweathermap';
import key from 'app/creds/api';
import SearchItem from 'app/components/SearchItem';

// This is usually a bad idea, but we're gonna do it for now...

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            searchString: '',
            searches: []
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    handleSearch() {
        let {searchString} = this.state;
        this.setState({
            isLoading: true
        });

        openweathermap.find({q: searchString, appid: key.APIKEY}, (err, json) => {
            if (err) {
                console.log(err);
                this.setState({
                    isLoading: false
                });
                return;
            }
            console.log(this.state.searches.concat(json));
            this.setState({
                isLoading: false,
                searches: this.state.searches.concat(json)
            });
        });
    }

    inputChanged(e) {
        this.setState({
            searchString: e.target.value
        });
    }

    render() {
        console.log(openweathermap);

        return (
            <div className='search'>
                <h2>Search for Weather</h2>
                {this.state.isLoading && <div>LOADING!!!!</div>}
                <p>By City</p>
                <input onChange={this.inputChanged} type='text' placeholder='Search for a city'/>
                <button onClick={this.handleSearch}>Search</button>

                <div className='searches'>
                    {this.state.searches.map((s) => {
                        return <SearchItem item={s} />;
                    })}
                </div>
            </div>
        );
    }
}

export default Search;
