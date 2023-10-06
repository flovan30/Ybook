import { Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage";
import EncyclopediaPage from "./pages/EncyclopediaPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Auth0Provider
        domain="ybook.eu.auth0.com"
        clientId="U3diSH1LV5beZxcrWRyjuzsLFd9fu8So"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-set" element={<EditPage />} />

          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/encyclopedie" element={<EncyclopediaPage />} />

          {/* page d'érreur */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Auth0Provider>
    </>
  );
}

export default App;
