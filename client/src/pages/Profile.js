import React from "react";
import Main from "../components/layout/Main";
import ProfileContent from "../components/ProfileContent";

function Profile() {
  const isLoggedIn = localStorage.getItem("authToken") ? true : false;
  if (!isLoggedIn) {
    window.location.href = "/login";
  }

  return (
    <Main>
      {isLoggedIn && <ProfileContent />}
      {!isLoggedIn && (
        <button onClick={() => (window.location.href = "/login")}>Login</button>
      )}
    </Main>
  );
}

export default Profile;
