import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Header.scss';
import logo from './img/logo2.png';
import IndieLink from '../IndieLink/IndieLink';

class Header extends Component {

    render() {
        return (
          <section className="header container">
            <Link to="/">
              <img className="header__logo" src={logo} alt="logo" />
            </Link>
            <IndieLink />
          </section>
            
        )
    }
}

export default Header;