

import React, { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // En AuthProvider - dentro de validateToken:
    console.log("Componente montado y useEffect ejecutado");
async function validateToken() {
  const storedToken = localStorage.getItem('token');
  console.log("AuthProvider: token desde localStorage", storedToken);
  if (storedToken) {
    try {
      const decoded = jwtDecode(storedToken);
      console.log("AuthProvider: token decodificado", decoded);
      const isExpired = decoded.exp * 1000 < Date.now();
      console.log("AuthProvider: ¿token expirado?", isExpired);
      if (!isExpired) {
        setToken(storedToken);
        setUser({
          id: decoded.id,
          nombre: decoded.nombre,
          rol: decoded.rol,
          email: decoded.email,
        });
        console.log("AuthProvider: usuario seteado", decoded);
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
        console.log("AuthProvider: token expirado eliminado");
      }
    } catch (error) {
      console.error("AuthProvider: error decodificando token", error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setToken(null);
      setUser(null);
    }
  } else {
    console.log("AuthProvider: no hay token en localStorage");
  }
  setLoading(false);
  console.log("AuthProvider: loading false");
}

    validateToken();
  }, []);

  const login = (token, userData) => {
    setToken(token);
    setUser(userData);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext debe usarse dentro de un AuthProvider");
  return context;
};
