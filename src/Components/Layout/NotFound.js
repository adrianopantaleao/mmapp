import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1 align="center"><b>#404 - Not Found</b></h1>
            <hr />
            <div align="center">
                <small>A url informada não foi encontrada, por favor verifique.</small>
                <br />
                <Link to="/">Página Inicial</Link>
                &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/create-employee">Novo Funcionário</Link>
            </div>
        </div>
    )
}

export default NotFound