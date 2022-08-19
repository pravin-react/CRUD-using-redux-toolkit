import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./App.scss";
import UpdateBlog from "./Redux/Blog/UpdateBlog"
import AddBlog from "./Redux/Blog/CreateBlog";
import BlogsList from "./Redux/Blog/BlogList";
import ProductList from "./Crud/ProductList";
import AddProduct from "./Crud/AddProduct";
import EditProduct from "./Crud/EditProduct";

function App() {
  return (
    <div>
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          React Training
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <a className="nav-link" href="/products">CRUD</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/blogs">Redux Used Blogs</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/add">Add Blog</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/todo">Mobx Todo</a>
          </li>
        </div>
      </nav>

          <Routes>
          <Route path="/add" element={<AddBlog />} />
          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/update" element={<UpdateBlog />} />
          <Route path="/update/:id" element={<UpdateBlog />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
