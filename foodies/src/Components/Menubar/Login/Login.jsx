import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../service/authService.js";
import { StoreContext } from "../../../context/StoreContext.jsx";

import { toast } from "react-toastify";

const Login = () => {
  const {setToken} = useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  }

  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission logic here, such as sending data to the server

    try {
      console.log('Login request payload:', data);
      const response = await login(data);
      console.log('Login response:', response);
      if (response && response.status === 200 && response.data && response.data.token) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } else{
        const msg = response && response.data && response.data.message ? response.data.message : 'Login failed. Please try again.';
        toast.error(msg);
      }
    } catch (error) {
      console.error('Login error:', error);
      const msg = error.response && error.response.data && error.response.data.message ? error.response.data.message : (error.message || 'Login failed. Please try again.');
      toast.error(msg);
    }
  }
  return (
    <div className="login-container">
      <div className="container">
        <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Sign In
              </h5>
              <form onSubmit={onSubmitHandler}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    value={data.email}
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-outline-primary btn-login text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <button
                    className="btn btn-outline-danger btn-login text-uppercase mt-2"
                    type="reset"
                  >
                    Reset
                  </button>
                </div>
                <div className="mt-4">
                  Don't have an account? <Link to="/register">Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
