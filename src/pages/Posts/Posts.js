import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import RequireAuth from "src/routes/RequireAuth";
import AddPost from "./AddPost/AddPost";
import AllPosts from "./AllPosts/AllPosts";
import useAllPosts from "./AllPosts/useAllPosts";
import EditPost from "./Post/EditPost/EditPost";
// import ShortPost from "./AllPosts/components/ShortPost/ShortPost";
import Post from "./Post/Post";
import "./Posts.scss";

function Posts() {
  // const { path, url } = useMatch();
  const posts = useAllPosts();
  let location = useLocation();
  let state = location.state;
  // console.log(location);
  // console.log("posts");
  return (
    <div className="posts">
      {/* <Navigate exact from="/" to="/allposts" /> */}
      {/* <Navigate from="/" to="allposts" /> */}
      <Routes location={state?.backgroundLocation || location}>
        <Route
          path=""
          element={<Navigate replace to="allposts" state={{ ...state }} />}
        />
        <Route path="allposts" element={<AllPosts posts={posts} />} />
        <Route
          path="addpost"
          element={
            <RequireAuth>
              <AddPost />
            </RequireAuth>
          }
        />
        {/* <Route path="shortpost" element={<ShortPost />} /> */}
        <Route path=":postid" element={<Post posts={posts} />} />
        <Route
          path=":postid/editpost"
          element={
            <RequireAuth>
              <EditPost posts={posts} />
            </RequireAuth>
          }
        />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default Posts;
