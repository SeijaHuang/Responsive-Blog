import { useState } from 'react';
import './index.scss';
import postListMock from '../../components/mock-data/post-list-mock.json';
export default (props) => {
  const [postList, setPostList] = useState([...postListMock]);

  return (
    <div className="post-list-container">
      {postList.map((post) => {
        return (
          <div className="card post-item" style={{ width: '18rem' }}>
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>{post.postTitle}</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                Image cap
              </text>
            </svg>
            <div className="card-body">
              <h5 className="card-title">{post.postTitle}</h5>
              <p className="card-text">{post.postContent}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
