import { useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

export default function SignUp({setLogin}) {
    const [errors, setErrors] = useState({email: false, password: false, repeat: ''})
    const [form, setForm] = useState({email: '', password: '', repeat: ''})

    const formFilled = (e) => {
        e.preventDefault()
        setErrors({email: form.email === '', password: form.password === '', repeat: form.repeat === ''? "Can't be empty": ''})
        if(form.password !== form.repeat) {
            setErrors({...errors, repeat: 'Password Not Match'})
        }
    }
    return(
        <div className="form-box">
            <Form onSubmit={formFilled}>
                <h2>Sign Up</h2>
                <Form.Group className="form-group" as={Row}>
                    <Col xs={6} className={`p-0 ${!errors.email && 'w-100'}`}>
                        <Form.Control type="text" placeholder="Email address" className="ps-1 pe-0 mt-0" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                    </Col>
                    {errors.email && 
                    <Col xs={6} className="d-flex justify-content-center align-items-center">
                        <Form.Text className="mt-0">Can't be empty</Form.Text>
                    </Col>
                    }
                </Form.Group>
                <Form.Group className="form-group" as={Row}>
                    <Col xs={6} className={`p-0 ${!errors.password && 'w-100'}`}>
                        <Form.Control type="text" placeholder="Password" className="ps-1 pe-0 mt-0" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}/>
                    </Col>
                    {errors.password && 
                    <Col xs={6} className="d-flex justify-content-center align-items-center">
                        <Form.Text className="mt-0">Can't be empty</Form.Text>
                    </Col>
                    }
                </Form.Group>
                <Form.Group className="form-group" as={Row}>
                    <Col xs={6} className={`p-0 ${errors.repeat === '' && 'w-100'}`}>
                        <Form.Control type="text" placeholder="Repeat Password" className="ps-1 pe-0 mt-0" value={form.repeat} onChange={(e) => setForm({...form, repeat: e.target.value})}/>
                    </Col>
                    {errors.repeat !== '' && 
                    <Col xs={6} className="d-flex justify-content-center align-items-center">
                        <Form.Text className="mt-0">{errors.repeat}</Form.Text>
                    </Col>
                    }
                </Form.Group>
                <Button className="submit w-100" type="submit">Create an account</Button>
            </Form>
            <div className="switch">
                <p>
                    Already have an account? &nbsp;<span onClick={() => setLogin(true)}> Login</span>
                </p>
            </div>
        </div>
    )
}