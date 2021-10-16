import './Write.scss';
import { FaPlus } from 'react-icons/fa';

export default function Write() {
  return (
    <div className="write">
      <img src="./images/post.jpg" alt="banner" className="write__image" />
      <form className="write__form">
        <div className="write__form-group">
          <label htmlFor="file-input">
            <FaPlus
              style={{
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                border: '1px solid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                color: 'grey',
                cursor: 'pointer',
                padding: '3px',
              }}
            />
          </label>
          <input type="file" id="file-input" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Title"
            className="write__input"
            autoFocus={true}
          />
        </div>
        <div className="write__form-group">
          <textarea
            type="text"
            placeholder="Tell your story..."
            className="write__input write__text"
          ></textarea>
        </div>
        <button className="write__submit">Publish</button>
      </form>
    </div>
  );
}
