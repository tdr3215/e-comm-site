import React, { useState, useEffect } from 'react';
// import { auth, signInWithGoogle, logout } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    // if (loading) {
    //   // maybe trigger a loading screen
    //   return;
    // }
    // if (user) navigate("/products");
  }, []);

  return (
    <div className="container justify-content-center">
      <div className="row justify-content-center">
        <div className="col-auto">
          <form className="mt-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={password}
                type="password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="justify-content-between">
              <Link
                to={'/products'}
                className="btn btn-primary border-white"
                onClick={() => {}}
              >
                Login with Google
              </Link>
              <button
                onClick={() => {}}
                className="btn btn-primary border-white"
              >
                Logout
              </button>
            </div>
          </form>
          <Link to={'/register'}>Don't have an account? Register here!</Link>
        </div>
      </div>
    </div>
  );
};

export { Login };
