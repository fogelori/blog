import React from "react";
import CustomNavLink from "src/components/CustomNavLink/CustomNavLink";
import "./AddPostButton.css";

function AddPostButton() {
  return (
    <div className="addPostButton">
      <CustomNavLink
        className="addPostButtonLink"
        to={`../addpost`}
        // isRequireAuth={true}
      >
        Add Post
      </CustomNavLink>
    </div>
  );
}

export default AddPostButton;
