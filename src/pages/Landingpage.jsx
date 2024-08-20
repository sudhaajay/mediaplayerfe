import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Landingpage() {
  return (
    <>
      <Container className="mt-5 mb-5 d-flex aline-items-center justify-content-evenly w-100">
        <Row>
          <Col>
            <h3 className="textStyle">
              Welcome To <span className="text-warning">Media Player</span>{" "}
            </h3>
            <p className="textStyle" style={{ textAlign: "justyfy" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              distinctio id, impedit eos maiores rem minima, nulla sed fugiat
              vitae pariatur praesentium. Excepturi, enim ducimus sunt
              voluptatibus dolorum sequi distinctio! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quasi repellat laudantium adipisci
              ipsam obcaecati debitis minus fugit vitae harum cupiditate,
              perferendis quam pariatur ea! Quas id magni dolor inventore
              temporibus. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Id, voluptates illo at iste ratione modi eius, sed fugit
              architecto, libero velit a vitae repudiandae perspiciatis ipsam
              ducimus omnis molestiae totam.
            </p>
            <Link to = '/home'>
              <button className="btn btn-warning mt-5">
                Get Start <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </Col>
          <Col>
            <img
              src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
              alt=""
              className="ms-5"
              height={"400px"}
            />
          </Col>
        </Row>
      </Container>
      <div className="container mt-5 mb-5">
        <h3 className="textStyle mb-5" > features</h3>
        <div className="cards d-flex align-items-center justify-content-evenly">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"  height='250px'/>
            <Card.Body className="bg-dark">
              <Card.Title className="textStyle">Card Title</Card.Title>
              <Card.Text className="textStyle">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"  height='250px'/>
            <Card.Body className="bg-dark">
              <Card.Title className="textStyle">Card Title</Card.Title>
              <Card.Text className="textStyle">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"  height='250px'/>
            <Card.Body className="bg-dark">
              <Card.Title className="textStyle">Card Title</Card.Title>
              <Card.Text className="textStyle">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="'container mt-5 mb-5 border border-2 border-secondary rounded p-5">
       <Row>
        <Col>
        <h3 className="textStyle mb-3">Simple and Powerfull</h3>
         <p className="textStyle"> <span className="fs-5 fw-bolder">Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates ex dolor ea consequuntur. Aperiam accusamus, est quam quasi reprehenderit sed. Non explicabo distinctio provident, ut voluptas vitae placeat recusandae? </p>
         <p className="textStyle"> <span className="fs-5 fw-bolder">Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates ex dolor ea consequuntur. Aperiam accusamus, est quam quasi reprehenderit sed. Non explicabo distinctio provident, ut voluptas vitae placeat recusandae? </p>
         <p className="textStyle"> <span className="fs-5 fw-bolder">Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates ex dolor ea consequuntur. Aperiam accusamus, est quam quasi reprehenderit sed. Non explicabo distinctio provident, ut voluptas vitae placeat recusandae? </p>

        </Col>
        <Col>
        <div className="mt-5 ">
        <iframe width="600" height="350" src="https://www.youtube.com/embed/F2RnxZnubCM" title="Titanic • My Heart Will Go On • Celine Dion" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"   allowFullScreen></iframe>        </div>
        </Col>
       </Row>
      </div>
    </>
  );
}

export default Landingpage;
