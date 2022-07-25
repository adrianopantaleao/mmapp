import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import "../../App.css";
import EmployeeShow from "./Show";

const EmployeeList = () => {
	const [Employees, setEmployees] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:4000/")
			.then(({ data }) => {
				setEmployees(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const DataTable = () => {
		return Employees.map((res, i) => {
			return <EmployeeShow obj={res} key={i} />;
		});
	};

	return (
		<fragment>
			<div>
				<h4 align="center">Este é o time da MMTech, as informações dos funcionários estão na tabela abaixo:</h4>
			</div>
			<div className="table-wrapper">
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Nome Completo</th>
							<th>Email</th>
							<th>Telefone</th>
							<th align="center">Opções</th>
						</tr>
					</thead>
					<tbody>{DataTable()}</tbody>
				</Table>
			</div>
		</fragment>
	);
};

export default EmployeeList;
