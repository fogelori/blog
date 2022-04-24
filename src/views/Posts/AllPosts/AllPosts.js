import React from "react";
import AddPostButton from "./components/AddPostButton/AddPostButton";
import "./AllPosts.css";
// import Post from "../Post";
import ShortPost from "./components/ShortPost/ShortPost";
import Restricted from "../../../components/Restricted/Restricted";
import FilterPosts from "./components/FilterPosts/FilterPosts";

function AllPosts(props) {
  // const posts = useAllPosts();
  let [value, setValue] = React.useState("All");
  let posts = props.posts;
  const categories = [...new Set(posts.map((post) => post.data.category))];
  posts =
    value !== "All"
      ? posts.filter((post) => post.data.category === value)
      : posts;
  return (
    <div className="allPosts">
      <FilterPosts categories={categories} value={value} setValue={setValue} />
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
