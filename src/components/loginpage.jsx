import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Loginpage() {
  return (
    <Form style={{backgroundColor:"lightblue", height:"300px", width:"500px", marginTop:"100px", marginLeft:"200px", borderRadius:"25px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3 style={{paddingLeft:"150px"}}>Login Here</h3>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Email" />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button style={{marginLeft:"200px"}} variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Loginpage;