import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import EmployeeForm from "./Form";

const EditEmployee = (props) => {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
    });

    let { id } = useParams ();

    const onSubmit = (EmployeeObject) => {
        axios
            .put(
                "http://localhost:4000/update-employee/" +
                id,
                EmployeeObject
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Os dados do Funcionário foram atualizados.");
                    navigate("/employees");
                } else Promise.reject();
            })
            .catch((err) => alert("Algo deu errado, tente novamente."));
    };

    useEffect(() => {
        axios
            .get(
                "http://localhost:4000/update-employee/"
                + id
            )
            .then((res) => {
                const { name, email, phone } = res.data;
                setFormValues({ name, email, phone });
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <fragment>
            <div>
                <h4 align="center">Utilize o fomulário abaixo para alterar os dados do funcionário: { formValues.name }</h4>
            </div>
            <EmployeeForm
                initialValues={formValues}
                onSubmit={onSubmit}
                enableReinitialize>
                Alterar Informações
            </EmployeeForm>
        </fragment>
    );
};

export default EditEmployee;
