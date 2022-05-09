import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import firebase from "firebase";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InputField, useInputField, DropZone } from "src/components";
import { useUploadFiles, useFirebaseDB } from "src/hooks";
import { Button } from "src/elements/Forms";
import { ReactQuillCustom, modules } from "./ReactQuillCustom";
import classNames from "classnames";
import "./EditablePostForm.scss";

function EditablePostForm(props) {
  // const [input, setInput] = useState(null);
  const { postid } = useParams();
  const [input, handleInput, setInput] = useInputField();
  const [bodyInput, setBodyInput] = useState("");
  const { uploadFiles, deleteFile, progress, url, setUrl } = useUploadFiles();
  const { updateFirebaseDB } = useFirebaseDB(props.mode);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateFirebaseDB(props.mode, input, bodyInput, url);
  };

  const getPost = useCallback(() => {
    const post = props?.posts.find((obj) => obj.id === postid)?.data;
    setInput(post);
    setBodyInput(post?.body);
    setUrl(post?.url);
  }, [props.posts, postid, setInput, setBodyInput, setUrl]);

  useEffect(() => {
    // props.mode === "edit" && getFirebaseDB(setInput, setUrl, setBodyInput);
    props.mode === "edit" && getPost();
  }, [props.posts, getPost, props.mode]);

  if (!input && props.mode === "edit") return <div>Loading...</div>;

  return (
    <form className={classNames("EditablePostForm", props.className)}>
      <div className="EditablePostForm__upper">
        <div className="EditablePostForm__fields">
          <InputField
            placeholder="Author"
            onChange={handleInput}
            id="author"
            value={input}
          />
          <InputField
            placeholder="Category"
            onChange={handleInput}
            id="category"
            value={input}
          />
          <InputField
            placeholder="Title"
            onChange={handleInput}
            id="title"
            value={input}
          />
        </div>
        <DropZone
          className="EditablePostForm__drop-zone"
          onDropFile={uploadFiles}
          onRemoveFile={deleteFile}
          url={url}
          progress={progress}
        />
      </div>
      <div className="EditablePostForm__bottom">
        <div className="EditablePostForm__body-input">
          <ReactQuillCustom />
          <ReactQuill
            className="EditablePostForm__body-quill"
            id="body"
            theme="snow"
            modules={modules}
            value={bodyInput}
            onChange={setBodyInput}
            placeholder={`Write your new blog`}
          />
        </div>
        <Button
          className="EditablePostForm__button"
          buttonType="text"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default EditablePostForm;

// Add tooltip attributes from toolbar options
// https://github.com/quilljs/quill/issues/1084
