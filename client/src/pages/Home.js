import React from "react";
import Main from "../components/layout/Main";
import UrlForm from "../components/UrlForm";

function Home() {
  const isLoggedIn = localStorage.getItem("authToken") ? true : false;

  return (
    <Main>
      {isLoggedIn && <UrlForm />}
      {!isLoggedIn && (
        <button onClick={() => (window.location.href = "/login")}>Login</button>
      )}
    </Main>
  );
}

export default Home;
