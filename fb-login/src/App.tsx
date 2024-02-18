import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "./components/LoginForm";
import Sidetext from "./components/Sidetext";

function ContainerExample() {
  return (
    <Container className="d-flex align-items-center vh-100">
      <Row className="justify-content-md-center">
        <Col sm={6} className="pr-5">
          <Sidetext></Sidetext>
        </Col>
        <Col sm={4} className="pl-5">
          <LoginForm></LoginForm>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return <ContainerExample></ContainerExample>;
}
export default App;
