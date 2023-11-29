import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { UserContext } from '../../UserContext';
import { useUser } from '../../UserContext';

const EmployeeLogin = () => {
  const navigate = useNavigate();
  // const [userId, setUserId] = useState('6564ae0e2d20a1a892cfd080');
  // const { setUserId } = useContext(UserContext);
  // const [userId,setUserId]=useState(null)
  const { setUserId } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
//   const [userId, setUserId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api2/login', {
        email: formData.email,
        password: formData.password,
      });

      // const { userId } = response.data; // Assuming the response contains userId
      const { employee } = response.data;
      // setUserId(userId); // Save userId to state
      console.log('Login successful:', response.data);
      
    //   navigate('/home');
    if (employee) {
      const { _id, name, email } = employee;

      // Save _id to the frontend state or context
      setUserId(_id); // Assuming setUserId is a function to update the state or context
      // You can also store name, email, or other necessary data in state/context

      console.log('Received userId:', _id); 
      // Redirect to the desired page after successful login
      navigate('/home'); // Example redirection to the Home page
    }
    // navigate('/home',{ state: { userId } })

      // Redirect or perform actions upon successful login
    } catch (error) {
      console.error('Login error:', error.response.data);
      // Handle login error, display error message, etc.
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="container p-4 rounded shadow-lg bg-white" style={{ maxWidth: '400px' }}>
        <h1 className="mb-4 text-center">Employee Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <div>Dont have account?<Link to="/employeesignup" className='ms-2'>Register here</Link></div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
