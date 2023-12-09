import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Learn from "./pages/Learn";
import Reference from "./pages/Reference";
import Community from "./pages/Community";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="" element={<>Welcome</>} />
          <Route path="learn" element={<Learn />} />
          <Route path="reference" element={<Reference />} />
          <Route path="community" element={<Community />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
