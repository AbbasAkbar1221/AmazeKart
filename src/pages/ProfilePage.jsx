import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../slices/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      const response = await axios.post("http://localhost:5000/logout", {
        token: refreshToken,
      });

      console.log("Logout response:", response.data);

      localStorage.removeItem("refreshToken");
      localStorage.removeItem("token");
      dispatch(setCurrentUser(null));
      navigate("/login");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <div className="w-full max-w-4xl bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        {currentUser ? (
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
              Welcome, {currentUser.username}!
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Manage your account and explore the store.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900">Home</h3>
                <p className="text-gray-700 mt-2">
                  Explore our vast collection of products and offers.
                </p>
                <Link
                  to="/"
                  className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
                >
                  Go to Home
                </Link>
              </div>

              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900">
                  Your Cart
                </h3>
                <p className="text-gray-700 mt-2">
                  View the items you've added to your cart.
                </p>
                <Link
                  to="/cart"
                  className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
                >
                  View Cart
                </Link>
              </div>

              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900">
                  Products
                </h3>
                <p className="text-gray-700 mt-2">
                  Browse our wide range of products and discover amazing deals.
                </p>
                <Link
                  to="/products"
                  className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
                >
                  View Products
                </Link>
              </div>
            </div>

            <button
              onClick={logoutUser}
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
              Please log in to view your profile.
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              You need to be logged in to access this page.
            </p>

            <div className="flex flex-col gap-4">
              <Link to="/">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  Home
                </button>
              </Link>
              <Link to="/login">
                <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
