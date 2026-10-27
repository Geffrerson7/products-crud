import { IconArrowLeft, IconHome, IconPackage } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-6 py-12 text-center shadow-xl sm:px-10 sm:py-16">
        {/* Resplandor decorativo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl"
        />

        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <IconPackage size={16} stroke={1.8} />
            Error 404
          </div>

          <p className="bg-linear-to-br from-purple-500 to-blue-400 bg-clip-text text-7xl font-black tracking-tight text-transparent sm:text-8xl">
            404
          </p>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Página no encontrada
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
            Lo sentimos, la página que buscas no existe o fue movida. Revisa la
            dirección o vuelve al panel principal para continuar.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/admin/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98]"
            >
              <IconHome size={20} stroke={1.8} />
              Ir al dashboard
            </Link>

            <Link
              to="/admin/productos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98]"
            >
              <IconPackage size={20} stroke={1.8} />
              Ver productos
            </Link>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <IconArrowLeft size={18} stroke={1.8} />
            Volver a la página anterior
          </button>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-600">ProductAdmin · v1.0</p>
    </div>
  );
}
