
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from './../contexts/AuthContext.jsx';

const RequireRole = ({ allowedRoles }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  // Mientras se carga el estado de usuario, no mostrar nada para evitar redirecciones prematuras.
  if (loading) return <div>Cargando...</div>;

  // Si no hay usuario autenticado, redirigir a login, guardando la ruta actual en 'state' para volver tras login.
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  // Si el usuario no tiene rol permitido, redirigir a página no autorizada.
  if (!allowedRoles.includes(user.rol)) return <Navigate to="/not-authorized" replace />;

console.log("RequireRole: loading", loading);
console.log("RequireRole: user", user);
console.log("RequireRole: allowedRoles", allowedRoles);
console.log("RequireRole: ruta actual", location.pathname);

  // Usuario autenticado y autorizado, renderizar ruta hija.
  return <Outlet />;
};

export default RequireRole;