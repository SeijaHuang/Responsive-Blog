import { useEffect, useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default (props) => {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3001/posts')
      .then((res) => {
        setPostList(res?.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //从 server端读取 postList
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
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => {
                  //通过window.localStorage来传递复杂的对象
                  //向localStorage里面写数据的时候，不要超过5MB，也不要太大
                  //不要把机密的东西放到localStorage里
                  window.localStorage.setItem(
                    'postDetail',
                    JSON.stringify(post)
                  );
                  navigate(`/post-detail/${post.id}`);
                }}
              >
                Details
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
