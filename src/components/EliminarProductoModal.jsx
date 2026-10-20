
import { useEffect } from "react";
import {
  IconAlertTriangle,
  IconLoader2,
  IconTrash,
  IconX,
} from "@tabler/icons-react";

export default function EliminarProductoModal({
  producto,
  abierto,
  eliminando,
  onConfirmar,
  onCerrar,
}) {
  useEffect(() => {
    if (!abierto) return;

    function manejarTecla(event) {
      if (event.key === "Escape" && !eliminando) {
        onCerrar();
      }
    }

    window.addEventListener("keydown", manejarTecla);

    return () => {
      window.removeEventListener("keydown", manejarTecla);
    };
  }, [abierto, eliminando, onCerrar]);

  if (!abierto || !producto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !eliminando) {
          onCerrar();
        }
      }}
    >
      <section
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="eliminar-producto-titulo"
        aria-describedby="eliminar-producto-descripcion"
        className="w-full max-w-sm rounded-xl border border-gray-700 bg-gray-900 p-5 shadow-2xl sm:p-6"
      >
        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
            <IconAlertTriangle size={24} />
          </div>

          <div className="min-w-0 flex-1">
            <h2
              id="eliminar-producto-titulo"
              className="text-lg font-bold text-white"
            >
              Eliminar producto
            </h2>

            <p
              id="eliminar-producto-descripcion"
              className="mt-2 text-sm leading-6 text-gray-400"
            >
              ¿Estás seguro de que deseas eliminar{" "}
              <span className="font-semibold text-gray-200">
                {producto.nombre}
              </span>
              ? Esta acción no se puede deshacer.
            </p>
          </div>

          <button
            type="button"
            onClick={onCerrar}
            disabled={eliminando}
            aria-label="Cerrar modal"
            className="rounded-lg p-1 text-gray-400 transition hover:bg-gray-800 hover:text-white disabled:opacity-50"
          >
            <IconX size={20} />
          </button>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={onCerrar}
            disabled={eliminando}
            className="rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={onConfirmar}
            disabled={eliminando}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {eliminando ? (
              <>
                <IconLoader2 size={18} className="animate-spin" />
                Eliminando...
              </>
            ) : (
              <>
                <IconTrash size={18} />
                Eliminar
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
}
