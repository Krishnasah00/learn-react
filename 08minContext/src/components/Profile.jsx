import React, { useContext } from "react";
import UserContect from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContect);

  if (!user) return <div>Please Login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
