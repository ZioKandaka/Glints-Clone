import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function myNavbar() {
  return (
    <div>
      <div className="flex justify-between items-center w-screen h-20 border-b-2 border-slate-300">
        <div className="flex h-full items-center justify-around w-1/3 ml-20 text-xs font-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/df/GLINTS_LOGO293.png"
            className="w-16"
          />
          <NavLink to="/">LOWONGAN KERJA</NavLink>
          <NavLink to="/companies">PERUSAHAAN</NavLink>
          <button>BLOG</button>
          <button>EXPERTCLASS</button>
        </div>
        <div className="flex h-full items-center justify-around w-1/4 mr-20 text-xs font-bold">
          <div className="dropdown bg-white">
            <label tabIndex={0} className="btn m-1 bg-white text-black border-none hover:bg-white">
              ID
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>ENGLISH</a>
              </li>
              <li>
                <a>INDONESIAN</a>
              </li>
            </ul>
          </div>
          <button>DAFTAR</button>
          <button>MASUK</button>
          <button className="bg-cyan-600 text-white h-8 w-40 flex justify-center items-center">
            UNTUK PERUSAHAAN
          </button>
        </div>
      </div>
    </div>
  );
}

export default myNavbar;
