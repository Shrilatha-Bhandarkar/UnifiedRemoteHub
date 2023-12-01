import React, { useState, useEffect } from 'react';
import { useUser } from '../UserContext';
import CustomNavbar from '../components/navbar';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap';

const Workspace = () => {
  const { userId, name, email, role, acceptedRequests } = useUser();

  const [showModal, setShowModal] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [companyDesc, setCompanyDesc] = useState('');
  const [companies, setCompanies] = useState([]);

  // useEffect(() => {
  //   const storedCompanies = JSON.parse(localStorage.getItem('companies'));
  //   if (storedCompanies) {
  //     setCompanies(storedCompanies);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('companies', JSON.stringify(companies));
  // }, [companies]);

  const handleCreateWorkspace = async() => {
    // Code to handle creating the workspace
    try {
      const response = await axios.post('http://localhost:3001/api/createcompany', {
        name: companyName,
        description: companyDesc,
        userId: userId, // Add userId or any other necessary data
      });

      setCompanies([...companies, response.data]);
      setShowModal(false);
    } catch (error) {
      console.error('Error creating company:', error);
    }
    console.log('Company Name:', companyName);
    console.log('Company Description:', companyDesc);

    // Close the modal after handling creation
    // setShowModal(false);
  };

  // useEffect(() => {
  //   async function fetchCompanies() {
  //     try {
  //       const response = await axios.get(`http://localhost:3001/api/company/${userId}`); // Replace '/api/companies' with your backend API endpoint
  //       setCompanies(response.data);
  //     } catch (error) {
  //       console.error('Error fetching companies:', error);
  //     }
  //   }

  //   fetchCompanies();
  // }, []);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/getcompany');
      setCompanies(response.data);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  
  const handleDeleteCompany = async (companyId) => {
    try {
      await axios.delete(`http://localhost:3001/api/deletecompany/${companyId}`);
      const updatedCompanies = companies.filter(company => company._id !== companyId);
      alert("This workspace is deleted")
      setCompanies(updatedCompanies);
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  };

  // const handleJoinWorkspace = (company) => {
  //   if (role !== 'admin')
  //   //  {
  //   //   const isRequestAccepted = acceptedRequests.includes(company._id);
  //   //   console.log('Is request accepted:', isRequestAccepted);
  //   //   // Send an email when joining the workspace
  //   //   if (isRequestAccepted) {
  //   //     return <button className="btn btn-primary">View Workspace</button>;
  //   //   } else
  //     {
  //     emailjs.init('kboLhIQ0SHIImU7wR');
  //     const emailJSParams = {
  //       companyName: company.name,
  //       userName: name, /* Your user's name */
  //       userEmail: email, /* User's email */
  //       userId,
  //     };
    
  //     emailjs
  //       .send('service_bgfbjhi', 'template_iwjqiyn', emailJSParams)
  //       .then((response) => {
  //         console.log('Email sent:', response);
  //         alert('Email sent successfully!');
  //         axios.post('http://localhost:3001/api2/storeEmailDetails', {
  //           // Include necessary data to store in the database
  //           company: company.name,
  //           userName: name,
  //           userEmail: email,
  //           userId,
  //           // ...other relevant data
  //         })
  //         .then((dbResponse) => {
  //           console.log('Data stored in database:', dbResponse.data);
  //           // Call the parent function to join the workspace
  //           // handleJoin();
  //           // handleClose(); // Close the modal
  //         })
  //         .catch((error) => {
  //           console.error('Error storing data in the database:', error);
  //           // Handle error as needed
  //         });
  //       })
  //       .catch((error) => {
  //         console.error('Email error:', error);
  //         alert('Error sending email. Please try again.');
  //       });
  //   // } 
  // }else {
  //     // Handle admin actions if needed
  //   }
  // };
  // Inside the handleJoinWorkspace function
const handleJoinWorkspace = (company) => {
  if (role !== 'admin') {
    // const isRequestAccepted = acceptedRequests.includes(company._id);
    const isRequestAccepted = acceptedRequests.some(request => request === company.name);
    console.log('Is request accepted:', isRequestAccepted);
    console.log('Accepted requests:', acceptedRequests);
    console.log('Company ID:', company._id);
    
    if (isRequestAccepted) {
      console.log('Request is already accepted. Showing View Workspace');
      // Update the acceptedRequests state or perform necessary actions here
      return;
    }

    console.log('Sending email for request');
    emailjs.init('kboLhIQ0SHIImU7wR');
    const emailJSParams = {
      companyName: company.name,
      userName: name, /* Your user's name */
      userEmail: email, /* User's email */
      userId,
    };

    emailjs
      .send('service_bgfbjhi', 'template_iwjqiyn', emailJSParams)
      .then((response) => {
        console.log('Email sent:', response);
        alert('Email sent successfully!');
        axios.post('http://localhost:3001/api2/storeEmailDetails', {
          // Include necessary data to store in the database
          company: company.name,
          userName: name,
          userEmail: email,
          userId,
          // ...other relevant data
        })
        .then((dbResponse) => {
          console.log('Data stored in database:', dbResponse.data);
          // Update the acceptedRequests state or perform necessary actions here
        })
        .catch((error) => {
          console.error('Error storing data in the database:', error);
          // Handle error as needed
        });
      })
      .catch((error) => {
        console.error('Email error:', error);
        alert('Error sending email. Please try again.');
      });
  } else {
    console.log('Admin role. Showing View Workspace');
    // Handle admin actions if needed
  }
};


  return (
    <div>
      <CustomNavbar />
      <Container className="mt-5 d-flex justify-content-end">
        <Button onClick={() => setShowModal(true)} className="mb-3">
          Create Workspace
        </Button>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Create Workspace</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Company Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={companyDesc}
                      onChange={(e) => setCompanyDesc(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleCreateWorkspace}>
                  Create
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <Row>
          {companies.map((company) => (
            <Col key={company._id} sm={6}>
              <div className="mb-4 p-3 border border-primary rounded shadow-lg">
                <h3>{company.name}</h3>
                <p>{company.description}</p>
                {role === 'admin' && (
                  <button className="btn btn-danger m-2" onClick={() => handleDeleteCompany(company._id)}>
                    Delete
                  </button>
                )}
               <button className="btn btn-primary" onClick={() => handleJoinWorkspace(company)}>
  {role === 'admin' || acceptedRequests.includes(company.name) ? 'View Workspace' : 'Join Workspace'}
               </button>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Workspace;
