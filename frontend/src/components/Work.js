// Dashboard.js
import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import Workspace from './Workspace'; // Import your Workspace component
import AnnouncementPage from '../pages/WorkspaceSection';
import ProjectsPage from '../pages/ProjectsPage';
import OngoingPage from '../pages/OngoingTasksPage';
import MeetingsPage from '../pages/MeetingsPage';
import ChattingPage from '../pages/ChatPage';

const Dashboard = () => {
  return (
    <Router>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <Link to="/">Workspace</Link>
          </li>
          <li>
            <Link to="announcement">Announcement</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="ongoing">Ongoing Tasks</Link>
          </li>
          <li>
            <Link to="meetings">Meetings</Link>
          </li>
          <li>
            <Link to="chatting">Chat</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Workspace />} />
        <Route path="announcement" element={<AnnouncementPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="ongoing" element={<OngoingPage />} />
        <Route path="meetings" element={<MeetingsPage />} />
        <Route path="chatting" element={<ChattingPage />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
