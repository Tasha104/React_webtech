import React, { useState } from 'react';

function ResetPassword() {
  // State for managing form inputs and error messages
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [token] = useState(new URLSearchParams(window.location.search).get('token')); // Retrieve token from URL

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Add your password reset logic here
    console.log('Password reset:', { token, password });
    setError(null); // Clear any previous error
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Reset Password</h3>
            </div>
            <div className="card-body">
              {/* Display error message */}
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="token" value={token} />

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Change Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
