import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeetingsPage = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Fetch meetings data when the component mounts
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      // Replace 'http://localhost:3001/api/getMeetings' with your actual backend endpoint
      const response = await axios.get('http://localhost:3001/api/getMeetings');
      setMeetings(response.data);
    } catch (error) {
      console.error('Error fetching meetings:', error);
    }
  };

  return (
    <div>
      <h2>Your Meetings</h2>
      {meetings.length === 0 ? (
        <p>No meetings scheduled.</p>
      ) : (
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <strong>{meeting.title}</strong>
              <p>Time: {meeting.time}</p>
              <p>Details: {meeting.details}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MeetingsPage;
