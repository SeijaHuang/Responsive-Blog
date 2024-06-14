import React from 'react';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import PostList from './components/post-list';
import WritePost from './components/write-post';
import ManageMain from './components/manage/manage-main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetail from './components/post-detail';
import Dashboard from './components/manage/dashboard';
import PostManage from './components/manage/post-manage';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App" data-bs-theme="dark">
        <NavBar></NavBar>
        <div className="container main-container">
          {/* {路由的路径写法要符合restful规范} */}
          <Routes>
            <Route path="/" element={<PostList></PostList>}></Route>
            <Route path="/post-list" element={<PostList></PostList>}></Route>
            <Route
              path="/post-detail/:id"
              element={<PostDetail></PostDetail>}
            ></Route>
            <Route path="/write-post" element={<WritePost></WritePost>}></Route>
            <Route path="/manage" element={<ManageMain></ManageMain>}>
              <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
              <Route
                path="post-mng"
                element={<PostManage></PostManage>}
              ></Route>
            </Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
