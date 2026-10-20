const API_URL = 'https://6ac44beeae53bf25b80f552e.mockapi.io/productos' // ← pon la tuya

// Función auxiliar: hace la petición, chequea el status y devuelve el JSON
async function pedir(url, opciones = {}) {
  const respuesta = await fetch(url, opciones)
  if (!respuesta.ok) throw new Error(`Error HTTP ${respuesta.status}`)
  return respuesta.json()
}

const JSON_HEADERS = { 'Content-Type': 'application/json' }


export async function obtenerProductos(
  signal,
  pagina = 1,
  limite = 10,
) {
  const url = new URL(API_URL);

  url.searchParams.set("page", String(pagina));
  url.searchParams.set("limit", String(limite));

  return pedir(url.toString(), { signal });
}

export async function obtenerTotalProductos(signal) {
  const productos = await pedir(API_URL, { signal });
  return productos.length;
}

export function crearProducto(datos) {
  return pedir(API_URL, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify(datos),
  })
}

export function actualizarProducto(id, datos) {
  return pedir(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: JSON_HEADERS,
    body: JSON.stringify(datos),
  })
}

export function eliminarProducto(id) {
  return pedir(`${API_URL}/${id}`, { method: 'DELETE' })
}