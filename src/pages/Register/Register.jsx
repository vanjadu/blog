import { Link } from 'react-router-dom';
import './Register.scss';

export default function Login() {
  return (
    <div className="register">
      <span className="register__title">Login</span>
      <form className="register__form">
        <label className="register__label">Username</label>
        <input
          type="email"
          placeholder="Your username"
          className="register__input"
        />
        <label className="register__label">Email</label>
        <input
          type="email"
          placeholder="Your email"
          className="register__input"
        />
        <label className="register__label">Password</label>
        <input
          type="password"
          placeholder="Your password"
          className="register__input"
        />
        <button className="register__btn">Register</button>
      </form>
      <button className="register__btn-register">
        <Link to="login" className="react-link">
          Login
        </Link>
      </button>
    </div>
  );
}
