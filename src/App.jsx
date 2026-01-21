import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Page from "./pages/Page";

function App() {
  return (
    <nav className="flex">
      <Sidebar />
      <main className="flex-1 p-10 bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/page/:id" element={<Page />} />
        </Routes>
      </main>
    </nav>
  );
}

export default App;
