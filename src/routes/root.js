import React, { useEffect } from "react";
import HomePage from "../pages/home.page";
import { RoomSignUp } from "../pages/roomSignUp.page";
import { RoomManager } from "../pages/roomManager.page";
import { AccountSettings } from "../pages/accountSetting.page";
import SearchResultPage from "../pages/searchResult.page";
import RoomViewPage from "../pages/roomView.page";
import RentalViewPage from "../pages/rentalView.page";
import FavoritePage from "../pages/favorite.page";
import { RentalManagement } from "../pages/rentalManagement.page";
import { AdminPage } from "../admin/admin.page";
import { Wrapper } from "../scrollToTop";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Root() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roommanager" element={<RoomManager />} />
          <Route path="/rentalmanagement" element={<RentalManagement />} />
          <Route path="/roomsignup" element={<RoomSignUp />} />
          <Route path="onlyadmincanseethis" element={<AdminPage />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default Root;
