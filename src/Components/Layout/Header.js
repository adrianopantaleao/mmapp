import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="App-header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to={"/"} className="nav-link">
                            MMApp - Gestão de Funcionários
                        </Link>
                    </Navbar.Brand>

                    <Nav className="justify-content-end">
                        <Nav>
                            <Link to={"/create-employee"} className="nav-link">
                                Adicionar Funcionário
                            </Link>
                        </Nav>

                        <Nav>
                            <Link to={"/employees"} className="nav-link">
                                Lista de Funcionários
                            </Link>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
        </header>

    )
}

export default Header