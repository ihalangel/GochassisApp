import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuthContext } from './../contexts/AuthContext.jsx';
import LandingPage from '../pages/LadingPage.jsx';
import NotFound from '../pages/NotFound.jsx';
import RequireRole from './RequireRoles';
// import DriverDashboard from '../pages/DriverDashboard.jsx';
// import AdminDashboard from '../pages/AdminDashboard.jsx';
// import Comprobador from '../pages/Comprobador.jsx';
// import Master from '../pages/Master.jsx';
// import SuperAdmin from '../pages/SuperAdmin.jsx';

export default function AppRoutes() {
  const { user, loading } = useAuthContext();

  if (loading) return <div>Cargando usuario...</div>;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
       <Route element={<RequireRole allowedRoles={['comprobador']} />}>
          <Route path="comprobador" element={<LandingPage/>} />
      </Route>
      
      </Route>
       <Route element={<RequireRole allowedRoles={['admin']} />}>
          <Route path="admin" element={<LandingPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}