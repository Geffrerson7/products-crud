import { useState } from "react";
import { IconUser, IconTag, IconPhoto } from "@tabler/icons-react";
import Spinner from "./Spinner";

const FORM_VACIO = { nombre: "", precio: "", descripcion: "", imagen: "" };

// Convierte un producto de la API en valores para los inputs
function desdeProducto(p) {
  return {
    nombre: p.nombre ?? "",
    precio: String(p.precio ?? ""), // los inputs trabajan con texto
    descripcion: p.descripcion ?? "",
    imagen: p.imagen ?? "",
  };
}

export default function ProductoForm({
  productoEditando,
  onGuardar,
  onCancelar,
  guardando,
}) {
  const [form, setForm] = useState(
    productoEditando ? desdeProducto(productoEditando) : FORM_VACIO,
  );
  const formularioValido =
    form.nombre.trim() !== "" &&
    form.precio.trim() !== "" &&
    Number.isFinite(Number(form.precio)) &&
    Number(form.precio) >= 0 &&
    form.descripcion.trim() !=="" &&
    form.imagen.trim() !=="";

  // Un solo handler para todos los inputs, usando el atributo "name"
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault(); // ← evita que el navegador recargue la página

    const datos = {
      nombre: form.nombre.trim(),
      precio: Number(form.precio), // ← el input da texto; la API espera número
      descripcion: form.descripcion.trim(),
      imagen: form.imagen.trim(),
    };

    const ok = await onGuardar(datos);
    if (ok && !productoEditando) setForm(FORM_VACIO); // ← limpiamos solo si se guardó bien
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto rounded-xl border border-gray-700 bg-gray-900 p-6 shadow-xl space-y-2"
    >
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-5">
        {productoEditando ? "Editar producto" : "Nuevo producto"}
      </h2>

      <label
        htmlFor="nombre"
        className="block mb-2 text-sm font-medium text-gray-200"
      >
        Nombre
      </label>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-400 pointer-events-none">
          <IconUser stroke={2} />
        </div>
        <input
          id="nombre"
          name="nombre"
          placeholder="Juan Perez"
          value={form.nombre}
          onChange={handleChange}
          required
          className="block w-full rounded-md border border-gray-700 bg-gray-800 py-2.5 pl-10 pr-3 text-sm text-gray-100 placeholder-gray-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
        />
      </div>

      <label
        htmlFor="precio"
        className="block mb-2 text-sm font-medium text-gray-200"
      >
        Precio
      </label>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-400 pointer-events-none">
          <IconTag stroke={2} />
        </div>
        <input
          id="precio"
          name="precio"
          type="number"
          min="0"
          step="0.01"
          placeholder="Precio"
          value={form.precio}
          onChange={handleChange}
          required
          className="block w-full rounded-md border border-gray-700 bg-gray-800 py-2.5 pl-10 pr-3 text-sm text-gray-100 placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      <label
        htmlFor="descripcion"
        className="block mb-2 text-sm font-medium text-gray-200"
      >
        Descripción
      </label>
      <textarea
        id="descripcion"
        name="descripcion"
        rows="4"
        placeholder="Descripción del producto..."
        value={form.descripcion}
        onChange={handleChange}
        required
        className="mb-4 block w-full resize-y rounded-md border border-gray-700 bg-gray-800 p-3.5 text-sm text-gray-100 placeholder-gray-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
      />

      <label
        htmlFor="imagen"
        className="block mb-2 text-sm font-medium text-gray-200"
      >
        URL de la imagen
      </label>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-400 pointer-events-none">
          <IconPhoto stroke={2} />
        </div>
        <input
          id="imagen"
          name="imagen"
          type="url"
          placeholder="https://..."
          value={form.imagen}
          onChange={handleChange}
          required
          className="block w-full rounded-md border border-gray-700 bg-gray-800 py-2.5 pl-10 pr-3 text-sm text-gray-100 placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-purple-500/30"
        />
      </div>

      <button
        type="submit"
        disabled={ !formularioValido || guardando}
        className="mt-3 w-full rounded-md bg-linear-to-br from-purple-600 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition duration-200 hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {guardando && <Spinner size={18} />}
        {guardando
          ? "Guardando..."
          : productoEditando
            ? "Guardar cambios"
            : "Guardar producto"}
      </button>

      {productoEditando && (
        <button
          onClick={onCancelar}
          type="button"
          className="mt-2 w-full rounded-md bg-linear-to-br from-red-500 to-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-950/30 transition duration-200 hover:from-red-400 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Cancelar edición
        </button>
      )}
    </form>
  );
}
