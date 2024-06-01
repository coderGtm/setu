import React from "react";
import DashboardContent from "../components/DashboardContent";

function Dashboard() {
  const isLoggedIn = localStorage.getItem("authToken") ? true : false;
  const { shortId } = useParams();

  return (
    <div>
      <h1>Analytics for {shortId}</h1>
      {isLoggedIn && <DashboardContent />}
      {!isLoggedIn && (
        <button onClick={() => (window.location.href = "/login")}>Login</button>
      )}
    </div>
  );
}

export default Dashboard;
