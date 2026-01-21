import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkBase =
    "block px-4 py-2 rounded-lg font-medium transition-colors";

  return (
    <aside className="w-60 h-screen bg-white shadow-lg p-6 flex flex-col gap-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkBase} ${isActive
            ? "bg-purple-600 text-white"
            : "text-gray-700 hover:bg-purple-100"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${linkBase} ${isActive
            ? "bg-purple-600 text-white"
            : "text-gray-700 hover:bg-purple-100"
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/page/1"
        className={({ isActive }) =>
          `${linkBase} ${isActive
            ? "bg-purple-600 text-white"
            : "text-gray-700 hover:bg-purple-100"
          }`
        }
      >
        Example Page
      </NavLink>

      <NavLink
        to="/page/2"
        className={({ isActive }) =>
          `${linkBase} ${isActive
            ? "bg-purple-600 text-white"
            : "text-gray-700 hover:bg-purple-100"
          }`
        }
      >
        Example Page
      </NavLink>
    </aside>
  );
}

export default Sidebar;
