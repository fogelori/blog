// https://reactrouter.com/docs/en/v6/examples/modal
// https://www.w3schools.com/howto/howto_css_login_form.asp

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Modal.css";

function Modal(props) {
  let navigate = useNavigate();
  let location = useLocation();
  let backgroundLocation = location.state?.backgroundLocation;

  const handleClickOutside = (e) => {
    if (backgroundLocation) {
      // console.log(location);
      navigate(-1);
    } else {
      props?.onClickOutside();
    }
  };

  return (
    <div className="modal" onClick={handleClickOutside}>
      <div className="modal__top-right" onClick={(e) => e.stopPropagation()}>
        <span
          onClick={handleClickOutside}
          title="Close Modal"
          className="modal__close"
        >
          ×
        </span>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
