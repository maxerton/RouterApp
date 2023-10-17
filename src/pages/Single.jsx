import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';


export const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  const [post, setPost] = useState({ title: '', body: '' });

  const { id, title, body } = post;

  const btnReturnHandler = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${state}`)
      .then(resp => resp.json())
      .then(resp => {
        setPost(resp);
      })
  }, [state])

  return (
    <div>
      {/* <Link to='/blog'></Link> */}
      <button onClick={btnReturnHandler}>Return to blog</button>
      <div className="post-r">
        <h1 className="post-title">Post id {id}</h1>
        <div className="post-content">
          <h2 className="post-heading">{title}</h2>
          <p className="post-body">{body}</p>
        </div>
      </div>
    </div>
  );
};
