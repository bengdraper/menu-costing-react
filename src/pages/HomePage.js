import { Container, Col, Row } from "reactstrap"
import InputForm from "../components/InputForm";

const HomePage = () => {
  return (
    <>
      <div>
        <hr />
        <h2>HomePage</h2>
        <p>Here build to : sales / login / fast nav</p>
      </div>

      <Container>
        <Row className="row-content align-items-center">
          <Col xs='12'>
            <h2>Show me your papers</h2>
            <hr/>
          </Col>
          <Col md='10'>
            <InputForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
