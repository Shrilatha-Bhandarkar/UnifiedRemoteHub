import React, { useState, useEffect } from 'react';
import { useUser } from '../UserContext';
import axios from 'axios';

const Profile = () => {
  const { userId, setUserId } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!userId) return;

    axios.get(`http://localhost:3001/api2/profile/${userId}`)
      .then((response) => {
        const { _id, name, email } = response.data;
        setUserData({ _id, name, email });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [userId]);

  const handleLogout = () => {
    setUserId(null);
    // Redirect or perform other logout actions
  };

  return (
    <div style={{backgroundColor:'rgb(211, 211, 211)'}}>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div className="card p-5">
          <div className="card-body">
            {userData ? (
              <>
                <h2 className="card-title">{userData.name}</h2>
                <p className="card-text">Email: {userData.email}</p>
                <p className="card-text">UserID: {userData._id}</p>
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
