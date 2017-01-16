/*
 * SearchItem.jsx
 * Copyright (C) 2017 jamiecharry <jamiecharry@Jamies-Air-2.home>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react';

class SearchItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {item} = this.props;
        console.log('inside search item', item);
        return (
            <div className='search-item'>
                <h3>{item.list[0].name}</h3>
                <p>temp: {item.list[0].main.temp - 273}</p>
            </div>
        );
    }
}

export default SearchItem;
