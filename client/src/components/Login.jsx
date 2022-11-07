import { useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

export default function Login({setLogin}) {
    const [errors, setErrors] = useState({email: false, password: false})
    const [form, setForm] = useState({email: '', password: ''})

    const formFilled = (e) => {
        e.preventDefault()
        setErrors({email: form.email === '', password: form.password === ''})
        if(!errors.email && !errors.password) {
            fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...form})
            })
            .then((resp) => resp.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        }
    }
    return(
        <div className="form-box">
            <Form onSubmit={formFilled}>
                <h2>Login</h2>
                <Form.Group className="form-group" as={Row}>
                    <Col xs={'auto'} className={`p-0 ${!errors.email && 'w-100'}`}>
                        <Form.Control type="text" placeholder="Email address" className="ps-1 pe-0 mt-0" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                    </Col>
                    {errors.email &&
                    <Col xs={'auto'} className="d-flex justify-content-center align-items-center">
                        <Form.Text className="mt-0">Can't be empty</Form.Text>
                    </Col>
                    }
                </Form.Group>
                <Form.Group className="form-group" as={Row}>
                    <Col xs={'auto'} className={`p-0 ${!errors.password && 'w-100'}`}>
                        <Form.Control type="text" placeholder="Password" className="ps-1 pe-0 mt-0" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}/>
                    </Col>
                    {errors.password &&
                    <Col xs={'auto'} className="d-flex justify-content-center align-items-center">
                        <Form.Text className="mt-0">Can't be empty</Form.Text>
                    </Col>
                    }
                </Form.Group>
                <Button className="submit w-100" type="submit">Login to your account</Button>
            </Form>
            <div className="switch">
                <p>
                    Don't have an account? &nbsp;<span onClick={() => setLogin(false)}>Sign Up</span>
                </p>
            </div>
        </div>
    )
}