import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
// svg below is taken from:
// https://www.veryicon.com/
import { ReactComponent as EventIcon } from "src/assets/event-5.svg";
import { ReactComponent as PersonIcon } from "src/assets/person-5.svg";
import { ReactComponent as FolderOpenIcon } from "src/assets/md-folder-open-1.svg";
// import { StringToJSX } from "../../../../../tools/StringToJSX";
import usePost from "./usePost";
import { H1, H2 } from "src/elements/Typography";
import "./Post.css";

function Post(props) {
  const { postid } = useParams();
  const { post, dateOptions } = usePost(postid, props.posts);

  if (!post) return <div>Loading...</div>;

  return (
    <article className="post">
      <header className="post__header">
        <H1 className="post__title">{post.title}</H1>
        <section className="post__header-properties">
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
        </section>
      </header>
      <section className="post__body">
        {/* Sections with no headings do not appear in the document outline. */}
        {/* Because it I added hidden H2 */}
        {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section#examples */}
        <H2 className="post__body--is-hide">Body Section</H2>
        {parse(post.body)}
      </section>
      {/* Other ways to add JSX in text to the page */}
      {/* <div className="postBody">{StringToJSX(props.body)}</div> */}
      {/* <div className="postBody">{props.body}</div> */}
      {/* <div
        className="postBody"
        dangerouslySetInnerHTML={{ __html: props.body }}
      /> */}
      {/*https://stackoverflow.com/questions/40952434/how-do-i-display-the-content-of-react-quill-without-the-html-markup/71498900#71498900 */}
    </article>
  );
}

export default Post;
