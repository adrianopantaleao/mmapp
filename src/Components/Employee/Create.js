import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import EmployeeForm from "./Form";

const CreateEmployee = () => {
	const navigate = useNavigate()
	const [formValues, setFormValues] =
		useState({ name: '', email: '', phone: '' })

	const onSubmit = EmployeeObject => {
		console.log(EmployeeObject)
		axios.post(
			'http://localhost:4000/create-employee',
			EmployeeObject)
			.then(res => {
				if (res.status === 200){
					alert('O funcionário foi adicionado à base de dados.')
					navigate("/employees");
				} else
					Promise.reject()
			})
			.catch(err => alert('Algo deu errado, tente novamente.'))
	}

	return (
		<fragment>
			<div>
				<h4 align="center">Utilize o fomulário abaixo para incluir mais um funcionário no time:</h4>
			</div>
			<EmployeeForm initialValues={formValues}
				onSubmit={onSubmit}
				enableReinitialize>
				Cadastrar novo Funcionário
			</EmployeeForm>
		</fragment>
	)
}

export default CreateEmployee
