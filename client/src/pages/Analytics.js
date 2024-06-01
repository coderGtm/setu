import React from "react";
import UrlAnalytics from "../components/UrlAnalytics";

function Analytics() {
  const isLoggedIn = localStorage.getItem("authToken") ? true : false;
  const { shortId } = useParams();

  return (
    <div>
      <h1>Analytics for {shortId}</h1>
      {isLoggedIn && <UrlAnalytics />}
      {!isLoggedIn && (
        <button onClick={() => (window.location.href = "/login")}>Login</button>
      )}
    </div>
  );
}

export default Analytics;
