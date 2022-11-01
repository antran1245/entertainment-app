import { Button, Form } from "react-bootstrap"

export default function Login() {
    return(
        <div className="form-box">
            <Form>
                <h2>Login</h2>
                <Form.Group className="form-group">
                    <Form.Control type="text" placeholder="Email address"/>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Control type="text" placeholder="Password"/>
                </Form.Group>
                <Button className="submit w-100">Login to your account</Button>
            </Form>
            <div className="switch">
                <p>
                    Don't have an account? <span>Sign Up</span>
                </p>
            </div>
        </div>
    )
}