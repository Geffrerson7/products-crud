
import { useEffect } from "react";
import ProductoForm from "./ProductoForm";

export default function ProductoModal({
  abierto,
  producto,
  onGuardar,
  onCerrar,
  guardando,
}) {
  useEffect(() => {
    if (!abierto) return;

    function manejarTecla(event) {
      if (event.key === "Escape" && !guardando) {
        onCerrar();
      }
    }

    window.addEventListener("keydown", manejarTecla);

    return () => {
      window.removeEventListener("keydown", manejarTecla);
    };
  }, [abierto, guardando, onCerrar]);

  if (!abierto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-3 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !guardando) {
          onCerrar();
        }
      }}
    >
      <div className="w-full max-w-md rounded-xl">
        <ProductoForm
          key={producto?.id ?? "nuevo"}
          productoEditando={producto}
          onGuardar={onGuardar}
          onCancelar={onCerrar}
          guardando={guardando}
        />
      </div>
    </div>
  );
}
