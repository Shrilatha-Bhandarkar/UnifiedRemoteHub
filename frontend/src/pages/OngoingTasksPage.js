import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OngoingTasksPage = () => {
  const [ongoingTasks, setOngoingTasks] = useState([]);

  useEffect(() => {
    // Fetch ongoing tasks data when the component mounts
    fetchOngoingTasks();
  }, []);

  const fetchOngoingTasks = async () => {
    try {
      // Replace 'http://localhost:3001/api/getOngoingTasks' with your actual backend endpoint
      const response = await axios.get('http://localhost:3001/api/getOngoingTasks');
      setOngoingTasks(response.data);
    } catch (error) {
      console.error('Error fetching ongoing tasks:', error);
    }
  };

  return (
    <div>
      <h2>Ongoing Tasks</h2>
      {ongoingTasks.length === 0 ? (
        <p>No ongoing tasks.</p>
      ) : (
        <ul>
          {ongoingTasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong>
              <p>Description: {task.description}</p>
              <p>Status: {task.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OngoingTasksPage;
