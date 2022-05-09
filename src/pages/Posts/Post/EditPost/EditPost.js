import React from "react";
import EditablePostForm from "../../components/EditablePostForm/EditablePostForm";

function EditPost(props) {
  return <EditablePostForm mode="edit" posts={props.posts} />;
}

export default EditPost;
