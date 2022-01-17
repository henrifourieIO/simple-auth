import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <div>
          <img
            src={user.picture ? user.picture : null}
            alt={user.name ? user.name : null}
          />
          <h2>{user.name}</h2>
          <p>{user.sub}</p>
          {/* <p>{JSON.stringify(user, null, 2)}</p> */}
        </div>
      ) : null}
    </>
  );
};

export default Profile;
