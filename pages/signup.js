import { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';

const Signup = () => {
  const { signup } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    signup(email.value, password.value);
  }

  return (
    <React.Fragment>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" name='email' placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name='password' placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default Signup;
