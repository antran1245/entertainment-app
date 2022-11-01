import { Container, Row, Col } from "react-bootstrap"
import logo from '../assets/logo.svg'
import Login from "./Login"
import '../sass/account.scss'

export default function Account() {
    return(
        <Container id="account" fluid>
            <Row className="logo d-flex justify-content-center">
                <Col className="d-flex justify-content-center">
                    <img src={logo} alt="logo" />
                </Col>
            </Row>
            <Row className="box d-flex justify-content-center">
                <Login/>
            </Row>
        </Container>
    )
}