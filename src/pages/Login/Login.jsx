import { Link } from 'react-router-dom';
import './Login.scss';

export default function Login() {
  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="login__form">
        <label className="login__label">Email</label>
        <input type="email" placeholder="Your email" className="login__input" />
        <label className="login__label">Password</label>
        <input
          type="password"
          placeholder="Your password"
          className="login__input"
        />
        <button className="login__btn">Login</button>
      </form>
      <button className="login__btn-register">
        <Link to="register" className="react-link">
          Register
        </Link>
      </button>
    </div>
  );
}
