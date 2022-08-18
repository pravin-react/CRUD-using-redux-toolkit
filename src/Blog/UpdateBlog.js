import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Blog.css";
import { Col} from 'react-bootstrap';
import { updateBlog } from "../slices/blog";
import BlogDataService from "../services/BlogServices";
import { useNavigate, useParams } from "react-router-dom";


const UpdateBlog = () => {
  const initialBlogState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const params = useParams();
  const navigate = useNavigate();
  const [currentBlog, setCurrentBlog] = useState(initialBlogState);
  const dispatch = useDispatch();
  
  const getBlog = id => {
    BlogDataService.get(id)
      .then(response => {
        setCurrentBlog(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
 console.log(params.id);
  useEffect(() => {
    getBlog(params.id);
  }, [params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBlog({ ...currentBlog, [name]: value });
  };

  const updateContent = () => {
    dispatch(updateBlog({ id: currentBlog.id, data: currentBlog }))
      .unwrap()
      .then(response => {
        console.log(response);
        navigate("/blogs");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <><div className="container-fluid p-5 bg-primary text-white text-center">
      <h1>Update Blog</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div><Col md={{ span: 6, offset: 3 }} >
        <div className="submit-form mt-5 mb-5">
            <div>
              <div className="form-group mt-2">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={currentBlog.title}
                  onChange={handleInputChange}
                  name="title" />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="description">Description</label>
                
               <textarea className="form-control" rows="5" id="description" value={currentBlog.description}
                  onChange={handleInputChange} name="description"></textarea>
              </div>
              <div className="mb-3 mt-3">
     
          </div>
              <button onClick={updateContent} className="btn btn-success">
                Update
              </button>
            </div>
        </div>
      </Col></>
   
  );
};

export default UpdateBlog;