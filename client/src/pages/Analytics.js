import React from "react";
import { useParams } from "react-router-dom";
import Main from "../components/layout/Main";
import UrlAnalytics from "../components/UrlAnalytics";
import CustomQRCode from "../components/QRCode";

function Analytics() {
  const isLoggedIn = localStorage.getItem("authToken") ? true : false;
  const { shortId } = useParams();
  const url = `${window.location.origin}/${shortId}`;

  return (
    <Main>
      {isLoggedIn && <h1>Analytics for {shortId} <CustomQRCode url={url} /></h1>}
      {isLoggedIn && <UrlAnalytics />}
      {!isLoggedIn && (
        <button onClick={() => (window.location.href = "/login")}>Login</button>
      )}
    </Main>
  );
}

export default Analytics;
