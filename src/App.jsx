import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import ProductoListaPagina from "./pages/ProductoListaPagina";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductoListaPagina />} />
      </Route>   
    </Routes>
  );
}
