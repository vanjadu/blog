import './Post.scss';

const Post = () => {
  return (
    <div className="post">
      <img
        src="./images/post.jpg"
        alt="post banner"
        className="post__image"
      />
      <div className="post__info">
        <div className="post__cats">
          <span className="post__cat">Music</span>
          <span className="post__cat">Life</span>
        </div>
        <span className="post__title">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="post__date">7 hours ago</span>
      </div>
      <p className="post__desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        eius nesciunt, unde reprehenderit eveniet ullam quo dolorem recusandae?
        Ad omnis modi possimus distinctio aperiam vitae quis ea labore delectus
        debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Praesentium eius nesciunt, unde reprehenderit eveniet ullam quo dolorem
        recusandae? Ad omnis modi possimus distinctio aperiam vitae quis ea
        labore delectus debitis. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Praesentium eius nesciunt, unde reprehenderit eveniet
        ullam quo dolorem recusandae? Ad omnis modi possimus distinctio aperiam
        vitae quis ea labore delectus debitis.
      </p>
    </div>
  );
};

export default Post;
