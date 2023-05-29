import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_EMPLOYEES } from '../redux/types';

function Home() {
  let history = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.employees);

  const handleDelete = (id) => {
    const newEmployes = data.filter((emp) => emp.id !== id);
    // setData(newEmployes);
    localStorage.setItem('emoployees', JSON.stringify(newEmployes));
    dispatch({ type: DELETE_EMPLOYEES, payload: { id } });
    history('/');
  };

  useEffect(() => {
    // const cacheEmployee = localStorage.getItem('emoployees');
    // setData(JSON.parse(cacheEmployee));
  }, []);

  return (
    <>
      <div style={{ margin: '10rem' }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Serial NO</th>
              <th>Fast-Name</th>
              <th>Last-Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0
              ? data.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>

                      <td>{item.Name}</td>
                      <td>{item.Lname}</td>
                      <td>{item.Age}</td>
                      <td>{item.Email}</td>
                      <td>{item.Number}</td>
                      <td>
                        <Link to={`/edit/${item.id}`}>
                          <Button>EDIT</Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : 'No data available'}
          </tbody>
        </Table>
        <br></br>
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">create</Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
