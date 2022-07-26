import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import NotFound from "./Components/Layout/NotFound";
import CreateEmployee from "./Components/Employee/Create";
import EditEmployee from "./Components/Employee/Edit";
import Employees from "./Components/Employee/List";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/" element={<Employees />} />
                  <Route path="/create-employee" element={<CreateEmployee />} />
                  <Route path="/edit-employee/:id" element={<EditEmployee />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </BrowserRouter>   
  );
};

export default App;
