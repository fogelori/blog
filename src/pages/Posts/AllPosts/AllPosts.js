import React from "react";
import AddPostButton from "./components/AddPostButton/AddPostButton";
import ShortPost from "./components/ShortPost/ShortPost";
import FilterPosts from "./components/FilterPosts/FilterPosts";
import Restricted from "src/components/Restricted/Restricted";
import useFilterPosts from "./components/FilterPosts/useFilterPosts";
import "./AllPosts.css";

function AllPosts(props) {
  // const posts = useAllPosts();
  const { categories, categoryValue, setCategoryValue, filteredPosts } =
    useFilterPosts(props.posts);

  return (
    <div className="AllPosts">
      <FilterPosts
        className="AllPosts__category-filter"
        categories={categories}
        value={categoryValue}
        setValue={setCategoryValue}
      />
      <div className="AllPosts__cards">
        {filteredPosts.map((post) => (
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
