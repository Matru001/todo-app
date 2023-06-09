import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_EMPLOYEES } from '../redux/types';

function Add() {
  let history = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = lname,
      c = age,
      d = email,
      f = number;
    const currentEmployes = localStorage.getItem('emoployees');
    let newEmployees = [];
    if (!currentEmployes) {
      newEmployees = [
        { id: uniqueId, Name: a, Lname: b, Age: c, Email: d, Number: f },
      ];
    } else {
      newEmployees = [
        ...JSON.parse(currentEmployes),
        { id: uniqueId, Name: a, Lname: b, Age: c, Email: d, Number: f },
      ];
    }
    dispatch({
      type: ADD_EMPLOYEES,
      payload: {
        employee: {
          id: uniqueId,
          Name: a,
          Lname: b,
          Age: c,
          Email: d,
          Number: f,
        },
      },
    });
    localStorage.setItem('emoployees', JSON.stringify(newEmployees));
    history('/');
  };

  return (
    <>
      <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
        <Form.Group className="mb-3" ControlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" ControlId="formLname">
          <Form.Control
            type="text"
            placeholder="Enter Lname"
            required
            onChange={(e) => setLname(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="text"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNumber">
          <Form.Control
            type="text"
            placeholder="Enter Number"
            required
            onChange={(e) => setNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Add;
