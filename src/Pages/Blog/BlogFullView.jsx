import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { collection, getDocs } from "firebase/firestore";
import { useSearchParams } from "react-router-dom";
import { dataBase } from "../../Configs/firebaseConfig";

const BlogFullView = () => {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const blogCollectionRef = collection(dataBase, "blogPosts");

  const [article, setArticle] = useState([]);
  console.log("id++", id);
  useEffect(() => {
    const getSingleBlog = async () => {
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
        // setArticle(filteredData)
        const filldata = filteredData.filter((d) => d.id == id);
        console.log("single", filldata);
        setArticle(filldata);
        setLoading(false);
      } catch (err) {
        console.log("err", err);
      }
    };
    getSingleBlog();
  }, []);

  console.log("article is here", article);

  return (
    <>
      {!loading ? (
        <Row xs={1} className="my-4 p-4 ">
          <Card className="">
            <Col sm={12} md={12} lg={12}>
              <Card.Body>
                <Card.Title className="text-black">
                  {article[0]["title"]}
                </Card.Title>
                <Card.Text>{article[0].summary}</Card.Text>
              </Card.Body>
            </Col>
          </Card>
        </Row>
      ) : (
        "loading......"
      )}
    </>
  );
};

export default BlogFullView;
