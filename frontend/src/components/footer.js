import "./Footer.css"
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
          <img
          src={logo}
          className="img-fluid rounded"
          alt="Logo"
          style={{
            width: '50px', // Set the desired width
            height: 'auto', // Auto height to maintain aspect ratio
            marginRight: '10px', // Adjust margin as needed
            marginTop:'0%',
            marginBottom:'0%'
          }}
        />

            <h3>UnifiedRemoteHub</h3>
            <p>
             This platform offers tools for project management, virtual team building, mental health support, and 
             knowledge sharing. 
            </p>
            
          </div>
          
          <div className="footer-section">
            <h3>Information</h3>
            <p>
            UnifiedRemoteHub - Sahyadri College of Engineering and management,
            Sahyadri Campus, Adyar, Mangaluru
            </p>
            <p>UnifiedRemoteHub@gmail.com</p>
          </div>
        </div>
        <span id="copyright-tag">© 2023 UnifiedRemoteHub. All rights reserved.</span>
        
      </footer>
    </div>
  );
};

export default Footer;
