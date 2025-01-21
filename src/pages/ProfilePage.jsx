import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../slices/authSlice";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {

  // const refreshToken = localStorage.getItem("refreshToken");
  const currentUser = useSelector((state) => state.auth.currentUser);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const logoutUser = async () => {
  //   try {
  //     await axios.post(
  //       "http://localhost:5000/logout",
  //       { token: refreshToken },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );

  //     localStorage.removeItem("refreshToken");

  //     dispatch(setCurrentUser ({currentUser: null}) );

  //     navigate("/login");
  //   } catch (err) {
  //     console.log("Error logging out: ", err);
  //   }
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 border border-gray-300 rounded-md shadow-md">
        {currentUser ? (
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome, {currentUser.username}!
            </h1>
            <p className="text-gray-600 text-sm">
              You are successfully logged in.
            </p>
            <div className="mt-4 text-sm">
              <Link className="text-blue-500 hover:underline " to="/login">
              <button
                // onClick={logoutUser}
                className="text-blue-500 hover:underline"
              >
                Logout
              </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Please log in to view your profile.
            </h1>
            <p className="text-gray-600 text-sm">
              You need to be logged in to access this page.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
