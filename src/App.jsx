import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import ProjectLayout from './Layout/ProjectLayoutpage';
import AdmingLayout from './Layout/AdmingLayout';
import MainLayout from './Layout/MainLayout';

// Admin Components
import AdminDashboard from './components/Admin/Dashboard/AdminDashboard';

// User Components
import Myresume from './components/User/Myresume/Myresume';
import Template from './components/User/Templates/Template';
import Analysis from './components/User/Analysis/Anslysis';
import Settings from './components/User/settings/Settings';
import Dashboard from './components/User/Dashboard/Dashboard';
import Builder from './components/User/Builder/Builder';

// Common Components
import LandingPage from './components/Common/LandingPage';
import CheckoutPage from './components/Common/Checkouth/CheckoutPage';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<CheckoutPage />} />

        {/* Protected Builder */}
        <Route
          path="/builder"
          element={
            <ProtectedRoute>
              <Builder />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <ProjectLayout />
            </ProtectedRoute>
          }
        >
          <Route element={<AdmingLayout />}>
            <Route
              index
              element={<Navigate to="dashboard" replace />}
            />
            <Route
              path="dashboard"
              element={<AdminDashboard />}
            />
          </Route>
        </Route>

        {/* User Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <ProjectLayout />
            </ProtectedRoute>
          }
        >
          <Route element={<MainLayout />}>
            <Route
              index
              element={<Navigate to="home" replace />}
            />
            <Route
              path="home"
              element={<Dashboard />}
            />
            <Route
              path="my-resumes"
              element={<Myresume />}
            />
            <Route
              path="templates"
              element={<Template />}
            />
            <Route
              path="analysis"
              element={<Analysis />}
            />
            <Route
              path="settings"
              element={<Settings />}
            />
          </Route>
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;