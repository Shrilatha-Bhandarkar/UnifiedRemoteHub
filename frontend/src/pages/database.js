// import React, { useState, useEffect} from 'react';
// import CustomNavbar from '../components/navbar';
// import axios from 'axios';
// import { useUser } from '../UserContext';

// const Database = () => {
//   const [emailDetails, setEmailDetails] = useState([]);
//   const { addToAcceptedRequests ,companies,setCompanies} = useUser();

//   useEffect(() => {
//     const fetchEmailDetails = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/api2/getDetails'); // Replace with your backend endpoint
//         setEmailDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching email details:', error);
//       }
//     };

//     fetchEmailDetails();
//   }, []);

//   // const handleAccept = (index) => {
//   //   // Handle logic when "Accept" button is clicked for the email at the specified index
//   //   console.log(`Accepted email at index ${index}`);
//   //   const updatedRequests = [...acceptedRequests, index]; // Store the accepted request index or ID
//   //   setAcceptedRequests(updatedRequests);
//   //   // Perform necessary operations or updates in the backend/database
//   // };
  
//   const handleAccept = (companyId) => {
//     // Handle logic when "Accept" button is clicked for the email at the specified index
//     console.log(`Accepted company with ID: ${companyId}`);
//     // Perform necessary operations or updates in the backend/database
//     addToAcceptedRequests(companyId); // Assuming this function updates the acceptedRequests state
  
//     // Add logic to update the UI for the accepted company
//     const updatedCompanies = emailDetails.map((company) => {
//       if (company._id === companyId) {
//         return { ...company, isAccepted: true }; // Assuming you have a flag to track accepted companies
//       }
//       return company;
//     });
//     setEmailDetails(updatedCompanies);
//   };


//   const handleReject = (index) => {
//     // Handle logic when "Reject" button is clicked for the email at the specified index
//     console.log(`Rejected email at index ${index}`);
//     // Perform necessary operations or updates in the backend/database
//   };

//   return (
//     <div>
//       <CustomNavbar />
//       <div className="container mt-5">
//         <h1>Email Details</h1>
//         <div className="row row-cols-1 row-cols-md-2 g-4">
//           {emailDetails.map((email, index) => (
//             <div className="col" key={index}>
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">User Name: {email.userName}</h5>
//                   <p className="card-text">User Email: {email.userEmail}</p>
//                   <p className="card-text">Company: {email.company}</p>
//                   {/* Display other email details as needed */}
//                   <div className="d-grid gap-2 d-md-flex justify-content-md-end">
//                     <button className="btn btn-success me-md-2" onClick={() => handleAccept(email._id)}>Accept</button>
//                     <button className="btn btn-danger" onClick={() => handleReject(index)}>Reject</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Database;

import React, { useState, useEffect } from 'react';
import CustomNavbar from '../components/navbar';
import axios from 'axios';
import emailjs from 'emailjs-com'; // Import EmailJS library
import { useUser } from '../UserContext';

const Database = () => {
  const [emailDetails, setEmailDetails] = useState([]);
  const { addToAcceptedRequests } = useUser();

  useEffect(() => {
    const fetchEmailDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api2/getDetails');
        setEmailDetails(response.data);
      } catch (error) {
        console.error('Error fetching email details:', error);
      }
    };

    fetchEmailDetails();
  }, []);

  // const handleAccept = async (companyId) => {
  //   console.log(`Accepted company with ID: ${companyId}`);

  //   try {
  //     await addToAcceptedRequests(companyId);

  //     // Fetch the company details for sending email
  //     const company = emailDetails.find((email) => email._id === companyId);

  //     // Send an email using EmailJS
  //     const emailJSParams = {
  //       companyName: company.company,
  //       userEmail: company.userEmail,
  //       // Add other necessary parameters for the email template
  //     };

  //     await emailjs.send('service_bgfbjhi', 'template_sup07x8', emailJSParams, 'kboLhIQ0SHIImU7wR');

  //     // Delete the company from the database
  //     await axios.delete(`http://localhost:3001/api2/deletecompany/${companyId}`);

  //     // Update the UI after accepting and deleting the company
  //     const updatedEmailDetails = emailDetails.filter((email) => email._id !== companyId);
  //     setEmailDetails(updatedEmailDetails);
  //   } catch (error) {
  //     console.error('Error accepting company:', error);
  //   }
  // };

  // const handleAccept = async (companyId) => {
  //   console.log(`Accepted company with ID: ${companyId}`);
  
  //   try {
  //     await addToAcceptedRequests(companyId);
  
  //     // Fetch the updated email details after accepting
  //     const response = await axios.get('http://localhost:3001/api2/getDetails');
  //     const updatedEmailDetails = response.data;
  
  //     // Find the company details for sending the email
  //     const company = updatedEmailDetails.find((email) => email._id === companyId);
  
  //     // Send an email using EmailJS
  //     const emailJSParams = {
  //       companyName: company.company,
  //       userEmail: company.userEmail,
  //       // Add other necessary parameters for the email template
  //     };
  
  //     await emailjs.send('service_bgfbjhi', 'template_sup07x8', emailJSParams, 'kboLhIQ0SHIImU7wR');
  
  //     // Delete the company from the database
  //     await axios.delete(`http://localhost:3001/api2/deletecompany/${companyId}`);
  
  //     // Update the UI with the updated email details
  //     setEmailDetails(updatedEmailDetails);

  //     alert(`Company "${company.company}" has been accepted and deleted.`);
  //   } catch (error) {
  //     console.error('Error accepting company:', error);
  //   }
  // };


  const handleAccept = async (companyId) => {
    console.log(`Accepted company with ID: ${companyId}`);
  
    try {
      await addToAcceptedRequests(companyId);
  
      // Fetch the updated email details after accepting
      const response = await axios.get('http://localhost:3001/api2/getDetails');
      const updatedEmailDetails = response.data;
  
      // Find the company details for sending the email
      const company = updatedEmailDetails.find((email) => email._id === companyId);
  
      // Send an email using EmailJS
      const emailJSParams = {
        companyName: company.company,
        userEmail: company.userEmail,
        // Add other necessary parameters for the email template
      };
  
      // Confirmation before deleting
      const confirmation = window.confirm(`Company "${company.company}" has been accepted. Email has been sent. Do you want to delete this company?`);
      if (confirmation) {
        await emailjs.send('service_bgfbjhi', 'template_sup07x8', emailJSParams, 'kboLhIQ0SHIImU7wR');
  
        // Delete the company from the database
        await axios.delete(`http://localhost:3001/api2/deletecompany/${companyId}`);
  
        // Update the UI with the updated email details
        setEmailDetails(prevDetails => prevDetails.filter(email => email._id !== companyId));
      } else {
        alert('Company not deleted.');
      }
    } catch (error) {
      console.error('Error accepting company:', error);
    }
  };
  
  
  const handleReject = (index) => {
    console.log(`Rejected email at index ${index}`);
    // Perform necessary operations or updates in the backend/database
  };

  return (
    <div>
      <CustomNavbar />
      <div className="container mt-5">
        <h1>Email Details</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {emailDetails.map((email, index) => (
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">User Name: {email.userName}</h5>
                  <p className="card-text">User Email: {email.userEmail}</p>
                  <p className="card-text">Company: {email.company}</p>
                  {/* Display other email details as needed */}
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-success me-md-2" onClick={() => handleAccept(email._id)}>Accept</button>
                    <button className="btn btn-danger" onClick={() => handleReject(index)}>Reject</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Database;

