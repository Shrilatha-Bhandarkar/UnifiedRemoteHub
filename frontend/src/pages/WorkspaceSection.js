// Announcement.js
import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

const Announcement = () => {
  const [announcement, setAnnouncement] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you want to display the submitted data
    const data = {
      announcement,
      description,
      email,
    };

    // Add logic to post the data to your backend
    // You can use axios or fetch for making API calls
    // Once the data is submitted, update the submittedData array
    setSubmittedData([...submittedData, data]);

    // Clear form fields after submitting
    setAnnouncement('');
    setDescription('');
    setEmail('');
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <h2>Create Announcement</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="announcement">
              <Form.Label>Announcement Section</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Post Announcement
            </Button>
          </Form>

          {submittedData.map((data, index) => (
            <Alert key={index} variant="white" className="mt-3">
              <h5>Submitted Data:</h5>
              <p><strong>Announcement:</strong> {data.announcement}</p>
              <p><strong>Description:</strong> {data.description}</p>
              <p><strong>Email ID:</strong> {data.email}</p>
            </Alert>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Announcement;
