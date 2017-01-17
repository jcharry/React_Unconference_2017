import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Destructuring
        let {buttonTapped, currentPage} = this.props;

        return (
            <div className='nav'>
                <p
                    className={currentPage === 'my-weather' ? 'nav-item nav-item-active': 'nav-item'}
                    onClick={ () => {buttonTapped('my-weather'); } }
                >
                    Current Weather
                </p>
                <p
                    className={currentPage === 'search' ? 'nav-item nav-item-active' : 'nav-item'}
                    onClick={ () => {buttonTapped('search'); } }
                >
                    Search
                </p>
            </div>

        );
    }
}

export default Nav;
