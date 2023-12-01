// Dashboard.js
import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';


const Work = () => {
  return (
      <nav>
            <Link to="/">Workspace</Link>
          
            <Link to="/announcement">Announcement</Link>
         
            <Link to="/projects">Projects</Link>
          
            <Link to="/ongoing">Ongoing Tasks</Link>
         
            <Link to="/meetings">Meetings</Link>
         
            <Link to="/chatting">Chat</Link>
          
      </nav>
  );
};

export default Work;
