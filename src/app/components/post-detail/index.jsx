import { useEffect, useState } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
export default (props) => {
  const [postDetail, setPostDetail] = useState({});

  // 让functional component 也能使用生命周期钩子
  //本质上是3个生命周期钩子的合体 componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(() => {
    const tempStr = window.localStorage.getItem('postDetail');
    const tempObj = JSON.parse(tempStr);
    setPostDetail(tempObj);
  }, []);

  return (
    <>
      <h3>{postDetail.postTitle}</h3>
      <p>{postDetail.postContent}</p>
    </>
  );
};
