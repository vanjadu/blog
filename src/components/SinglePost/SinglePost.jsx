import './SinglePost.scss';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="single-post__wrapper">
        <img
          src="./images/post.jpg"
          alt="banner"
          className="single-post__image"
        />
        <h1 className="single-post__title">
          Lorem ipsum dolor sit amet.
          <div className="single-post__edit">
            <FaRegEdit
              style={{
                fontSize: '22px',
                marginRight: '15px',
                color: 'teal',
                cursor: 'pointer',
              }}
            />
            <FaRegTrashAlt
              style={{
                fontSize: '22px',
                marginRight: '15px',
                color: 'tomato',
                cursor: 'pointer',
              }}
            />
          </div>
        </h1>
        <div className="single-post__info">
          <span className="single-post__author">
            Author: <b>Vanja</b>
          </span>
          <span className="single-post__date">1 hour ago</span>
        </div>
        <p className="single-post__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          explicabo tempore ducimus cupiditate ex tenetur facere, praesentium
          consequatur incidunt quo quam aspernatur est molestias quis dolorum
          non recusandae natus. Deleniti. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident explicabo tempore ducimus cupiditate ex
          tenetur facere, praesentium consequatur incidunt quo quam aspernatur
          est molestias quis dolorum non recusandae natus. Deleniti. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Provident explicabo
          tempore ducimus cupiditate ex tenetur facere, praesentium consequatur
          incidunt quo quam aspernatur est molestias quis dolorum non recusandae
          natus. Deleniti. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident explicabo tempore ducimus cupiditate ex tenetur
          facere, praesentium consequatur incidunt quo quam aspernatur est
          molestias quis dolorum non recusandae natus. Deleniti.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
