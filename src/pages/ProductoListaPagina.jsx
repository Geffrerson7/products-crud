import ProductoLista from "../components/ProductoLista";
import { useState, useEffect } from "react";
import {
  obtenerProductos,
  obtenerTotalProductos,
  crearProducto,
  eliminarProducto,
  actualizarProducto,
} from "../api/productos";
import ProductoModal from "../components/ProductoModal";
import { toast } from "sonner";
import Spinner from "../components/Spinner";
import EliminarProductoModal from "../components/EliminarProductoModal";

export default function ProductoListaPagina() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorAccion, setErrorAccion] = useState(null);
  const [guardando, setGuardando] = useState(false);
  const [version, setVersion] = useState(0);
  const [editando, setEditando] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);
  const [eliminando, setEliminando] = useState(false);
  const [totalProductos, setTotalProductos] = useState(0);
  const LIMITE = 10;

  const [pagina, setPagina] = useState(1);
  const totalPaginas = Math.ceil(totalProductos / LIMITE);

  useEffect(() => {
    const controlador = new AbortController();

    async function cargar() {
      try {
        setError(null);

        const [resultado, total] = await Promise.all([
          obtenerProductos(controlador.signal, pagina, LIMITE),
          obtenerTotalProductos(controlador.signal),
        ]);

        setProductos(resultado);
        setTotalProductos(total);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError("Ocurrió un error al obtener los productos.");
        }
      } finally {
        if (!controlador.signal.aborted) {
          setLoading(false);
        }
      }
    }

    cargar();

    return () => controlador.abort();
  }, [version, pagina]);

  // Devuelve true si se guardó bien, false si falló
  async function guardarProducto(datos) {
    try {
      setGuardando(true);
      setErrorAccion(null);

      if (editando) {
        await actualizarProducto(editando.id, datos);
        toast.success("Producto actualizado correctamente.");
      } else {
        await crearProducto(datos);
        toast.success("Producto creado correctamente.");
      }

      setModalAbierto(false);
      setEditando(null);
      setVersion((v) => v + 1);
      return true;
    } catch (err) {
      console.error(err);
      if (editando) {
        setErrorAccion("No se pudo editar el producto.");
        toast.error(errorAccion);
      } else {
        setErrorAccion("No se pudo guardar el producto.");
        toast.error(errorAccion);
      }

      return false;
    } finally {
      setGuardando(false);
    }
  }

  async function confirmarEliminar() {
    if (!productoAEliminar || eliminando) return;

    try {
      setEliminando(true);

      await eliminarProducto(productoAEliminar.id);

      toast.success("Producto eliminado correctamente.");
      setProductoAEliminar(null);
      setVersion((v) => v + 1);
    } catch (err) {
      console.error(err);
      toast.error("No se pudo eliminar el producto.");
    } finally {
      setEliminando(false);
    }
  }

  function abrirCrear() {
    setEditando(null);
    setModalAbierto(true);
  }

  function abrirEditar(producto) {
    setEditando(producto);
    setModalAbierto(true);
  }

  function cerrarModal() {
    if (guardando) return;

    setModalAbierto(false);
    setEditando(null);
  }

  function solicitarEliminar(id) {
    const producto = productos.find((p) => p.id === id);

    if (producto) {
      setProductoAEliminar(producto);
    }
  }

  return (
    <>
      {loading && (
        <div
          className="flex min-h-48 flex-col items-center justify-center gap-3"
          role="status"
        >
          <Spinner size={32} className="text-purple-400" />
          <p className="text-sm text-gray-400">Cargando productos...</p>
        </div>
      )}

      {error && (
        <p role="alert" className="text-red-400">
          {error}
        </p>
      )}

      {!loading && !error && (
        <ProductoLista
          productos={productos}
          onCrear={abrirCrear}
          onEditar={abrirEditar}
          onEliminar={solicitarEliminar}
          pagina={pagina}
          onCambiarPagina={setPagina}
          totalPaginas={totalPaginas}
        />
      )}

      <ProductoModal
        abierto={modalAbierto}
        producto={editando}
        onGuardar={guardarProducto}
        onCerrar={cerrarModal}
        guardando={guardando}
      />

      <EliminarProductoModal
        producto={productoAEliminar}
        abierto={productoAEliminar !== null}
        eliminando={eliminando}
        onConfirmar={confirmarEliminar}
        onCerrar={() => {
          if (!eliminando) {
            setProductoAEliminar(null);
          }
        }}
      />
    </>
  );
}
