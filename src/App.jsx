import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Blog, About, NotFound, Single, CreatePost, Login } from './pages';
import Layout from './pages/Layout';
import RequireLogin from './hoc/RequireLogin';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/blog/:slug' element={
          <RequireLogin>
            <Single></Single>
          </RequireLogin>
        }></Route>
        <Route path='/blog/new' element={
          <RequireLogin>
            <CreatePost></CreatePost>
          </RequireLogin>
        }></Route>
        <Route path='/about*' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Route>
    </Routes >
  );
}

export default App;
