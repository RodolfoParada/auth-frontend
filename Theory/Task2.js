// Task 2: Sistema de Tokens Dual (7 minutos)
// Implementación de access tokens y refresh tokens para máxima seguridad.

// 🏗️ Arquitectura de Dos Tokens
// Access Token (corto, 15 minutos):

// Para operaciones normales de la aplicación
// Enviado en cada petición autenticada
// Almacenado en memoria (no localStorage)
// Expira frecuentemente por seguridad
// Refresh Token (largo, 7 días):

// Para renovar access tokens expirados
// Almacenado de forma segura (httpOnly cookie)
// Nunca expuesto al JavaScript del frontend
// Solo usado para obtener nuevos access tokens
// Flujo de renovación automática:

// Patrón de renovación de tokens
async function refreshAccessToken() {
  const refreshToken = getRefreshTokenFromCookie();

  const response = await fetch('/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken })
  });

  const { accessToken, newRefreshToken } = await response.json();

  // Actualizar tokens
  setAccessToken(accessToken);
  setRefreshTokenCookie(newRefreshToken);

  return accessToken;
}
Concepto clave: Los dos tipos de tokens permiten balance entre seguridad (tokens cortos) y usabilidad (renovación automática).