import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconPackage,
} from "@tabler/icons-react";
import { Link } from "react-router";

const columnas = [
  {
    titulo: "Producto",
    enlaces: [
      { label: "Cómo funciona", href: "#how-it-works" },
      { label: "Precios", href: "#pricing" },
      { label: "Catálogo", to: "/productos" },
    ],
  },
  {
    titulo: "Empresa",
    enlaces: [
      { label: "Sobre nosotros", href: "#about" },
      { label: "Soporte", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  },
  {
    titulo: "Cuenta",
    enlaces: [
      { label: "Iniciar sesión", to: "/login" },
      { label: "Crear cuenta", to: "/login" },
      { label: "Dashboard", to: "/dashboard" },
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
                href="#"
                aria-label="GitHub"
                title="GitHub"
                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <IconBrandGithub size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                title="Twitter"
                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <IconBrandTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <IconBrandLinkedin size={20} />
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
                {enlaces.map(({ label, to, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
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

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Términos
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
