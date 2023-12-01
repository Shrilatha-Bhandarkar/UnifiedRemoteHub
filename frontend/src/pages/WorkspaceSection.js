// WorkspaceSection.js
import React from 'react';

const AnnouncementSection = ({ announcements }) => {
  return (
    <div>
      <h2>Announcements</h2>
      <ul>
        {announcements.map((announcement, index) => (
          <li key={index}>{announcement}</li>
        ))}
      </ul>
    </div>
  );
};

const WorkspaceSection = () => {
  // Example announcements
  const announcements = [
    'Job opening for Software Engineer',
    'New project opportunities available',
    'Company-wide meeting scheduled for next week',
  ];

  return (
    <div>
      {/* Your existing content in WorkspaceSection */}
      <h1>Workspace Section Content</h1>
      {/* ... other content */}
      
      {/* Render the AnnouncementSection component */}
      <AnnouncementSection announcements={announcements} />
    </div>
  );
};

export default WorkspaceSection;
