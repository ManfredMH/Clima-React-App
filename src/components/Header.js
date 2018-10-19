import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header>
            <nav className="nav-wrapper light-blue darken-2">
                <a href="/" className="brand-logo">{props.titulo}</a>
            </nav>   
        </header>
    );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Header;