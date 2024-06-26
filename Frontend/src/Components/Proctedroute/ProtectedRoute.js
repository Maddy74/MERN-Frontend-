import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, redirect = '/login' }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={redirect} replace />;
};

export default ProtectedRoute;
