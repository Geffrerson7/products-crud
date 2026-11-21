# ProductAdmin — Gestión de Productos

Aplicación web para administrar un catálogo de productos mediante una interfaz moderna y adaptable. Permite consultar, registrar, editar y eliminar productos utilizando una API REST simulada con MockAPI.

**Demo:** [products-crud-nu.vercel.app](https://products-crud-nu.vercel.app)

## Características

- **Listado de productos:** visualización de productos en una tabla.
- **CRUD de productos:** creación, consulta, actualización y eliminación de registros.
- **Paginación:** navegación entre páginas para organizar los productos del catálogo.
- **Formularios modales:** creación y edición de productos mediante formularios.
- **Confirmación de eliminación:** modal de confirmación antes de eliminar un registro.
- **Notificaciones:** mensajes de éxito y error mediante Sonner.
- **Estados de carga y errores:** manejo de solicitudes HTTP, indicador de carga (`Spinner`) y cancelación de peticiones cuando corresponde.
- **Diseño responsive:** interfaz adaptable a diferentes tamaños de pantalla.
- **Interfaz oscura:** diseño con Tailwind CSS, acentos morados y azules.

## Tecnologías utilizadas

- **React** — construcción de la interfaz.
- **Vite** — entorno de desarrollo y compilación.
- **Tailwind CSS** — estilos y diseño responsive.
- **MockAPI** — API REST simulada para gestionar productos.
- **React Router** — enrutado entre la página de inicio, el panel de administración y la página 404.
- **Sonner** — notificaciones.
- **Tabler Icons React** — iconografía.
- **ESLint** — análisis estático para mantener un estilo de código consistente.

## Requisitos previos

- Node.js 20 o superior.
- [pnpm](https://pnpm.io/installation).
- Acceso a internet para realizar peticiones a MockAPI.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Geffrerson7/products-crud.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd products-crud
   ```

3. Instala las dependencias:

   ```bash
   pnpm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

5. Abre en el navegador la URL que indique Vite, normalmente `http://localhost:5173`.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Genera la versión de producción en `dist/` |
| `pnpm preview` | Previsualiza la compilación de producción |
| `pnpm lint` | Ejecuta ESLint sobre el código |

## Configuración de la API

El proyecto utiliza MockAPI como backend temporal.

La URL base de la API se configura en:

```text
src/api/productos.js
```

El servicio centraliza las solicitudes HTTP para las siguientes operaciones:

| Operación | Método HTTP | Descripción |
|---|---|---|
| Obtener productos | GET | Consultar productos del catálogo |
| Crear producto | POST | Registrar un nuevo producto |
| Actualizar producto | PUT | Modificar un producto existente |
| Eliminar producto | DELETE | Eliminar un producto |

La paginación utiliza los parámetros `page` y `limit` para solicitar los productos de una página específica.

## Estructura del proyecto

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── api/
│   │   └── productos.js          # Cliente HTTP de MockAPI
│   ├── components/
│   │   ├── EliminarProductoModal.jsx
│   │   ├── Footer.jsx            # Pie del panel de administración
│   │   ├── FooterLanding.jsx     # Pie de la página de inicio
│   │   ├── Layout.jsx            # Barra superior, menú lateral y pie del panel
│   │   ├── ProductoForm.jsx
│   │   ├── ProductoLista.jsx
│   │   ├── ProductoModal.jsx
│   │   └── Spinner.jsx
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── ProductoListaPagina.jsx
│   ├── App.jsx                   # Definición de rutas
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vercel.json                   # Reescritura de rutas para la SPA en Vercel
└── vite.config.js
```

## Rutas

| Ruta | Página |
|---|---|
| `/` | Página de inicio |
| `/admin/dashboard` | Dashboard del panel |
| `/admin/productos` | Listado y gestión de productos |
| Cualquier otra | Página 404 |

## Despliegue

La demo está desplegada en Vercel. `vercel.json` redirige todas las rutas a `index.html`, de modo que recargar o abrir directamente una ruta como `/admin/productos` no devuelve 404.

## Uso

1. Accede a la página de productos (`/admin/productos`).
2. Selecciona **Agregar producto** para abrir el formulario de registro.
3. Completa los campos disponibles y guarda el producto.
4. Utiliza las acciones de la tabla para editar o eliminar registros.
5. Confirma la eliminación cuando se muestre el modal correspondiente.
6. Navega entre las páginas del catálogo mediante los controles de paginación.

## Próximas mejoras

- Implementar búsqueda funcional y filtros.
- Incorporar ordenamiento por nombre y precio.
- Mejorar la paginación para mostrar el total de registros desde el backend.
- Migrar MockAPI a una API propia desarrollada con **NestJS**.
- Incorporar persistencia con una base de datos relacional.
- Añadir pruebas unitarias y de integración.
- Mejorar la accesibilidad y el manejo de errores de la interfaz.

## Autor

**Gefferson Casasola Huamancusi**

- GitHub: [Geffrerson7](https://github.com/Geffrerson7)
- Portfolio: [gefferson-portfolio.vercel.app](https://gefferson-portfolio.vercel.app)

---

Proyecto desarrollado como práctica de desarrollo frontend y consumo de APIs REST.