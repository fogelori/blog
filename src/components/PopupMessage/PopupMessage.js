import React from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./PopupMessage.css";

function PopupMessage(props) {
  if (!props.isPopupOn) {
    return <React.Fragment />;
  }

  return (
    <Modal onClickOutside={props.onClickOutside}>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <Button onClick={props.onClickFirstButton}>{props.firstButton}</Button>
        <Button state="danger" onClick={props.onClickLastButton}>
          {props.lastButton}
        </Button>
      </div>
    </Modal>
  );
}

export default PopupMessage;
