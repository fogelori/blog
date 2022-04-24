import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import "./EditablePostForm.css";
// import firebase from "firebase";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputField from "../../../../components/InputField/InputField";
import useInputField from "../../../../components/InputField/useInputField";
import DropZone from "../../../../components/DropZone/DropZone";
import useUploadFiles from "../../../../hooks/useUploadFiles";
import Button from "../../../../components/Button/Button";
import useFirebaseDB from "../../../../hooks/useFirebaseDB";
import { CustomToolbar, modules } from "./ReactQuillCustom";
import { useParams } from "react-router-dom";

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
    // uploadFiles(file);
  };

  // const handleChangeInput = (e) => {
  //   setInput((prevInput) => ({
  //     ...prevInput,
  //     [e.target.id]: e.target.value,
  //   }));
  // };

  // useEffect(() => {
  //   url && updateFirebaseDB(props.mode, input, bodyInput, url);
  // }, [url]);

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
    <div className="editablePostForm">
      <DropZone
        onDropFile={uploadFiles}
        onRemoveFile={deleteFile}
        url={url}
        progress={progress}
      />
      <form className="addPostForm">
        <div id="addPostAuthor" className="addPostInputDiv">
          <InputField
            placeholder="Author"
            onChange={handleInput}
            id="author"
            value={input}
          />
        </div>
        <div id="addPostCategory" className="addPostInputDiv">
          <InputField
            placeholder="Category"
            onChange={handleInput}
            id="category"
            value={input}
          />
        </div>
        <div id="addPostTitle" className="addPostInputDiv">
          <InputField
            placeholder="Title"
            onChange={handleInput}
            id="title"
            value={input}
          />
        </div>
        <div id="addPostBody" className="addPostInputDiv">
          <CustomToolbar />
          <ReactQuill
            id="body"
            theme="snow"
            modules={modules}
            value={bodyInput}
            onChange={setBodyInput}
            placeholder={`Write your new blog`}
          />
        </div>
        <div id="addPostSubmit" className="addPostInputDiv">
          <Button
            className="button--regular"
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditablePostForm;

// Add tooltip attributes from toolbar options
// https://github.com/quilljs/quill/issues/1084
