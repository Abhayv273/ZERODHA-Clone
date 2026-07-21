import React from 'react';
import Dashboard from './Dashboard';
import TopBar from './TopBar';
import { AuthProvider } from './AuthContext';

function Home() {
  return (
    <AuthProvider>
      <TopBar/>
      <Dashboard/>
    </AuthProvider>
  );
}

export default Home;