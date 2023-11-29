// import { useState } from 'react';
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'

// function LoginPage() {
//   const navigate=useNavigate()
//   // const [selectedOption, setSelectedOption] = useState(null);
//   // const [step, setStep] = useState(1);
//   // const [formData, setFormData] = useState({
//   //   email: '',
//   //   password: '',
//   // });

//   // const handleOptionClick = (option) => {
//   //   setSelectedOption(option);
//   //   setStep(2); // Move to step 2 after selecting the login option
//   // };

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [name]: value,
//   //   }));
//   // };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://localhost:3001/api/login', {
//   //       params: {
//   //         email: formData.email,
//   //         password: formData.password,
//   //       },
//   //     });
  
//   //     if (response.status === 200) {
//   //       // Successful login
//   //       console.log('Login successful:', response.data);
//   //       navigate('/');
//   //     } else {
//   //       console.error('Login error:', response.statusText);
//   //       // Handle other responses like incorrect credentials, etc.
//   //     }
//   //   } catch (error) {
//   //     console.error('Login error:', error);
//   //     // Handle login error, show a message to the user, etc.
//   //   }
//   // };
  
  


//   const handleBack = () => {
//     setStep(1); // Go back to step 1
//   };

//   const renderStepContent = () => {
//     if (step === 1) {
//       return (
//         <div className="d-grid gap-2">
//           <h1 className="text-center mb-4">Login Page</h1>
//           <button
//             className={`btn btn-primary btn-lg ${selectedOption === 'customer' ? 'active' : ''}`}
//             onClick={() => handleOptionClick('customer')}
//           >
//             Sign in as Customer
//           </button>
//           <button
//             className={`btn btn-primary btn-lg ${selectedOption === 'admin' ? 'active' : ''}`}
//             onClick={() => handleOptionClick('admin')}
//           >
//             Sign in as Admin
//           </button>
//         </div>
//       );
//     } else if (step === 2) {
//       return (
//         <form onSubmit={handleSubmit} className="p-4">
//           <h1 className="text-center mb-4">{selectedOption === 'admin' ? 'Admin Login' : 'Customer Login'}</h1>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="d-grid gap-2">
//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//             <button type="button" className="btn btn-secondary" onClick={handleBack}>
//               Back
//             </button>
//           </div>
//         </form>
//       );
//     }
//   };

//   return (
//     <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" style={{backgroundColor:'rgb(211, 211, 211)'}}>
//       <div className="card p-5">
//         {renderStepContent()}
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
import React from 'react';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const handleLogin = (userType) => {
    // Perform actions based on user type (employee or admin)
    console.log(`Logging in as ${userType}`);
    if (userType === 'Employee') {
      navigate('/employeelogin'); // Replace '/employee-login' with your employee login route
    } else if (userType === 'Admin') {
      navigate('/adminlogin'); // Replace '/admin-login' with your admin login route
    }
    // You can redirect to respective login pages or perform login actions
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" style={{backgroundColor:'rgb(211, 211, 211)'}}>
      <div className="card p-5">
        <h1 className="text-center mb-4">Login</h1>
        <div className="d-grid gap-2">
          <button className="btn btn-primary btn-lg mb-3" onClick={() => handleLogin('Employee')}>
            Login as Employee
          </button>
          <button className="btn btn-primary btn-lg" onClick={() => handleLogin('Admin')}>
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
