import { IconPackage, IconBrandGithub } from "@tabler/icons-react";
import { Link } from "react-router";

export default function Footer({ sidebarOpen = false }) {
  const anio = new Date().getFullYear();

  return (
    <footer
      className={`border-t border-gray-800 bg-gray-900 transition-all duration-300 ${
        sidebarOpen ? "lg:pl-64" : "lg:pl-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Marca */}
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-linear-to-br from-purple-600 to-blue-500 p-2">
              <IconPackage size={18} className="text-white" />
            </div>
            <span className="text-sm font-bold tracking-tight">
              Product<span className="text-purple-400">Admin</span>
            </span>
          </div>

          {/* Enlaces */}
          <nav
            aria-label="Enlaces del pie de página"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400"
          >
            <Link
              to="/admin/dashboard"
              className="transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Dashboard
            </Link>
            <Link
              to="/admin/productos"
              className="transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Productos
            </Link>
            <Link
              to="/"
              className="transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Página de inicio
            </Link>
          </nav>

          {/* Redes sociales */}
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/Geffrerson7/products-crud"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Código fuente en GitHub"
              title="Código fuente en GitHub"
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <IconBrandGithub size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© {anio} ProductAdmin. Todos los derechos reservados.</p>
          <p>Proyecto de portafolio</p>
        </div>
      </div>
    </footer>
  );
}
