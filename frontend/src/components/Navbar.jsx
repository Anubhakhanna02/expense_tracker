import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-md flex justify-between items-center px-8 py-4 text-white">
      <h2 className="text-2xl font-bold">💰 Expense Tracker</h2>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="font-medium">Welcome, {user.name}</span>
          <button
            onClick={logout}
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition-all"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-6">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
