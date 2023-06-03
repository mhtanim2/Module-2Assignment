import React, { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader";
import { getToken } from "./helper/SessionHelper";
import DashboardPage from "./pages/Dashboard-Page";
import LoginPage from "./pages/Login-Page";
import Page404 from "./pages/Page-404";
import ProfilePage from "./pages/Profile-Page";
import RegistrationPage from "./pages/Registration-Page";
const App = () => {
  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Navigate to="/" replace />} />
            
            <Route exact path="/" element={<DashboardPage />} />
            <Route exact path="/Profile" element={<ProfilePage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader />
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Registration" element={<RegistrationPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader />
      </Fragment>
    )
  }

}

export default App