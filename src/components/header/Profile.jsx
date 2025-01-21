import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <Link to="/profile">
        <span className="material-icons">account_circle</span>
      </Link>
    </div>
  );
};

export default Profile;
