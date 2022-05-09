import React from "react";
import { StringToJSX } from "src/tools/StringToJSX";
// import EditIcon from "@material-ui/icons/Edit";
// svg below is taken from:
// https://fontawesome.com/icons
import { ReactComponent as EditIcon } from "src/assets/pencil-solid.svg";
import { ReactComponent as DeleteIcon } from "src/assets/trash-solid.svg";
import {
  PopupMessage,
  usePopupMessage,
  CustomLink,
  Restricted,
} from "src/components";
import { Button } from "src/elements/Forms";
import { stripTagsFromString, shortenString } from "src/tools/other";
import { H1 } from "src/elements/Typography";
import "./ShortPost.scss";

function ShortPost(props) {
  let dateOptions = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const lenOfStr = 120;
  let shortBody = stripTagsFromString(props.body);
  shortBody = shortenString(shortBody, lenOfStr);

  // const url = window.location.href.substr(
  //   0,
  //   window.location.href.lastIndexOf("/")
  // );

  const {
    isPopupOn,
    setIsPopupOn,
    handleCloseModal,
    handleClickFirstButton,
    handleClickLastButton,
  } = usePopupMessage(props.id);

  const handleDeleteClick = (event) => {
    // explanation about target and currentTarget
    // https://simplernerd.com/js-click-parent/
    setIsPopupOn(true);
    return;
    // return (
    //   <PopupMessage
    //     title="Delete"
    //     body="Body"
    //     firstButton="Cancel"
    //     lastButton="Delete"
    //   />
    // );

    // );
  };

  return (
    <article className="short-post">
      <img
        className="short-post__image"
        alt={`article title: ${props.title}`}
        src={props.url}
        data-original={props.url}
      />
      <section className="short-post__content">
        <H1 className="short-post__title">{props.title}</H1>
        <p className="short-post__text">{StringToJSX(shortBody)}</p>
        <CustomLink className="short-post__link" to={`../${props.id}`}>
          read more
        </CustomLink>
        <footer className="short-post__metadata">
          <time className="short-post__start" dateTime={props.date}>
            {new Date(props.date).toLocaleDateString("en-GB", dateOptions)}
          </time>
          <div className="short-post__end">
            <Restricted action="short-post--editpost">
              <CustomLink
                to={`../${props.id}/editpost`}
                className="short-post__icon"
                title="Edit"
                isHideNonAuth
              >
                <EditIcon className="short-post__svg" />
              </CustomLink>
            </Restricted>
            <Restricted action="short-post--deletepost">
              <Button
                onClick={handleDeleteClick}
                className="short-post__icon"
                title="Delete"
                id={props.id}
              >
                <DeleteIcon className="short-post__svg" />
              </Button>
              <PopupMessage
                isPopupOn={isPopupOn}
                title="Delete Post"
                body="Are you sure you want to delete this post?"
                firstButton="Cancel"
                lastButton="Delete"
                onClickOutside={handleCloseModal}
                onClickFirstButton={handleClickFirstButton}
                onClickLastButton={handleClickLastButton}
              />
            </Restricted>
          </div>
        </footer>
      </section>
    </article>
  );
}

export default ShortPost;

// use as a model, style inspired from
// https://www.einaimgdolot.com/
