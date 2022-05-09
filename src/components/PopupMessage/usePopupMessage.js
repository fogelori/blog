import { useState } from "react";
// import PopupMessage from "./PopupMessage";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "src/firebase";

function usePopupMessage(id) {
  const [isPopupOn, setIsPopupOn] = useState(false);

  const deleteFromDB = () => {
    deleteDoc(doc(db, "posts", id))
      .then(() => {
        console.log(id + " Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const handleCloseModal = () => {
    setIsPopupOn(false);
  };

  const handleClickFirstButton = () => {
    handleCloseModal();
  };

  const handleClickLastButton = () => {
    setIsPopupOn(false);
    deleteFromDB();
  };

  return {
    isPopupOn,
    setIsPopupOn,
    handleCloseModal,
    handleClickFirstButton,
    handleClickLastButton,
  };
}

export default usePopupMessage;
