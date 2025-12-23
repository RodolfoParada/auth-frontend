// Task 1: Arquitectura de Autenticación JWT (8 minutos)
// Comprensión profunda de los mecanismos de autenticación moderna basados en tokens.

// 🎯 Conceptos Fundamentales de JWT
// JWT (JSON Web Tokens) es un estándar abierto que define un formato compacto para transmitir información de manera segura:

// ¿Por qué JWT en lugar de sesiones tradicionales?

// Stateless: No requiere almacenamiento en servidor
// Escalable: Funciona perfectamente en arquitecturas distribuidas
// Flexible: Puede contener cualquier información serializable
// Independiente: No depende de cookies o almacenamiento del servidor
// Ventajas sobre sesiones tradicionales:

// API RESTful: Perfecto para APIs stateless
// Microservicios: No requiere estado compartido entre servicios
// Móviles: Funciona igual en web, móvil y APIs
// CDN: Puede ser cacheado sin problemas de sesión
// Concepto clave: JWT permite autenticación stateless, eliminando la necesidad de bases de datos de sesiones.

// 🔐 Estructura Interna de un JWT
// Un JWT consta de tres partes separadas por puntos:

// Header.Payload.Signature
1. Header (cabecera):

{
  "alg": "HS256",
  "typ": "JWT"
}
2. Payload (datos):

{
  "userId": 123,
  "username": "johndoe",
  "role": "admin",
  "iat": 1640995200,
  "exp": 1641081600
}
3. Signature (firma):

HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  "clave_secreta_muy_segura"
)
// Concepto clave: La firma digital garantiza que el token no haya sido alterado.