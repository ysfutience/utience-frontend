import { DataContext } from ".";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Profile from "./githubPages/Profile";
import Home from "./githubPages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
