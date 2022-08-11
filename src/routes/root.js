import React from "react";
import HomePage from "../pages/home.page";
import { RoomSignUp } from "../pages/roomSignUp.page";
import { RoomManager } from "../pages/roomManager.page";
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
