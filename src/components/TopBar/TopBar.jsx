import { useState, useEffect } from 'react';
import './TopBar.scss';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
  FaSearch,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const iconStyle = {
    fontSize: '22px',
    marginRight: '15px',
    color: '#181818',
    cursor: 'pointer',
  };

  const [topBar, setTopBar] = useState(false);

  const topBarToggler = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 80) {
      setTopBar(true);
    } else {
      setTopBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', topBarToggler);
  });

  const user = true;

  return (
    <div className={topBar ? 'top-bar scroller' : 'top-bar'}>
      <div className="top-bar__left">
        <FaFacebookSquare style={iconStyle} />
        <FaTwitterSquare style={iconStyle} />
        <FaPinterestSquare style={iconStyle} />
        <FaInstagramSquare style={iconStyle} />
      </div>
      <div className="top-bar__center">
        <ul className="top-bar__nav-links">
          <li className="top-bar__link">
            <Link to="/" className="react-link">
              Home
            </Link>
          </li>
          <li className="top-bar__link">
            <Link to="/about" className="react-link">
              About
            </Link>
          </li>
          <li className="top-bar__link">
            <Link to="/contact" className="react-link">
              Contact
            </Link>
          </li>
          <li className="top-bar__link">
            <Link to="/write" className="react-link">
              Write
            </Link>
          </li>
          <li className="top-bar__link">
            <Link to="/logout" className="react-link">
              {user && 'Logout'}
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-bar__right">
        <FaSearch style={iconStyle} />
        {user ? (
          <Link to="/settings">
            <img
              src="./images/profile.jpg"
              alt="profile"
              className="top-bar__profile"
            />
          </Link>
        ) : (
          <ul className="top-bar__nav-links">
            <li className="top-bar__link">
              <Link to="/login" className="react-link">
                Login
              </Link>
            </li>
            <li className="top-bar__link">
              <Link to="/register" className="react-link">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopBar;
