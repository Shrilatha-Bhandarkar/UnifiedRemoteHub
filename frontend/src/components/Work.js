// Work.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Workspace.css';

const Work = () => {
  return (
    <div>
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
          <a href='https://07ed39415730620e2c.gradio.live'>project assistant</a>
          </li>
           {/* Styling for the right side image */}
      
        </ul>
        <div className="image-container">
        <img
          src="https://i.redd.it/6lrn6octuqj31.jpg" /* Replace with the URL or path of your image */
          alt="User Profile"
        />
      </div>
      </nav>

     
    </div>
  );
};

export default Work;
