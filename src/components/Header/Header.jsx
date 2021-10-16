import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__titles">
        <span className="header__small">Vanja's React</span>
        <span className="header__big">Blog</span>
      </div>
      <img src="./images/header.jpg" alt="header" className="header__image" />
    </div>
  );
}
