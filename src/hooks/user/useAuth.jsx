import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { loginUser as loginUserService, registerUser } from './../../services/user/registerUser.jsx';
import { useAuthContext } from './../../context/AuthContext.jsx';

export const useAuth = () => {
  const { login, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          login(token, decoded);
        } else {
          localStorage.removeItem('token');
          logout();
        }
      } catch (error) {
        localStorage.removeItem('token');
        logout();
      }
    }
  }, [login, logout]);

  const loginUser = async (loginValue, password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await loginUserService(loginValue, password);
      login(data.token, data.user);
      localStorage.setItem('token', data.token);
      return data.user;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (nombre, email, password, rol) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const data = await registerUser(nombre, email, password, rol);
      setSuccess("¡Registro exitoso! Por favor, inicia sesión.");
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    logout();
  };

  return { loginUser, register, logoutUser, loading, error, success, setError };
};
