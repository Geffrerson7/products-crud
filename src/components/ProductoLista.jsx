import { IconEdit, IconTrash, IconPackage } from "@tabler/icons-react";
export default function ProductoLista({
  productos,
  onCrear,
  onEditar,
  onEliminar,
  pagina,
  onCambiarPagina,
  totalPaginas,
}) {
  if (productos.length === 0) {
    return (
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <p className="text-sm font-medium text-purple-400">Catálogo</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Productos
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Administra, edita y elimina los productos de tu catálogo.
          </p>
        </div>

        <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-700 bg-gray-900/70 px-6 py-12 text-center shadow-xl">
          <div className="mb-5 flex size-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
            <IconPackage size={32} stroke={1.5} />
          </div>

          <h2 className="text-lg font-semibold text-white">
            Todavía no hay productos
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-gray-400">
            Tu catálogo está vacío. Agrega tu primer producto para comenzar a
            organizar tu inventario.
          </p>

          <button
            type="button"
            onClick={onCrear}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98]"
          >
            <span className="text-lg leading-none">+</span>
            Agregar primer producto
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="productos" className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <p className="text-sm font-medium text-purple-400">Catálogo</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Productos
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Administra, edita y elimina los productos de tu catálogo.
        </p>
      </div>

      <div className="mb-6 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
        <div className="relative w-full sm:max-w-md">
          <label htmlFor="products-search" className="sr-only">
            Buscar productos
          </label>

          <input
            type="search"
            name="search"
            id="products-search"
            placeholder="Buscar productos..."
            className="block w-full rounded-xl border border-gray-700 bg-gray-900 py-3 pl-4 pr-4 text-sm text-white placeholder-gray-500 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
          />
        </div>

        <button
          id="createProductButton"
          type="button"
          onClick={onCrear}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98]"
        >
          <span className="text-lg leading-none">+</span>
          Agregar producto
        </button>
      </div>

      <div className="relative overflow-x-auto rounded-xl border border-gray-700 bg-gray-900 shadow-xl">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="border-b border-gray-700 bg-gray-800 text-xs uppercase tracking-wider text-gray-300">
            <tr>
              <th scope="col" className="p-4">
                <input
                  id="table-checkbox-all"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                />
                <label htmlFor="table-checkbox-all" className="sr-only">
                  Seleccionar todos los productos
                </label>
              </th>
              <th scope="col" className="px-6 py-4">
                Producto
              </th>
              <th scope="col" className="px-6 py-4">
                Descripción
              </th>
              <th scope="col" className="px-6 py-4">
                Precio
              </th>
              <th scope="col" className="px-6 py-4">
                Acción
              </th>
            </tr>
          </thead>

          <tbody>
            {productos.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-10 text-center text-gray-400"
                >
                  Todavía no hay productos en esta página.
                </td>
              </tr>
            ) : (
              productos.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-gray-800 bg-gray-900 transition-colors hover:bg-gray-800/80"
                >
                  <td className="w-4 p-4">
                    <input
                      id={`table-checkbox-${p.id}`}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    />
                    <label
                      htmlFor={`table-checkbox-${p.id}`}
                      className="sr-only"
                    >
                      Seleccionar {p.nombre}
                    </label>
                  </td>

                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p.imagen}
                        alt={p.nombre}
                        className="h-12 w-12 rounded-full border border-gray-700 object-cover"
                      />
                      <span className="whitespace-nowrap">{p.nombre}</span>
                    </div>
                  </th>

                  <td className="px-6 py-4 text-gray-400">{p.descripcion}</td>

                  <td className="px-6 py-4 font-medium text-blue-400">
                    S/ {Number(p.precio).toFixed(2)}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onEditar(p)}
                        aria-label={`Editar ${p.nombre}`}
                        title="Editar producto"
                        className="rounded-md p-2 text-purple-400 transition-colors hover:bg-purple-500/10 hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <IconEdit stroke={2} size={20} />
                      </button>

                      <button
                        type="button"
                        onClick={() => onEliminar(p.id)}
                        aria-label={`Eliminar ${p.nombre}`}
                        title="Eliminar producto"
                        className="rounded-md p-2 text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <IconTrash stroke={2} size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <nav
          className="flex flex-col gap-4 border-t border-gray-800 bg-gray-900 p-4 sm:flex-row sm:items-center sm:justify-between"
          aria-label="Paginación de productos"
        >
          <span className="text-sm text-gray-400">
            Página <span className="font-semibold text-white">{pagina}</span> de{" "}
            <span className="font-semibold text-white">{totalPaginas}</span>
          </span>

          <ul className="flex flex-wrap items-center justify-center gap-1">
            <li>
              <button
                type="button"
                onClick={() => onCambiarPagina(pagina - 1)}
                disabled={pagina === 1}
                className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Anterior
              </button>
            </li>

            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(
              (numero) => (
                <li key={numero}>
                  <button
                    type="button"
                    onClick={() => onCambiarPagina(numero)}
                    aria-current={pagina === numero ? "page" : undefined}
                    className={
                      pagina === numero
                        ? "flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500 bg-linear-to-br from-purple-600 to-blue-500 text-sm font-semibold text-white"
                        : "flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-sm text-gray-300 transition hover:bg-gray-700 hover:text-white"
                    }
                  >
                    {numero}
                  </button>
                </li>
              ),
            )}

            <li>
              <button
                type="button"
                onClick={() => onCambiarPagina(pagina + 1)}
                disabled={pagina === totalPaginas}
                className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Siguiente
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
