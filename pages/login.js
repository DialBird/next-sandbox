import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Layout from '../components/MyLayout';

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login(email.value, password.value);
  }

  return (
    <Layout>
      <h2>Log In</h2>
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
    </Layout>
  );
}

export default Login;
