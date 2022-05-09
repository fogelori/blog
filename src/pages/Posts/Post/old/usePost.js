import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

function usePost() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = () => {
      //print all documents
      getDocs(collection(db, "posts")).then((docs) =>
        docs.forEach((doc) => {
          console.log(doc.id);
          console.log(doc.data());
        })
      );

      //print specific document
      getDoc(doc(db, "posts", params.postid))
        .then((doc) => {
          if (doc.exists) {
            setPost(doc.data());
            console.log("Document data:", doc.data());
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    };
    fetchPost();
  }, [params.postid]);

  return post;
}

export default usePost;
