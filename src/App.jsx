import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import ProductoListaPagina from "./pages/ProductoListaPagina";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/productos" element={<ProductoListaPagina />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/" element={<HomePage />} />   
    </Routes>
  );
}
