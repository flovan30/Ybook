import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import EncyclopediaPage from "./pages/EncyclopediaPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/encyclopedie" element={<EncyclopediaPage />} />

        {/* page d'érreur */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
