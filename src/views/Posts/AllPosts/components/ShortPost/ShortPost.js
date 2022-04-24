import React from "react";
import "./ShortPost.css";
import { StringToJSX } from "../../../../../tools/StringToJSX";
// import EditIcon from "@material-ui/icons/Edit";
// svg below is taken from:
// https://fontawesome.com/icons
import { ReactComponent as EditIcon } from "../../../../../assets/pencil-solid.svg";
import { ReactComponent as DeleteIcon } from "../../../../../assets/trash-solid.svg";
// import DeleteIcon from "@material-ui/icons/Delete";
import PopupMessage from "../../../../../components/PopupMessage/PopupMessage";
import usePopupMessage from "../../../../../components/PopupMessage/usePopupMessage";
import CustomLink from "../../../../../components/CustomLink/CustomLink";
import Button from "../../../../../components/Button/Button";
import Restricted from "../../../../../components/Restricted/Restricted";
import { stripTagsFromString, shortenString } from "../../../../../tools/other";

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
      <div className="short-post__content">
        <h1 className="short-post__title">{props.title}</h1>
        <p className="short-post__text">{StringToJSX(shortBody)}</p>
        <CustomLink className="short-post__link" to={`../${props.id}`}>
          read more
        </CustomLink>
        <div className="short-post__metadata">
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
        </div>
      </div>
    </article>
  );
}

export default ShortPost;

// use as a model, style inspired from
// https://www.einaimgdolot.com/
