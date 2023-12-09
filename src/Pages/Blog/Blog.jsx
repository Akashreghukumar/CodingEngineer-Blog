import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { dataBase } from "../../Configs/firebaseConfig";
import BlogCard from "./BlogCard";
import { Container } from "react-bootstrap";

export default function Blog() {
  const [blogList, setBlogList] = useState([]);
  const blogCollectionRef = collection(dataBase, "blogPosts");
  useEffect(() => {
    const getBlogList = async () => {
      try {
        const data = await getDocs(blogCollectionRef);
        console.log("data from firebase", data);
        const filteredData = data.docs.map(
          (doc) => (
            console.log("adfa", doc.data().author),
            {
              ...doc.data(),
              id: doc.id,
            }
          )
        );
        setBlogList(filteredData);
      } catch (err) {
        console.log("err", err);
      }
    };
    getBlogList();
  }, []);

  return (
    <div>
      <Container>
        {blogList.map((d) => {
          return (
            <BlogCard
              id={d.id}
              title={d.title}
              author={d.author}
              tag={d.tag}
              summary={d.summary}
            />
          );
        })}
      </Container>
    </div>
  );
}
