// AuthContext.js

import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  role: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        user: action.payload.user,
        role: action.payload.role,
      };
    case 'LOGOUT':
      return {
        isAuthenticated: false,
        user: null,
        role: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user info from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('role');

    if (storedUser && storedRole) {
      dispatch({ type: 'LOGIN', payload: { user: storedUser, role: storedRole } });
    }
  }, []);

  const login = (user, role) => {
    // Save user info to localStorage
    localStorage.setItem('user', user);
    localStorage.setItem('role', role);

    dispatch({ type: 'LOGIN', payload: { user, role } });
  };

  const logout = () => {
    // Remove user info from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('role');

    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
