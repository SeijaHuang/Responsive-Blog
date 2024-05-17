import React from 'react';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import PostList from './components/post-list';
import WritePost from './components/write-post';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App" data-bs-theme="dark">
        <NavBar></NavBar>
        <div className="container main-container">
          <Routes>
            <Route path="/" element={<PostList></PostList>}></Route>
            <Route path="/post-list" element={<PostList></PostList>}></Route>
            <Route path="/write-post" element={<WritePost></WritePost>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
