import { useState, useCallback } from "react";
import { storage } from "../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { getFileUrl } from "../tools/getFileUrl";

function useUploadFiles() {
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  const uploadFiles = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const metadata = {
        contentType: file.type,
      };
      let storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      // https://firebase.google.com/docs/storage/web/upload-files?hl=en#web-version-9_6
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          // Handle unsuccessful uploads
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setUrl(downloadURL);
          });
        }
      );
    });
  }, []);

  const deleteFile = (url) => {
    const filename = getFileUrl(url);
    const storageRef = ref(storage, `images/${filename}`);
    deleteObject(storageRef)
      .then(() => {
        setUrl(null);
        // File deleted successfully
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };

  const returnObject = {
    uploadFiles,
    deleteFile,
    progress,
    url,
    setUrl,
  };

  return returnObject;
}

export default useUploadFiles;
