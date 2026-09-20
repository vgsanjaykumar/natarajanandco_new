import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";

// Home ships in the main bundle (first paint); every other route is its own chunk.
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));
const ProductDetails = lazy(() => import("./pages/ProductDetails.jsx"));
const CategoryDetails = lazy(() => import("./pages/CategoryDetails.jsx"));
const Brands = lazy(() => import("./pages/Brands.jsx"));
const BrandDetails = lazy(() => import("./pages/BrandDetails.jsx"));
const Dealership = lazy(() => import("./pages/Dealership.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productSlug" element={<ProductDetails />} />
          <Route path="/categories/:categorySlug" element={<CategoryDetails />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:brandSlug" element={<BrandDetails />} />
          <Route path="/dealership" element={<Dealership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
