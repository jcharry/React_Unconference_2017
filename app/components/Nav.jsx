import React from 'react';

class Nav extends React.Component {
    render() {
        // ES6 Destructuring
        let { handleClick, pageId } = this.props;

        return (
            <div className='nav'>
                <p
                    className={pageId === 'myweather' ? 'nav-item nav-item-active' : 'nav-item'}
                    onClick={() => { handleClick('myweather')}}
                >My Weather
                </p>
                <p className={pageId === 'search' ? 'nav-item nav-item-active' : 'nav-item'}
                    onClick={() => { handleClick('search') }}>Search</p>
            </div>
        );
    }
}

export default Nav;

