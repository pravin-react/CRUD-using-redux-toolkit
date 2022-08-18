import React, {useEffect, useCallback,useState } from "react";
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Blog.css";
import { retrieveBlogs,deleteBlog } from "../slices/blog";


const BlogsList = () => {  
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const blogs = useSelector(state => state.blogs);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(retrieveBlogs());
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  const removeBlog = (selectedItem) => {
    dispatch(deleteBlog({ id: selectedItem }))
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
    <div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My Blogs</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> 
</div>

    <div className="container mt-5 mb-5">
  <div className="row">
  {blogs &&
    blogs.map((blog, index) => (
    <div className="col-12 col-md-4 blog-card">
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      <Link
              to={"/update/" + blog.id}
              className="edit-btn"
            >
              Edit
      </Link>
      <button className="delete-btn" onClick={() => { setModalShow(true); setSelectedItem(blog.id) }}>Delete</button>
                    
    </div>
    ))}
  </div>
</div>
{modalShow ? 
    <Modal
    show={modalShow}
    onClick={(e) => {
        setModalShow(false)
        setSelectedItem({})
      }} 
    dialogClassName="modal-90w"
    aria-labelledby="example-custom-modal-styling-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-custom-modal-styling-title">
        Delete the blog
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Are you sure? You want delete this blog. 
    </p>
    <button className="btn btn-danger" onClick={() => removeBlog(selectedItem)}>Delete</button>
    </Modal.Body>
  </Modal>
  : null}
</>

  );
};

export default BlogsList;