import {
  IconPackage,
  IconSettings,
  IconMenu2,
  IconHome,
} from "@tabler/icons-react";
import { useState } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Barra superior */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-gray-800 bg-gray-900 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={
              sidebarOpen ? "Ocultar menú lateral" : "Mostrar menú lateral"
            }
            title={sidebarOpen ? "Ocultar menú" : "Mostrar menú"}
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <IconMenu2 size={23} />
          </button>

          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-linear-to-br from-purple-600 to-blue-500 p-2">
              <IconPackage size={22} className="text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Product<span className="text-purple-400">Admin</span>
            </span>
          </div>
        </div>

        <span className="text-sm text-gray-400">Panel de administración</span>
      </header>

      {/* Fondo del menú móvil */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed bottom-0 left-0 top-16 z-50 w-64 border-r border-gray-800 bg-gray-900 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-3 py-5">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Menú principal
          </p>

          <nav className="space-y-1">
            <NavLink
              to="/"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "border border-purple-500/20 bg-linear-to-r from-purple-600/20 to-blue-500/10 text-purple-300"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <IconHome size={21} />
              Dashboard
            </NavLink>

            <NavLink
              to="/productos"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "border border-purple-500/20 bg-linear-to-r from-purple-600/20 to-blue-500/10 text-purple-300"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <IconPackage size={21} />
              Productos
            </NavLink>
          </nav>

          <div className="mt-auto border-t border-gray-800 pt-4">
            <div className="flex items-center gap-3 rounded-lg px-3 py-3 text-gray-400 transition hover:bg-gray-800 hover:text-white">
              <IconSettings size={20} />
              <span className="text-sm">Administración</span>
            </div>

            <p className="mt-3 px-3 text-xs text-gray-600">
              ProductAdmin · v1.0
            </p>
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <main
        className={`min-h-screen pt-16 transition-all duration-300 ${
          sidebarOpen ? "lg:pl-64" : "lg:pl-0"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
