import React from "react";
import Main from "../components/layout/Main";
import DashboardContent from "../components/DashboardContent";

function Dashboard() {
  const isLoggedIn = localStorage.getItem("authToken") ? true : false;

  return (
    <Main>
      {isLoggedIn && <DashboardContent />}
      {!isLoggedIn && (
        <button onClick={() => (window.location.href = "/login")}>Login</button>
      )}
    </Main>
  );
}

export default Dashboard;
