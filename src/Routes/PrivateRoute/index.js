// Import required modules and types from React and react-router-dom libraries
import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from 'react-redux'


const PrivateRoute = ({ children }) => {
  const {user}=useSelector(state=>state.User)

  // If there's no token or user ID, redirect to the login page
  if (!user?.token || !user?.id) return <Navigate to="/login" replace />;

  // If authenticated, render the child components
  return children;
};

// Export the PrivateRoute component for use in other parts of the application
export default PrivateRoute;