import { loadAdmin } from '../actions/auth';
import {
  REGISTER_SUCCESS,
  ADMIN_REGISTER_SUCCESS,
  REGISTER_FAIL,
  ADMIN_REGISTER_FAIL,
  USER_LOADED,
  EMPLOYEE_LOADED,
  ADMIN_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  EMPLOYEE_REGISTER_SUCCESS,
  EMPLOYEE_REGISTER_FAIL
  // ACCOUNT_DELETED
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  role: "",
};


function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      localStorage.setItem("role","student")
      // changed on 01/01/23
      // console.log(" The user is TO BE LOADED WITH FOLLOWING STATE::", state, " AND THE FOLLOWING PAYLOAD::", payload)
      
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        role: "student",
      }
    case ADMIN_LOADED:
      console.log(" The admin is TO BE LOADED WITH FOLLOWING STATE::", state, " AND THE FOLLOWING PAYLOAD::", payload)
      localStorage.setItem("role","admin")
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        role: "admin",
      };
    case EMPLOYEE_LOADED:
      console.log("employee loaded")
      // add a employee property to denote that this is an employee
      localStorage.setItem("role","employee")
      console.log(localStorage.getItem("role"))
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        role: "employee"
      };
    case REGISTER_SUCCESS:
    case ADMIN_REGISTER_SUCCESS:
    case EMPLOYEE_REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      console.log("The payload is giv")
      localStorage.setItem('token', payload.token);
      console.log(localStorage)
      // console.log("THe login is sucess I am in reducer function and the payload is given by ", state,payload)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      }
    case REGISTER_FAIL:
    case ADMIN_REGISTER_FAIL:
    case EMPLOYEE_REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('role')
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false
      }
    //   case LOGIN_SUCCESS:
    //     return {
    //       ...state,
    //       ...payload,
    //       isAuthenticated: true,
    //       loading: false
    //     };
    //   case ACCOUNT_DELETED:
    //   case AUTH_ERROR:
    //   case LOGOUT:
    //     return {
    //       ...state,
    //       token: null,
    //       isAuthenticated: false,
    //       loading: false,
    //       user: null
    //     };
    default:
      return state;
  }
}

export default authReducer;