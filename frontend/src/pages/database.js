import React, { useState, useEffect} from 'react';
import CustomNavbar from '../components/navbar';
import axios from 'axios';
import { useUser } from '../UserContext';

const Database = () => {
  const [emailDetails, setEmailDetails] = useState([]);
  const { addToAcceptedRequests ,companies,setCompanies} = useUser();

  useEffect(() => {
    const fetchEmailDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api2/getDetails'); // Replace with your backend endpoint
        setEmailDetails(response.data);
      } catch (error) {
        console.error('Error fetching email details:', error);
      }
    };

    fetchEmailDetails();
  }, []);

  // const handleAccept = (index) => {
  //   // Handle logic when "Accept" button is clicked for the email at the specified index
  //   console.log(`Accepted email at index ${index}`);
  //   const updatedRequests = [...acceptedRequests, index]; // Store the accepted request index or ID
  //   setAcceptedRequests(updatedRequests);
  //   // Perform necessary operations or updates in the backend/database
  // };
  
  const handleAccept = (companyId) => {
    // Handle logic when "Accept" button is clicked for the email at the specified index
    console.log(`Accepted company with ID: ${companyId}`);
    // Perform necessary operations or updates in the backend/database
    addToAcceptedRequests(companyId); // Assuming this function updates the acceptedRequests state
  
    // Add logic to update the UI for the accepted company
    const updatedCompanies = emailDetails.map((company) => {
      if (company._id === companyId) {
        return { ...company, isAccepted: true }; // Assuming you have a flag to track accepted companies
      }
      return company;
    });
    setEmailDetails(updatedCompanies);
  };


  const handleReject = (index) => {
    // Handle logic when "Reject" button is clicked for the email at the specified index
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
