// WorkInProgressPage.js
import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';

const images = [
  'https://th.bing.com/th/id/OIP.8-JlDOaIdCvPDc1zM_FMUAHaE8?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.7MfZxyG33NLjiZ1-9vL3kAHaHW?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.oiS7qp_gJogcgg4t4lj1BQHaFk?w=1200&h=902&rs=1&pid=ImgDetMain',
  // Add more image URLs as needed
];

const WorkInProgressPage = () => {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [randomImage, setRandomImage] = useState('');

  const handleStatusClick = (status) => {
    setSelectedStatus(status);

    if (status === 'Ongoing') {
      // Display a random image for the "Ongoing" status
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    }
  };

  const handleNeedHelpClick = () => {
    setShowHelpModal(true);
  };

  const handleContactClose = () => {
    setShowHelpModal(false);
  };

  return (
    <Container className="mt-5">
      <h2>Work In Progress</h2>

      <div className="mt-3">
        <Button variant="primary" className="mr-2" onClick={() => handleStatusClick('Ongoing')}>
          Ongoing
        </Button>
        <Button variant="warning" className="mr-2" onClick={() => handleStatusClick('Pending')}>
          Pending
        </Button>
        <Button variant="success" className="mr-2" onClick={() => handleStatusClick('Completed')}>
          Completed
        </Button>
        <Button variant="danger" onClick={handleNeedHelpClick}>
          Need Help
        </Button>
      </div>

      {selectedStatus && (
        <div className="mt-3">
          <h4>Selected Status: {selectedStatus}</h4>
          {/* Display other content related to the selected status */}

          {selectedStatus === 'Ongoing' && randomImage && (
            <div>
              <h5>Random Image:</h5>
              <img src={randomImage} alt="Random" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
      )}

      {/* Need Help Modal */}
      <Modal show={showHelpModal} onHide={handleContactClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact for Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>If you need assistance, please contact support at support@example.com.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleContactClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default WorkInProgressPage;
