// Task 3: Gestión de Estado de Autenticación en React (8 minutos)
// Implementación de Context API para manejar estado de autenticación global.

// 🏪 Context API + useReducer para Estado Complejo
// ¿Por qué Context API sobre Redux para autenticación?

// Simplicidad: Menos boilerplate que Redux
// Nativo: No requiere librerías adicionales
// Suficiente: La autenticación no necesita complejidad extrema
// TypeScript: Mejor integración con tipos
// Estado de autenticación típico:

const initialAuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null
};
// Acciones del reducer:

const AUTH_ACTIONS = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
  REFRESH_SUCCESS: 'REFRESH_SUCCESS',
  CLEAR_ERROR: 'CLEAR_ERROR'
};
// Concepto clave: El estado de autenticación debe ser global y reactivo a cambios en tokens.