import React from 'react';

import ToastContainer from '../components/ToastContainer';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      {children}
      <ToastContainer />
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
