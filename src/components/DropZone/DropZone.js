// inspired from
// https://www.youtube.com/watch?v=Aoz0eQAbEUo
// https://codesandbox.io/s/dropzone-d74g4

import React from "react";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import uploadImg from "src/assets/cloud-upload-regular-240.png";
import { ReactComponent as CloseIcon } from "src/assets/close-svgrepo-com.svg";
import { truncateText } from "src/tools/truncateText";
import { Button } from "src/elements/Forms";
import "./DropZone.css";

function DropZone(props) {
  const handleDrop = (acceptedFiles) => {
    props.onDropFile(acceptedFiles);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    noClick: !!props.url,
    // Disable keydown behavior
    noKeyboard: true,
    maxFiles: 1,
    multiple: false,
    onDrop: handleDrop,
  });
  let btnClass = classNames("drop-zone", props.className, {
    "drop-zone--isDragActive": isDragActive,
    "drop-zone--isDragZoneFilled": !!props.url,
  });

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  const handleClickDelete = () => {
    props.onRemoveFile(props.url);
  };

  return (
    // <div className="drop-zone" component="UploadFile">
    <div {...getRootProps({ className: btnClass })}>
      {/* <progress value={progress} max="100" /> */}
      <input {...getInputProps()} />
      {!props.url ? (
        // dropzone empty
        <React.Fragment>
          <img className="drop-zone__img" src={uploadImg} alt="" />
          {isDragAccept && <p>All files will be accepted</p>}
          {isDragReject && <p>Some files will be rejected</p>}
          {!isDragActive && <p>Drag 'n' drop your file here</p>}
        </React.Fragment>
      ) : (
        // dropzone filled
        <React.Fragment>
          <img className="drop-zone__img-uploaded" src={props.url} alt="" />
          <span className="drop-zone__filename">{truncateText(props.url)}</span>
          <Button buttonType="icon" onClick={handleClickDelete}>
            <CloseIcon />
          </Button>
        </React.Fragment>
      )}

      {/* <p>Drag 'n' drop your file here</p> */}
      {/* <p>or</p> */}
      {/* <Button onClick={open}>Open File Dialog</Button> */}
      {/* </div> */}
      {/* <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside> */}
    </div>
  );
}

export default DropZone;
