import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { dataBase } from "../../Configs/firebaseConfig";
import { Container,Row } from "react-bootstrap";
import Filters from "../../Components/Filters";

export default function Video() {
  const [search,setSearch]=useState("")
  const [videoList, setVideoList] = useState([]);
  const blogCollectionRef = collection(dataBase, "blogVideos");
  console.log("Search",search);
  useEffect(() => {
    const getVideoList = async () => {
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
        setVideoList(filteredData);
      } catch (err) {
        console.log("err", err);
      }
    };
    getVideoList();
  }, []);

  return (
    <div>
    <Filters search={search} setSearch={setSearch} />
      <Container >
      <Row >
        {videoList
        .filter((data) => {
            console.log("Video list filter",data.title)
            return data.title.includes(search)
        })
        .map((d) => {
          return (
            <div className="col-4 mb-5">
                  <iframe
                    width="100%"
                    height="250px"
                    src={d.link}
                    title={d.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <h2>{d.title}</h2>
                </div>
          );
        })}
        </Row>
      </Container>
    </div>
  );
}
