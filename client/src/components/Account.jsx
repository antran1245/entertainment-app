import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Login from "./Login"
import SignUp from "./Signup"
import '../sass/account.scss'

export default function Account() {
    const [login, setLogin] = useState(true)

    return(
        <Container id="account" fluid>
            <Row className="logo d-flex justify-content-center">
                <Col className="d-flex justify-content-center">
                    <NavLink to={'/'}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </Col>
            </Row>
            <Row className="box d-flex justify-content-center">
                {login? 
                    <Login setLogin={setLogin}/>
                    :<SignUp setLogin={setLogin}/>
                }
            </Row>
        </Container>
    )
}