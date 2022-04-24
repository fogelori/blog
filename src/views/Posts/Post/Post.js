import React from "react";
import { useParams } from "react-router-dom";
// svg below is taken from:
// https://www.veryicon.com/
import { ReactComponent as EventIcon } from "../../../assets/event-5.svg";
import { ReactComponent as PersonIcon } from "../../../assets/person-5.svg";
import { ReactComponent as FolderOpenIcon } from "../../../assets/md-folder-open-1.svg";
// import { StringToJSX } from "../../../../../tools/StringToJSX";
import parse from "html-react-parser";
import "./Post.css";

function Post(props) {
  // const post = usePost();

  const { postid } = useParams();
  const post = props?.posts.find((obj) => obj.id === postid)?.data;
  if (!post) return <div>Loading...</div>;

  let dateOptions = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="post">
      <header className="postHeader">
        <h1 className="post__title">{post.title}</h1>
        <div className="post__header-properties">
          <EventIcon className="post__svg" />
          <span className="post__header-span">
            {new Date(post.date?.toDate().toUTCString()).toLocaleDateString(
              "en-GB",
              dateOptions
            )}
          </span>
          <PersonIcon className="post__svg" />
          <span className="post__header-span">{post.author}</span>
          <FolderOpenIcon className="post__svg" />
          <span className="post__header-span">{post.category}</span>
        </div>
      </header>
      <div className="post__body">{parse(post.body)}</div>
      {/* <div className="postBody">{StringToJSX(props.body)}</div> */}
      {/* <div className="postBody">{props.body}</div> */}
      {/* <div
        className="postBody"
        dangerouslySetInnerHTML={{ __html: props.body }}
      /> */}
      {/*https://stackoverflow.com/questions/40952434/how-do-i-display-the-content-of-react-quill-without-the-html-markup/71498900#71498900 */}
    </div>
  );
}

export default Post;
