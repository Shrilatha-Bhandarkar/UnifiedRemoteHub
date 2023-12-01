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
         
            <a href=' http://127.0.0.1:7860'>project assistant</a>
          
      </nav>
  );
};

export default Work;
