import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

export const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    title: searchParams.get('title'),
    body: searchParams.get('body'),
  });


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(resp => resp.json())
      .then(resp => setPosts(resp));
  }, []);

  const submitHandler = ev => {
    ev.preventDefault();
    const form = ev.target;
    const titleSearchStr = form.title.value;
    const bodySearchStr = form.body.value;
    setFilter({title: titleSearchStr, body: bodySearchStr});

    setSearchParams({title: titleSearchStr, body: bodySearchStr});
    
  }

  return (
    <div>
      <Link to='/blog/new' className="btn-link">Create new post</Link>
      
      <h1>Blog page</h1>

      <BlogFilter submitHandler={submitHandler} filters={filter}></BlogFilter>
      
      <div className="posts">

        {
          posts
          .filter(post => post.title.includes(filter.title) && post.body.includes(filter.body))
          .map(({ id, body, title }) => (
            <Link to={`/blog/${title}`} key={id} className="post" state={id}>
              <h3>{id} {title}</h3>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

