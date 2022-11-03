import { Button, Form, Row, Col } from "react-bootstrap"

export default function SignUp({setLogin}) {
    return(
        <div className="form-box">
            <Form>
                <h2>Sign Up</h2>
                <Form.Group className="form-group" as={Row}>
                    <Col xs={'auto'} className="ps-0">
                        <Form.Control type="text" placeholder="Email address" className="ps-1 pe-0 mt-0"/>
                    </Col>
                    <Col xs={'auto'} className="d-flex justify-content-center align-items-center">
                        <Form.Text className="mt-0">Can't be empty</Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group className="form-group" as={Row}>
                    <Col xs={'auto'} className="ps-0">
                        <Form.Control type="text" placeholder="Password" className="ps-1 pe-0 mt-0"/>
                    </Col>
                    <Col xs={'auto'} className="d-flex justify-content-center align-items-center">
                        <Form.Text className="mt-0">Can't be empty</Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group className="form-group" as={Row}>
                    <Col xs={'auto'} className="ps-0">
                        <Form.Control type="text" placeholder="Repeat Password" className="ps-1 pe-0 mt-0"/>
                    </Col>
                    <Col xs={'auto'} className="d-flex justify-content-center align-items-center">
                        <Form.Text className="mt-0">Can't be empty</Form.Text>
                    </Col>
                </Form.Group>
                <Button className="submit w-100">Create an account</Button>
            </Form>
            <div className="switch">
                <p>
                    Already have an account? <span onClick={() => setLogin(true)}>Login</span>
                </p>
            </div>
        </div>
    )
}