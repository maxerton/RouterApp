import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const BlogFilter = ({ submitHandler, filters }) => {
  const [inp, setInp] = useState({title: '', body: ''});


  useEffect(() => {
    setInp({title: filters.title, body: filters.body})
  }, []);

  if (useSearchParams())

  return (
    <form onSubmit={submitHandler}>
      <label>
        Title filter:
        <input type="text" name='title' value={inp.title} onChange={e => setInp({...inp, title: e.target.value})} />
      </label>
      <label>
        Body filter:
        <input type="text" name='body' value={inp.body} onChange={e => setInp({...inp, body: e.target.value})} />
      </label>
      <button type="submit">Filter</button>
    </form>
  );
};

export default BlogFilter;