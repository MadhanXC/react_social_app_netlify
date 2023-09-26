import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const PostLayout = () => {
  return (
    <>
    <br />
        <Link to="/PostPage/1">Post1</Link>
        <br />
        <Link to="/PostPage/2">Post2</Link>
        <br />
        <Link to="/PostPage/3">Post3</Link>
        <br />
        <Link to="/PostPage/NewPost">New Post</Link>
  <Outlet/>
        </>
  )


}

export default PostLayout