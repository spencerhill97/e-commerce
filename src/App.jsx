import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
