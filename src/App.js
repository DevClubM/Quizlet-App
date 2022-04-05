import NavbarReact from "./components/NavbarReact";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";

function App() {

  const projects = [
    {id: 1, name: "First Project", description: "Some random description here", size: 10},
    {id: 2, name: "Second Project", description: "Some random description here", size: 13},
    {id: 3, name: "Third Project", description: "Some random description here", size: 12},
    {id: 4, name: "Fourth Project", description: "Some random description here", size: 50},
    {id: 5, name: "Fifth Project", description: "Some random description here", size: 6},
  ];
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarReact />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects projects={projects}/>} />
          <Route path="projects/:id" element={<ProjectPage projects={projects}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
