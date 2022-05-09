import React from "react";
import { Button } from "src/elements/Forms";
import { H1 } from "src/elements/Typography";
import Modal from "../Modal/Modal";
import "./PopupMessage.css";

function PopupMessage(props) {
  if (!props.isPopupOn) {
    return <React.Fragment />;
  }

  return (
    <Modal onClickOutside={props.onClickOutside}>
      <div className="card">
        <H1>{props.title}</H1>
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
