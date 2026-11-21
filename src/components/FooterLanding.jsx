import { IconBrandGithub, IconPackage } from "@tabler/icons-react";
import { Link } from "react-router";

const columnas = [
  {
    titulo: "Producto",
    enlaces: [
      { label: "Cómo funciona", href: "#how-it-works" },
      { label: "Precios", href: "#pricing" },
      { label: "Catálogo", to: "/admin/productos" },
    ],
  },
  {
    titulo: "Empresa",
    enlaces: [
      { label: "Sobre nosotros", href: "#about" },
      { label: "Código fuente", href: "https://github.com/Geffrerson7/products-crud", externo: true },
    ],
  },
  {
    titulo: "Panel",
    enlaces: [
      { label: "Dashboard", to: "/admin/dashboard" },
      { label: "Productos", to: "/admin/productos" },
    ],
  },
];

export default function FooterLanding() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <Link
              to="/"
              aria-label="ProductAdmin, ir al inicio"
              className="inline-flex items-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <span className="rounded-lg bg-linear-to-br from-purple-600 to-blue-500 p-2">
                <IconPackage size={22} className="text-white" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                Product<span className="text-purple-400">Admin</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              El panel de administración que mantiene tu catálogo de productos
              ordenado, actualizado y bajo control.
            </p>

            <div className="mt-5 flex items-center gap-1">
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

          {/* Columnas de enlaces */}
          {columnas.map(({ titulo, enlaces }) => (
            <nav key={titulo} aria-label={titulo}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {titulo}
              </h2>

              <ul className="mt-4 space-y-3 text-sm">
                {enlaces.map(({ label, to, href, externo }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(externo && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="rounded-lg text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        to={to}
                        className="rounded-lg text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Línea inferior */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© {anio} ProductAdmin. Todos los derechos reservados.</p>

          <p>Proyecto de portafolio. Los datos son de demostración.</p>
        </div>
      </div>
    </footer>
  );
}
