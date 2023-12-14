// AppRouter.js
import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import DashboardRoutes from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import CasesChart from "../components/CasesChart";

export const RequestContext = createContext();

const AppRouter = () => {
  const storedAuth = JSON.parse(localStorage.getItem('auth')) || { isLoggedIn: false, user: '' };
  const [auth, setAuthState] = useState(storedAuth);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth')) || { isLoggedIn: false, user: '' };
    setAuthState(storedAuth);
  }, []);

  const setAuth = (newAuth) => {
    setAuthState(newAuth);
    localStorage.setItem('auth', JSON.stringify(newAuth));
  };

  const contextData = {
    auth,
    setAuth,
  };

  return (
    <RequestContext.Provider value={contextData}>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute isAuthenticated={auth.isLoggedIn}>
                <CasesChart />
              </PublicRoute>
            }
          />
          <Route
            path="/public-route-1"
            element={<PublicRoute isAuthenticated={auth.isLoggedIn}>Componente1</PublicRoute>}
          />
          <Route
            path="/public-route-2"
            element={<PublicRoute isAuthenticated={auth.isLoggedIn}>Componente2</PublicRoute>}
          />
          {/* Agrega más rutas públicas según sea necesario */}
          <Route
            path="/*"
            element={
              <PrivateRoute isAuthenticated={auth.isLoggedIn}>
                <DashboardRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </RequestContext.Provider>
  );
};

export default AppRouter;
