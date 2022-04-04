import NavbarReact from "./components/NavbarReact";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Unattempted from "./components/Unattempted";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarReact />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />}/>
          <Route path="user" element={<User />}/>
          <Route path="unattempted" element={<Unattempted />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
