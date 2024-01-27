// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import router from './Router';
import { RouterProvider } from 'react-router-dom';
import { axiosClient } from './utils/axiosClient';
import { AuthProvider } from './utils/auth';

function App() {
  async function checkAuth() {
    const token = localStorage.getItem("token");
    if (token) {
      await axiosClient.get("/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data);
          setAuthenticated(true);
          
        })
        .catch((err) => {
          console.log(err);
          setAuthenticated(false);
        })
    }
  }
  useEffect(() => {
    checkAuth();
  }, []);

  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  );
}

export default App;
