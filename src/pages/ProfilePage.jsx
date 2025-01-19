import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

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
              <Link className="text-blue-500 hover:underline" to="/login">
                Logout
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
