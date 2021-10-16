import './Settings.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import { FaRegUserCircle } from 'react-icons/fa';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__update-title">Update Your Account</span>
          <span className="settings__delete-title">Delete Account</span>
        </div>
        <form className="settings__form">
          <label>Profile picture</label>
          <div className="settings__profile">
            <img
              src="./images/profile.jpg"
              alt="profile"
              className="settings__profile-img"
            />
            <label htmlFor="fileInput">
              <FaRegUserCircle
                style={{
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  backgroundColor: 'lightcoral',
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              />
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Vanja" />
          <label>Email</label>
          <input type="email" placeholder="dulikravicvanja3@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings__submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
