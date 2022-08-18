import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UpdateBlog from "./Blog/UpdateBlog"
import AddBlog from "./Blog/CreateBlog";
import BlogsList from "./Blog/BlogList";

function App() {
  return (
    <div>
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          React Redux Toolkit
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
          <a className="nav-link" href="/blogs">Blogs</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/add">Add Blog</a>
          </li>
        </div>
      </nav>

          <Routes>
          <Route path="/add" element={<AddBlog />} />
          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/update" element={<UpdateBlog />} />
          <Route path="/update/:id" element={<UpdateBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;