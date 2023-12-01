// Dashboard.js
import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';


const Work = () => {
  return (
      <nav>

        <ul>
          <li>
          <Link to="/">Workspace</Link>
          </li>
          <li>
          <Link to="/announcement">Announcement</Link>
          </li>
          <li>
          <Link to="/projects">Projects</Link>
          </li>
          <li>
          <Link to="/ongoing">Ongoing Tasks</Link>
          </li>
          <li>
          <Link to="/meetings">Meetings</Link>
          </li>
          <li>
          <a href=' http://127.0.0.1:7860'>project assistant</a>
          </li>
       
         </ul>
          
      </nav>
  );
};

export default Work;
