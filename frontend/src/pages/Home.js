import React,{useEffect} from 'react'
import Navbar from '../components/navbar'
// import { useLocation } from 'react-router-dom';
// import { useUser } from '../UserContext';

const Home = () => {
  // const { userId } = useUser(); 
  // const location = useLocation();
  // const { _id } = location.state || {};
  // useEffect(() => {
  //   console.log('Received userId in Home:', _id);
  // }, [_id]);
  // useEffect(() => {
  //   console.log('User ID in Home:', userId); // Log the userId in the console
  //   // You can perform any other actions with the userId here
  // }, [userId]);
  return (
    <div>
      <Navbar />
      hey there
      {/* <h1>Welcome to Home</h1> */}
      {/* <p>User ID: {userId}</p> */}
    </div>
  )
}

export default Home
