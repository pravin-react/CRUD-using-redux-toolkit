import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../slices/blog";
import "./Blog.css";
import { Form ,Container,Row,Button,Col,Table,InputGroup} from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";


const AddBlog = () => {
  const initialBlogState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [blog, setBlog] = useState(initialBlogState);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBlog({ ...blog, [name]: value });
  };

  const saveBlog = () => {
    const { title, description } = blog;

    dispatch(createBlog({ title, description }))
      .unwrap()
      .then(data => {
        console.log(data);
        setBlog({
          id: data.id,
          title: data.title,
          description: data.description,
          published: data.published
        });
        setSubmitted(true);
        navigate("/blogs");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newBlog = () => {
    setBlog(initialBlogState);
    setSubmitted(false);
  };

  return (
    <><div class="container-fluid p-5 bg-primary text-white text-center">
      <h1>Create Blog</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div><Col md={{ span: 6, offset: 3 }} >
        <div className="submit-form mt-5 mb-5">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newBlog}>
                Add
              </button>
            </div>
          ) : (



            <div>
              <div className="form-group mt-2">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={blog.title || ''}
                  onChange={handleInputChange}
                  name="title" />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="description">Description</label>
                
               <textarea className="form-control" rows="5" id="description" value={blog.description || ''}
                  onChange={handleInputChange} name="description"></textarea>
              </div>
              <div class="mb-3 mt-3">
     
    </div>

              <button onClick={saveBlog} className="btn btn-success">
                Submit
              </button>
            </div>

          )}
        </div>
      </Col></>
   
  );
};

export default AddBlog;