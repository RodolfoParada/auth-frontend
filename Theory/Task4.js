// Task 4: Protección de Rutas y Componentes (7 minutos)
// Implementación de guards y componentes condicionales para proteger la aplicación.

// 🛡️ Patrón de Route Guards
// Componente de ruta protegida:

function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="loading">Verificando autenticación...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
// Uso en rutas:

<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />

<Route path="/admin" element={
  <ProtectedRoute requiredRole="admin">
    <AdminPanel />
  </ProtectedRoute>
} />
Componentes condicionales:

function UserMenu() {
  const { user, logout, hasRole } = useAuth();

  return (
    <div className="user-menu">
      {user && (
        <>
          <span>Hola, {user.nombre}</span>
          <button onClick={logout}>Cerrar sesión</button>
          {hasRole('admin') && (
            <Link to="/admin">Panel Admin</Link>
          )}
        </>
      )}
    </div>
  );
}
// Concepto clave: La protección debe ser tanto a nivel de rutas como de componentes individuales.