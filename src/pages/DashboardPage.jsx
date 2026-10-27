
import { IconPackage } from "@tabler/icons-react";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <p className="text-sm font-medium text-purple-400">
          Principal
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Bienvenido a ProductAdmin
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Gestiona los productos y revisa la información de tu negocio.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 sm:p-8">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <div className="rounded-xl bg-linear-to-br from-purple-600 to-blue-500 p-4">
            <IconPackage size={48} className="text-white" />
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">
              Product
              <span className="text-purple-400">Admin</span>
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
              Tu espacio de administración para organizar y gestionar
              tus productos de manera sencilla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
