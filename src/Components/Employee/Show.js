import React from "react";
import { Button } from "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployeeShow = (props) => {
    const { _id, name, email, phone } = props.obj;

    const deleteEmployee = () => {
        if (window.confirm('Deseja Realmente exlcuir este funcionário?')){
        axios
            .delete(
                "http://localhost:4000/delete-employee/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("O Fucionário selecionado foi excluído da base de dados.");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Algo deu errado, tente novamente."));
        }
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td align="center">
                <Link className="edit-link"
                    to={"/edit-employee/" + _id}>
                    Alterar
                </Link>
                <Button onClick={deleteEmployee}
                    size="sm" variant="danger">
                    Remover
                </Button>
            </td>
        </tr>
    );
};

export default EmployeeShow;
