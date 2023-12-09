import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filters from "./Filters";

const ContentsParent = (props) => {
  const { search,setSearch } = props;
  const data = [
    {
      title: "video 1",
      link: "https://www.youtube.com/embed/IAMMSU23Tac",
      category: "video",
    },
    {
      title: "video 2",
      link: "https://www.youtube.com/embed/IAMMSU23Tac",
      category: "video",
    },
    {
      title: "video 2",
      link: "https://www.youtube.com/embed/IAMMSU23Tac",
      category: "video",
    },
    {
      title: "video 2",
      link: "https://www.youtube.com/embed/IAMMSU23Tac",
      category: "video",
    },
    {
      title: "video 1",
      link: "https://www.youtube.com/embed/IAMMSU23Tac",
      category: "video",
    },
  ];
  return (
    <div className="mt-5">
    <Filters search={search} setSearch={setSearch} />
      <Container>
        <Row >
          {data
            .filter((d) => d.title.includes(search))
            .map((d) => {
              return (
                <div className="col-4 mb-5">
                  <iframe
                    width="100%"
                    height="100%"
                    src={d.link}
                    title={d.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <h4>{d.title}</h4>
                </div>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ContentsParent;

