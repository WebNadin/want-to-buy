import React from 'react';
import logo from '../../images/logo.png';
import searchIcon from '../../images/search.png';
import shoppingCartIcon from '../../images/shopping-cart.png';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <img className="header__logo logo" src={logo} alt="Veltry text"/>
        <div className="header__user-tools user-tools">
          <div className="search">
            <form>
              <input className="search__input" type="text" placeholder="я ищу..."></input>
              <button type="submit">
                 <img className="search__icon" src={searchIcon} alt="magnifier "/>
              </button>
            </form>
          </div>
          <div className="cart">
             <img className="cart__icon" src={shoppingCartIcon} alt="shopping-cart"/>
          </div>
        </div>
      </div>
      <nav className="header__nav nav">
        <a className="nav__link" href="/">travel bags</a>
        <a className="nav__link" href="/">accessories</a>
        <a className="nav__link" href="/">books</a>
        <a className="nav__link" href="/">maps</a>
      </nav>
    </header>
  );
};

export default Header;