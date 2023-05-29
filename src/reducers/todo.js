/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_EMPLOYEES,
  DELETE_EMPLOYEES,
  UPDATE_EMPLOYEES,
} from '../redux/types';

const initialState = {
  employees: [],
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case ADD_EMPLOYEES:
      return {
        ...state,
        employees: [...state.employees, payload.employee],
      };

    case UPDATE_EMPLOYEES:
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === payload.id ? (emp = payload.newEmployee) : emp
        ),
      };

    case DELETE_EMPLOYEES:
      return {
        ...state,
        employees: state.employees.filter((emp) => emp.id !== payload.id),
      };

    default:
      return state;
  }
}
