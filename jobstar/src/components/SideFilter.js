import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
function Sidebar() {
  const navigate = useNavigate();
  function logout() {
    Swal.fire({
      title: "Do you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/login");
      } 
    });
  }

  return (
    <div className="bg-pink-700">
      <div className=" bg-pink-700">
        <div className="flex justify-center mt-5">
          <img
            className="w-48 h-48"
            src="https://cdn-icons-png.flaticon.com/512/1694/1694787.png"
          />
        </div>
        <div className="">
          <ul className="menu p-4 w-64  bg-pink-700">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink
                to="/"
                className="bg-white mb-2 text-black active:bg-black "
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/companies"
                className="bg-white mb-2  text-black active:bg-black"
              >
                Companies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registerAdmin"
                className="bg-white mb-2 text-black active:bg-black"
              >
                Register Admin
              </NavLink>
            </li>
            <li>
              <button
                onClick={logout}
                className="bg-white mb-2 active:bg-black"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
