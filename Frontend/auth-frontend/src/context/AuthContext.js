import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const initialState = {
  user: null,
  token: null,
  loading: true, // 🔥 clave para evitar redirección prematura
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
        token: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 🔥 Restaurar sesión al refrescar
  useEffect(() => {
    const stored = localStorage.getItem("auth");

    if (stored) {
      const { user, token } = JSON.parse(stored);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user, token },
      });
    } else {
      dispatch({
        type: "LOGIN_ERROR",
        payload: null,
      });
    }
  }, []);

  const login = async (email, password) => {
    dispatch({ type: "LOGIN_START" });

    try {
      const response = await fetch(
        "http://localhost:4000/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Credenciales inválidas");
      }

      // 🔥 Persistir sesión
      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: data.user,
          token: data.token,
        })
      );

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: data.user,
          token: data.token,
        },
      });

      return true;
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.message,
      });
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("auth");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        loading: state.loading,
        error: state.error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
