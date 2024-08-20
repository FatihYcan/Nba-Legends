// CardContainer.jsx

import { Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  // console.log(data);
  const [search, setSearch] = useState("");
  // console.log(search);

  const handleChange = (e) => {
    setSearch(e.target.value.trimStart());
  };

  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <main className=" mt-3">
      <Form.Control
        placeholder="Search a player..."
        className="w-50 m-auto p-3 rounded-4 search"
        onChange={handleChange}
        type="search"
        value={search}
        
      />
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-3">
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((player, i) => (
              <Col xxl={3} xl={3} lg={4} md={6} key={i}>
                <PlayerCard {...player} />
              </Col>
            ))}

          {/* {filteredData.map((player, i) => (
            <Col xxl={3} xl={3} lg={4} md={6} key={i}>
              <PlayerCard {...player} />
            </Col>
          ))} */}
        </Row>
      </Container>
    </main>
  );
};

export default CardContainer;
