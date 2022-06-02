import React from "react";
import { useUserContext } from "../context/userContext";

const Home = () => {
  const { user, logOut } = useUserContext();
  console.log("user", user);
  return (
    <div className="ui container center">
      <div className="home-profile">
        <div className="ui message success">
          <h3>You are now logged in as , {user.name}</h3>
          {!user.isGuestUser && (
            <button className="ui button blue" onClick={logOut}>
              LogOut
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
