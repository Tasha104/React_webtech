import React, { useState } from 'react';

function Register() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill out all required fields.');
      return;
    }

    // Perform the registration logic here (e.g., API call)
    console.log('Submitted', formData);
    setError(null); // Clear any previous errors
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Book Library Management - Register</h3>
            </div>
            <div className="card-body">
              {/* Display error message */}
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  {/* Optional error message for username */}
                  {/* {usernameError && <div className="text-danger">{usernameError}</div>} */}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {/* Optional error message for email */}
                  {/* {emailError && <div className="text-danger">{emailError}</div>} */}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  {/* Optional error message for password */}
                  {/* {passwordError && <div className="text-danger">{passwordError}</div>} */}
                </div>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <a href="/login">Already have an account? Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
