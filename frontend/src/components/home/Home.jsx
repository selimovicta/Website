import React from "react";
import { Container } from "react-bootstrap";
import "./home.css";
import HomePosts from "./HomePosts";

const Home = () => {
  return (
    <div className="home-holder">
      <Container fluid className="w-100 g-0 hero-holder">
        <HomePosts />
      </Container>
    </div>
  );
};

export default Home;
