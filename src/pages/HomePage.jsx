import {
  IconCheck,
  IconEdit,
  IconHome,
  IconLayoutDashboard,
  IconPackage,
  IconShieldCheck,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";
import FooterLanding from "../components/FooterLanding";

const caracteristicas = [
  {
    icono: IconPackage,
    titulo: "Catálogo centralizado",
    texto:
      "Todos tus productos, precios y descripciones reunidos en un solo panel.",
  },
  {
    icono: IconEdit,
    titulo: "Edición al instante",
    texto: "Actualiza cualquier producto en segundos, sin pasos innecesarios.",
  },
  {
    icono: IconShieldCheck,
    titulo: "Datos bajo control",
    texto: "Confirma cada acción importante antes de aplicar cambios.",
  },
  {
    icono: IconLayoutDashboard,
    titulo: "Vista clara",
    texto:
      "Un dashboard sencillo que resume el estado de tu inventario de un vistazo.",
  },
];

const pasos = [
  {
    numero: "01",
    icono: IconPackage,
    titulo: "Crea tu catálogo",
    texto:
      "Registra cada producto con su nombre, descripción, precio e imagen en segundos.",
  },
  {
    numero: "02",
    icono: IconEdit,
    titulo: "Edita y organiza",
    texto:
      "Actualiza precios o detalles y elimina lo que ya no necesitas desde la misma tabla.",
  },
  {
    numero: "03",
    icono: IconLayoutDashboard,
    titulo: "Controla tus resultados",
    texto:
      "Consulta tu inventario en el dashboard y mantén todo bajo control.",
  },
];

const planes = [
  {
    nombre: "Básico",
    precio: "0",
    descripcion: "Para empezar a ordenar tu catálogo sin costo.",
    beneficios: [
      "Hasta 50 productos",
      "Gestión de precios y descripciones",
      "1 usuario",
      "Soporte por correo",
    ],
    destacado: false,
  },
  {
    nombre: "Profesional",
    precio: "49",
    descripcion: "Para negocios que están creciendo cada mes.",
    beneficios: [
      "Productos ilimitados",
      "Panel de métricas",
      "Hasta 5 usuarios",
      "Soporte prioritario",
    ],
    destacado: true,
  },
  {
    nombre: "Empresa",
    precio: "129",
    descripcion: "Para equipos consolidados que necesitan más.",
    beneficios: [
      "Todo lo del plan Profesional",
      "Usuarios ilimitados",
      "Reportes avanzados",
      "Soporte dedicado",
    ],
    destacado: false,
  },
];

export default function HomePage() {
  const [enlaceActivo, setEnlaceActivo] = useState("home");

  const enlaces = [
    { id: "home", to: "/", label: "Principal" },
    { id: "about", to: "/#about", label: "Sobre Nosotros", seccion: "about" },
    { id: "how-it-works", to: "/#how-it-works", label: "Cómo funciona", seccion: "how-it-works" },
    { id: "pricing", to: "/#pricing", label: "Precios", seccion: "pricing" },
  ];

  function seleccionarEnlace(id, seccion) {
    setEnlaceActivo(id);

    if (seccion) {
      document
        .getElementById(seccion)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-900/90 backdrop-blur">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3 sm:px-6 lg:px-8"
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="ProductAdmin, ir al inicio"
            className="order-1 flex items-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <span className="rounded-lg bg-linear-to-br from-purple-600 to-blue-500 p-2">
              <IconPackage size={22} className="text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Product<span className="text-purple-400">Admin</span>
            </span>
          </Link>

          {/* Enlaces */}
          <ul className="order-3 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400 sm:order-2 sm:w-auto">
            {enlaces.map(({ id, to, label, seccion }) => {
              const activo = enlaceActivo === id;

              return (
                <li key={id}>
                  <Link
                    to={to}
                    onClick={() => seleccionarEnlace(id, seccion)}
                    aria-current={activo ? "page" : undefined}
                    className={`transition-colors ${
                      activo ? "font-semibold text-purple-400" : "hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Login */}
          <Link
            to="/login"
            className="order-2 inline-flex items-center justify-center rounded-xl bg-linear-to-r from-purple-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98] sm:order-3"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="relative overflow-hidden bg-gray-950 text-gray-100">
        <section
          aria-labelledby="hero-title"
          className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"
        >
          {/* Halo decorativo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl"
          />

          <div className="relative mx-auto w-full max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
              <IconPackage size={16} stroke={1.8} />
              ERP profesional
            </div>

            <h1
              id="hero-title"
              className="bg-linear-to-br from-purple-500 to-blue-400 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl lg:text-7xl"
            >
              ProductAdmin
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold leading-7 text-white sm:text-xl">
              Gestiona tus productos sin complicaciones
            </p>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              Tu espacio de administración para organizar, editar y controlar
              tus productos de forma sencilla, rápida y segura.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                to="/admin/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98]"
              >
                <IconHome size={20} stroke={1.8} />
                Solicita una Demo
              </Link>

              <Link
                to="/productos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98]"
              >
                <IconPackage size={20} stroke={1.8} />
                Ver precios
              </Link>
            </div>
          </div>
        </section>

        {/* Sobre nosotros */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="scroll-mt-24 border-t border-gray-800 px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div>
                <p className="text-sm font-medium text-purple-400">
                  Sobre nosotros
                </p>

                <h2
                  id="about-title"
                  className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl"
                >
                  Un panel pensado para tu día a día
                </h2>

                <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                  ProductAdmin nació para que administrar un catálogo de
                  productos no sea una tarea pesada. Reunimos en un solo lugar
                  todo lo que necesitas para crear, editar y eliminar productos,
                  con una interfaz clara y sin pasos innecesarios.
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                  Da igual si gestionas un emprendimiento pequeño o un equipo
                  que no para de crecer: el panel se adapta a tu ritmo y te
                  muestra siempre la información que importa.
                </p>

                <Link
                  to="/productos"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98]"
                >
                  <IconPackage size={20} stroke={1.8} />
                  Explorar el catálogo
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {caracteristicas.map(({ icono: Icono, titulo, texto }) => (
                  <article
                    key={titulo}
                    className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-purple-500/30"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                      <Icono size={24} stroke={1.8} />
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-white">
                      {titulo}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {texto}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section
          id="how-it-works"
          aria-labelledby="how-it-works-title"
          className="scroll-mt-24 border-t border-gray-800 px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium text-purple-400">
                Cómo funciona
              </p>

              <h2
                id="how-it-works-title"
                className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                Tu catálogo listo en tres pasos
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
                Sin configuraciones complicadas: empieza a administrar tus
                productos desde el primer minuto.
              </p>
            </div>

            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {pasos.map(({ numero, icono: Icono, titulo, texto }) => (
                <li
                  key={numero}
                  className="relative rounded-2xl border border-gray-800 bg-gray-900 p-6 sm:p-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-6 text-3xl font-black tracking-tight text-gray-800"
                  >
                    {numero}
                  </span>

                  <div className="flex size-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                    <Icono size={24} stroke={1.8} />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-white">
                    {titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {texto}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Precios */}
        <section
          id="pricing"
          aria-labelledby="pricing-title"
          className="scroll-mt-24 border-t border-gray-800 px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium text-purple-400">Precios</p>

              <h2
                id="pricing-title"
                className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                Planes que crecen contigo
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
                Empieza gratis y cambia de plan cuando tu catálogo lo necesite.
                Sin contratos ni sorpresas.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
              {planes.map(({ nombre, precio, descripcion, beneficios, destacado }) => (
                <article
                  key={nombre}
                  className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                    destacado
                      ? "border-purple-500/50 bg-linear-to-b from-purple-600/10 to-gray-900 shadow-xl shadow-purple-950/20"
                      : "border-gray-800 bg-gray-900"
                  }`}
                >
                  {destacado && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-linear-to-r from-purple-600 to-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-purple-950/30">
                      Más popular
                    </span>
                  )}

                  <h3 className="text-lg font-semibold text-white">{nombre}</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {descripcion}
                  </p>

                  <p className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-black tracking-tight text-white">
                      S/ {precio}
                    </span>
                    <span className="text-sm text-gray-500">/mes</span>
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-gray-300">
                    {beneficios.map((beneficio) => (
                      <li key={beneficio} className="flex items-start gap-2">
                        <IconCheck
                          size={18}
                          stroke={2}
                          className="mt-0.5 shrink-0 text-purple-400"
                        />
                        {beneficio}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Link
                      to={destacado ? "/productos" : "/login"}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98] ${
                        destacado
                          ? "bg-linear-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-950/20 hover:from-purple-500 hover:to-blue-400"
                          : "border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      {destacado ? "Comenzar ahora" : "Elegir plan"}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section
          aria-labelledby="cta-title"
          className="px-4 pb-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-purple-500/30 bg-linear-to-br from-purple-600/20 via-gray-900 to-blue-500/20 px-6 py-12 text-center shadow-xl shadow-purple-950/20 sm:px-10 sm:py-16">
            <h2
              id="cta-title"
              className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Empieza a ordenar tu catálogo hoy
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
              Crea tu cuenta gratis y descubre lo simple que puede ser
              administrar tus productos.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98]"
              >
                <IconPackage size={20} stroke={1.8} />
                Crear cuenta gratis
              </Link>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-gray-800/80 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98]"
              >
                Ver planes
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterLanding />
    </>
  );
}
