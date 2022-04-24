import React from "react";
import AddPostButton from "./components/AddPostButton/AddPostButton";
import "./AllPosts.css";
// import Post from "../Post";
import ShortPost from "./components/ShortPost/ShortPost";
import Restricted from "../../../components/Restricted/Restricted";

function AllPosts(props) {
  // const posts = useAllPosts();
  const { posts } = props;
  return (
    <div className="allPosts">
      <div className="allShortPosts">
        {posts.map((post) => (
          <ShortPost
            key={post.id}
            id={post.id}
            author={post.data.author}
            date={post.data.date?.toDate().toUTCString()}
            body={post.data.body}
            category={post.data.category}
            title={post.data.title}
            url={post.data.url}
          />
        ))}
      </div>
      <Restricted action="allposts--addpost">
        <AddPostButton />
      </Restricted>
    </div>
  );
}

export default AllPosts;
