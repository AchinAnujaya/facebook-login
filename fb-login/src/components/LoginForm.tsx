import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function LoginForm() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            type="email,number"
            placeholder="Email address or phone number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>

      <Button variant="primary"> Log in</Button>
      <br />
      <a href=""> Forgotten password</a>
      <br />
      <hr />
      <Button variant="success"> Create new account</Button>
    </div>
  );
}
export default LoginForm;
