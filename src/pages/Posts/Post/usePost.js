function usePost(postid, posts) {
  const post = posts.find((obj) => obj.id === postid)?.data;
  let dateOptions = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return { post, dateOptions };
}

export default usePost;
