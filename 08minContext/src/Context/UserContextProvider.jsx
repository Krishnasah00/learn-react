import React from "react";

import UserContect from "./UserContext";

const UserContectProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContect.Provider value={{ user, setUser }}>
      {children}
    </UserContect.Provider>
  );
};

export default UserContectProvider;
