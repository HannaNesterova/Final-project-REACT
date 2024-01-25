import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styleLogin.css';


function Login(){
    return(
        <div className='container'>
                <h2 className='login-title'>Sign up</h2>
            <div className='container-login'>
            <Form className='form-login'>
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
                <Button className='btn-login' type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
    )
}

export default Login;