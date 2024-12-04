import React, { useState } from 'react';

function Login() {
  // State to manage form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    console.log('Submitted', { email, password });
    setError(null); // Clear any previous error
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Book Library Management - Login</h3>
            </div>
            <div className="card-body">
              {/* Display error message */}
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <a href="/forgot-password">Forgot Password?</a>
                <span className="mx-2">|</span>
                <a href="/register">Register New Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
