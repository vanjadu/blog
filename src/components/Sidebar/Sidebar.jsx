import './Sidebar.scss';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from 'react-icons/fa';

export default function Sidebar() {
  const iconStyle = {
    fontSize: '22px',
    marginRight: '15px',
    color: '#181818',
    cursor: 'pointer',
  };

  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">About me</span>
        <img src="./images/profile.jpg" alt="me" className="sidebar__about-img" />
        <p className="sidebar__lorem">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
          pariatur corporis cupiditate dignissimos.
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">Categories</span>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">Life</li>
          <li className="sidebar__list-item">Music</li>
          <li className="sidebar__list-item">Style</li>
          <li className="sidebar__list-item">Sport</li>
          <li className="sidebar__list-item">Cinema</li>
          <li className="sidebar__list-item">Tech</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">Follow me</span>
        <div className="sidebar__socials">
          <FaFacebookSquare style={iconStyle} />
          <FaTwitterSquare style={iconStyle} />
          <FaPinterestSquare style={iconStyle} />
          <FaInstagramSquare style={iconStyle} />
        </div>
      </div>
    </div>
  );
}
