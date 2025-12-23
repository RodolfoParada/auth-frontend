Practical exercise to apply the concepts learned.
🛠️ Implementación Práctica
Crea un sistema completo de autenticación:

Configurar Context de Autenticación

Crear AuthContext con useReducer
Implementar acciones de login, logout y refresh
Agregar estados de carga y error
Implementar Login/Registro

Crear formularios con validación
Conectar con API de autenticación
Manejar errores y estados de carga
Proteger Rutas de la Aplicación

Configurar React Router con ProtectedRoute
Implementar redirecciones automáticas
Crear páginas de login y acceso denegado
Gestionar Renovación de Tokens

Implementar interceptores para refresh automático
Manejar expiración de sesiones
Sincronizar estado entre pestañas
Ejercicio: Implementa un sistema de "recordar sesión" que persista la autenticación entre sesiones del navegador.

Requerimientos:
# Backend (Node.js + Express)
npm install jsonwebtoken bcryptjs express cors
npm install -D nodemon

# Frontend (React)
npx create-react-app auth-frontend
cd auth-frontend
npm install axios react-router-dom
npm install -D jsonwebtoken