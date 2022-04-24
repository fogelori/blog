import React from "react";
import Post from "./components/Post/Post";
// import usePost from "./usePost";

function ViewPost(props) {
  return (
    <div className="viewPost">
      <Post
        key={postid}
        author={post.author}
        date={post.date?.toDate().toUTCString()}
        body={post.body}
        category={post.category}
        title={post.title}
      />
    </div>
  );
}

export default ViewPost;
