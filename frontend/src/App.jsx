import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AppRoutes } from './routes/AppRoutes';

import { ToastProvider } from './context/ToastContext';
import { CustomerProvider } from './context/CustomerContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CustomerProvider>
          <ToastProvider>
            <AppRoutes />
          </ToastProvider>
        </CustomerProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
