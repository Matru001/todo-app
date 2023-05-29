import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UPDATE_EMPLOYEES } from '../redux/types';

function Edit() {
  const history = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const employees = JSON.parse(localStorage.getItem('emoployees'));

  const [name, setName] = useState('');
  const [Lname, setLname] = useState('');
  const [Age, setAge] = useState('');
  const [Email, setEmail] = useState('');
  const [Number, setNumber] = useState('');
  const [Id, setID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let newEmployee = { id: Id, Name: name, Lname, Age, Email, Number };
    const updatedEmployees = employees.map((element) =>
      element.id === id ? (element = newEmployee) : element
    );
    dispatch({
      type: UPDATE_EMPLOYEES,
      payload: { id, newEmployee: newEmployee },
    });
    localStorage.setItem('emoployees', JSON.stringify(updatedEmployees));

    history('/');
  };

  useEffect(() => {
    const curentEmployee = employees.filter((element) => element.id === id);
    console.log('curentEmployee', curentEmployee);
    setName(curentEmployee[0].Name);
    setLname(curentEmployee[0].Lname);
    setAge(curentEmployee[0].Age);
    setEmail(curentEmployee[0].Email);
    setNumber(curentEmployee[0].Number);
    setID(id);
  }, []);

  return (
    <>
      <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
        <Form.Group className="mb-3" ControlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" ControlId="formLname">
          <Form.Control
            type="text"
            placeholder="Enter Lname"
            value={Lname}
            required
            onChange={(e) => setLname(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            value={Age}
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="text"
            placeholder="Enter Email"
            value={Email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNumber">
          <Form.Control
            type="text"
            placeholder="Enter Number"
            value={Number}
            required
            onChange={(e) => setNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </>
  );
}

export default Edit;
