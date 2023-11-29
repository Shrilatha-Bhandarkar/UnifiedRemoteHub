import Img from '../assets/images/building.jpg'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{backgroundColor:'rgb(211, 211, 211)'}}>
    <div className="container-fluid  min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mt-4 mt-md-0">
            <h1 className="display-5 " style={{  fontFamily: 'Markazi Text',fontWeight: 800}}>Welcome to Our Workspace</h1>
            <p className="lead mb-4 ms-5">Where amazing things happen!</p>
            <div className='ms-5'>
              <button className="btn btn-primary btn-lg mb-3" type="button"><Link  className='text-white text-decoration-none' to='/login'>Login</Link></button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Img} className="img-fluid rounded" alt="Placeholder" />
          </div>
        </div>
      </div>
     
    </div>
    </div>
  );
}

export default LandingPage;
