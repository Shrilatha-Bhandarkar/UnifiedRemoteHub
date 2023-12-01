// Import the necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Define the Workspace component
const Workspace = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="../pages/WorkspaceSection.js">Announcement</Link>
        </li>
        <li>
          <Link to="../pages/MeetingsPage.js">Meetings</Link>
        </li>
        <li>
          <Link to="../pages/ProjectsPage.js">Projects</Link>
        </li>
        <li>
          <Link to="../pages/OngoingTasksPage.js">OngoingWorks</Link>
        </li>
        <li>
          <Link to="../pages/ChatPage.js">Let's Chat</Link>
        </li>
      </ul>
    </nav>
  );
};

// Export the Workspace component as the default export
export default Workspace;
