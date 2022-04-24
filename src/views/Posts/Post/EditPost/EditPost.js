import React from "react";
import EditablePostForm from "../../components/EditablePostForm/EditablePostForm";

function EditPost(props) {
  return (
    <div>
      <EditablePostForm mode="edit" posts={props.posts} />
    </div>
  );
}

export default EditPost;
