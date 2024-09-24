import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registrationpage() {
  return (
    <Form style={{backgroundColor:"lightpink",marginLeft:"100px", width:"700px", marginTop:"50px", height:"350px", borderRadius:"25px"}}>
        <h3 style={{paddingLeft:"300px"}}>Rgister</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  style={{marginLeft:"300px"}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Registrationpage;