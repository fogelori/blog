import { useParams, useNavigate } from "react-router-dom";
import {
  serverTimestamp,
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import React from "react";

function useFirebaseDB() {
  let navigate = useNavigate();
  let params = useParams();

  const updateFirebaseDB = async (mode, input, bodyInput, url) => {
    if (mode === "edit") {
      await setDoc(doc(db, "posts", params.postid), {
        ...input,
        body: bodyInput,
        url: url,
        // date: firebase.firestore.FieldValue.serverTimestamp(),
        date: serverTimestamp(),
      });
      navigate(`../${params.postid}`);
    } else {
      const docRef = await addDoc(collection(db, "posts"), {
        ...input,
        body: bodyInput,
        url: url,
        // date: firebase.firestore.FieldValue.serverTimestamp(),
        date: serverTimestamp(),
      });
      navigate(`../${docRef.id}`);
    }
    // navigate(`../${params.postid}`);
    // setInput(null);
    // setBodyInput("");
  };

  // const getFirebaseDB = (setInput, setUrl, setBodyInput) => {
  //   getDoc(doc(db, "posts", params.postid))
  //     .then((doc) => {
  //       if (doc.exists) {
  //         setInput(doc.data());
  //         setBodyInput(doc.data().body);
  //         setUrl(doc.data().url);
  //         console.log("Document data:", doc.data());
  //       } else {
  //         console.log("No such document!");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error getting document:", error);
  //     });
  // };

  const addNewDoc = async (collection, id, obj) => {
    try {
      await setDoc(doc(db, collection, id), obj);
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };

  const getFirebaseDB = React.useCallback(async (collection, id) => {
    try {
      const docRef = await getDoc(doc(db, collection, id));
      // .then((doc) => {
      if (docRef.exists()) {
        console.log("Document data:", docRef.data());
        return docRef.data();
      } else {
        console.log("No such document!");
      }
      // })
    } catch (error) {
      console.log("Error getting document:", error);
    }
    // .catch((error) => {
    // });
  }, []);

  const returnObject = {
    updateFirebaseDB,
    getFirebaseDB,
    addNewDoc,
  };

  return returnObject;
}

export default useFirebaseDB;
