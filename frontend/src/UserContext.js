// // UserContext.js
// import { createContext, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userId, setUserId] = useState(null);

//   return (
//     <UserContext.Provider value={{ userId, setUserId }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    // Retrieve userId from localStorage on initial load
    return localStorage.getItem('userId') || null;
  });

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  // const [acceptedRequests, setAcceptedRequests] = useState([]);

  const [acceptedRequests, setAcceptedRequests] = useState(() => {
    const storedAcceptedRequests = localStorage.getItem('acceptedRequests');
    return storedAcceptedRequests ? JSON.parse(storedAcceptedRequests) : [];
  });

  useEffect(() => {
    // Update localStorage when acceptedRequests changes
    localStorage.setItem('acceptedRequests', JSON.stringify(acceptedRequests));
  }, [acceptedRequests]);
  
  // const [role, setRole] = useState(null); 
  const [role, setRole] = useState(() => {
    return localStorage.getItem('role') || null;
  });

  useEffect(() => {
    // Update localStorage when userId changes
    if (userId) {
      localStorage.setItem('userId', userId);
    } else {
      localStorage.removeItem('userId');
    }
    if (role) {
      localStorage.setItem('role', role);
    } else {
      localStorage.removeItem('role');
    }
  }, [userId,role]);

  const addToAcceptedRequests = (companyId) => {
    setAcceptedRequests((prevAcceptedRequests) => [...prevAcceptedRequests, companyId]);
  };

  return (
    <UserContext.Provider value={{ userId, setUserId,userId, setUserId, name, setName, email, setEmail,role,setRole,acceptedRequests, setAcceptedRequests,addToAcceptedRequests }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios'

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userId, setUserId] = useState(() => {
//     // Retrieve userId from localStorage on initial load
//     return localStorage.getItem('userId') || null;
//   });

//   const [name, setName] = useState(null);
//   const [email, setEmail] = useState(null);

//   useEffect(() => {
//     // Update localStorage when userId changes
//     if (userId) {
//       localStorage.setItem('userId', userId);
//       fetchUserDetails(userId); // Fetch name and email after obtaining userId
//     } else {
//       localStorage.removeItem('userId');
//     }
//   }, [userId]);

//   const fetchUserDetails = async (userId) => {
//     try {
//       // Perform API call to get user details using userId
//       const userDetails = await fetchUserDetailsFromAPI(userId);
//       if (userDetails) {
//         setName(userDetails.name);
//         setEmail(userDetails.email);
//       }
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       // Handle error scenario here
//     }
//   };

//   const fetchUserDetailsFromAPI = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:3001/api2/profile/${userId}`, {
       
//         // You might need additional configurations based on your API
//       });
  
//       if (response.status === 200) {
//         const userData = response.data;
//         // Assuming your API response has a structure like { name: '...', email: '...' }
//         return { name: userData.name, email: userData.email };
//       } else {
//         // Handle the error scenario if the response is not successful
//         throw new Error('Failed to fetch user details');
//       }
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       // Handle error scenario here
//       throw error;
//     }
//   };
//   return (
//     <UserContext.Provider value={{ userId, setUserId, name, email }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   return useContext(UserContext);
// };
