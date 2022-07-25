import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <hr />
            <div align="center">
                <small>Este sistema é apenas um exemplo, todos os dados e informações incluídos nele são meramente fictícios.</small>
                <p>
                    <i>Developed by</i> Adriano Pantaleão
                    &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
                    &copy; {new Date().getFullYear()} Copyright
                </p>
                <Link to="/">Página Inicial</Link>
                &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/create-employee">Novo Funcionário</Link>
            </div>
        </footer>
    )
}

export default Footer