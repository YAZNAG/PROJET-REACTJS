import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const { totalItems, favoriteItems } = useContext();

 

  return (
    <nav>
      <div className="logo">
        <Link to='/'>AZER-TECH</Link>
      </div>
      <ul className="nav-items">
        <li><Link to='/'>Store</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <ul className="nav-icons">
        <li>
          <Link to='/wishlist'>
            <FontAwesomeIcon icon={faHeart} />
            <span className="item-count">{favoriteItems.length}</span>
          </Link>
        </li>
        <li>
          <Link to='/cart'>
            <FontAwesomeIcon icon={faShoppingBasket} />
            <span className="item-count">{totalItems}</span>
          </Link>
        </li>
        
         
      </ul>
    </nav>
  );
}

export default Header;
