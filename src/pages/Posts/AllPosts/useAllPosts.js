import { useState, useEffect } from "react";
import { db } from "src/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function useAllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = () => {
      const unsub = onSnapshot(
        query(collection(db, "posts"), orderBy("date", "desc")),
        (snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
      );
      return unsub;

      // getDocs(collection(db, "posts")).then((docs) =>
      //   docs.forEach((doc) => {
      //     console.log(doc.id);
      //     console.log(doc.data());
      //   })
      // );
    };
    const unsub = fetchAllPosts();
    return () => unsub();
  }, []);

  return posts;
}

export default useAllPosts;
