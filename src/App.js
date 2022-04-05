import NavbarReact from "./components/NavbarReact";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Clients from "./components/Clients";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarReact />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="Clients" element={<Clients />} />          
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
