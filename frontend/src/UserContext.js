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

  useEffect(() => {
    // Update localStorage when userId changes
    if (userId) {
      localStorage.setItem('userId', userId);
    } else {
      localStorage.removeItem('userId');
    }
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
