import { useState } from "react";

function useFilterPosts(posts) {
  const getCategoriesOfPosts = (posts) => {
    return [...new Set(posts.map((post) => post.data.category))];
  };
  const filterPostsByCategory = (categoryValue, posts) => {
    return categoryValue !== "All"
      ? posts.filter((post) => post.data.category === categoryValue)
      : posts;
  };

  const [categoryValue, setCategoryValue] = useState("All");
  const categories = getCategoriesOfPosts(posts);
  const filteredPosts = filterPostsByCategory(categoryValue, posts);
  return { categories, categoryValue, setCategoryValue, filteredPosts };
}

export default useFilterPosts;
