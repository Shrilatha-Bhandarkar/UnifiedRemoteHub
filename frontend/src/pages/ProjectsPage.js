// ProjectsPage.js
import React, { useState } from 'react';

const ProjectsPage = () => {
  // State variables to store form data
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [file, setFile] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append('projectName', projectName);
    formData.append('projectDescription', projectDescription);
    formData.append('file', file);

    // Perform API request to submit the project
    // You can use axios or fetch here
    // Example using fetch:
    fetch('http://localhost:3001/api/submitProject', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success
        console.log('Project submitted successfully', data);
        // Reset form fields
        setProjectName('');
        setProjectDescription('');
        setFile(null);
      })
      .catch((error) => {
        // Handle error
        console.error('Error submitting project', error);
      });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div>
      <h2>Submit a Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input type="file" id="file" onChange={handleFileChange} required />
        </div>
        <div>
          <button type="submit">Submit Project</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectsPage;
