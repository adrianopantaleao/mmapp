import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import InputMask from 'react-input-mask';

const EmployeeForm = (props) => {
    const validPhone = /^(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Preenchimento Obrigatório")
            .min(5, "O nome deve conter mais de 5 caracteres"),
        email: Yup.string()
            .email("Por favor informe um endereço de email válido.")
            .required("Preenchimento Obrigatório"),
        phone: Yup.string()
            .required("Preenchimento Obrigatório")
            .matches(validPhone, "O telefone informado é inválido"),
    });
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <label htmlFor="name">Nome completo</label>
                        <Field 
                            id="name"
                            name="name" 
                            type="text"
                            placeholder="Nome deve conter mais de 5 caracteres"
                            className="form-control" />
                        <ErrorMessage
                            name="name"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="email">Endereço de Email</label>
                        <Field id="email" name="email" type="text" className="form-control" />
                        <ErrorMessage
                            name="email"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="phone">Número de telefone</label>
                        <Field id="phone" name="phone" type="text" className="form-control" 
                            as={InputMask}
                            mask="(99) 999999999"
                            maskChar="" />
                        <ErrorMessage
                            name="phone"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <hr/>
                    <p align="center">
                        <Button variant="success" block="block" type="submit">
                            {props.children}
                        </Button>
                    </p>
                </Form>
            </Formik>
        </div>
    );
};

export default EmployeeForm;
