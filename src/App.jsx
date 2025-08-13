import { Routes, Route } from "react-router-dom";
import Master from "./layouts/Master";
import Products from "./pages/Home";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Feature from "./pages/Feature";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index element={<Products />}></Route>
          <Route path="detail/:id" element={<Detail />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/features" element={<Feature />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
