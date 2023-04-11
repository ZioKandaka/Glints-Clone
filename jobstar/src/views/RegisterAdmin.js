import React, { useState } from "react";
import SideFilter from "../components/SideFilter";
import { useDispatch } from "react-redux";

import "../App.css";
import { registerAdmin } from "../store/actions/actionCreator";
import Swal from "sweetalert2";

function Home() {
  let dispatch = useDispatch();
  const [account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    role: "admin",
  });

  function register(e) {
    e.preventDefault();
    dispatch(registerAdmin(account))
      .then((res) => {
        setAccount({
          username: "",
          email: "",
          password: "",
          phoneNumber: "",
          address: "",
          role: "admin",
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${res.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1000,
        });
      });
  }

  return (
    <div className="flex min-h-screen">
      <SideFilter />
      <div className="bg-pink-100 w-full">
        <div className="text-4xl ml-10 m-6">Create New Admin Account</div>

        <div className="h-2/3 mt-20 bg-pink-100">
          <div className="w-3/4 h-full mx-auto my-12 bg-white p-10">
            <form className="flex flex-col mt-4" onSubmit={register}>
              <input
                type="text"
                name="username"
                className="px-4 py-3 w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Username"
                value={account.username}
                onChange={({ target }) => {
                  setAccount({ ...account, username: target.value });
                }}
              />
              <input
                type="email"
                name="email"
                className="px-4 py-3 mt-4 w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Email address"
                value={account.email}
                onChange={({ target }) => {
                  setAccount({ ...account, email: target.value });
                }}
              />
              <input
                type="password"
                name="password"
                className="px-4 py-3 mt-4 w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Password"
                value={account.password}
                onChange={({ target }) => {
                  setAccount({ ...account, password: target.value });
                }}
              />
              <input
                type="text"
                name="phone-number"
                className="px-4 py-3 mt-4 w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Phone Number"
                value={account.phoneNumber}
                onChange={({ target }) => {
                  setAccount({ ...account, phoneNumber: target.value });
                }}
              />
              <input
                type="text"
                name="address"
                className="px-4 py-3 mt-4 w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Address"
                value={account.address}
                onChange={({ target }) => {
                  setAccount({ ...account, address: target.value });
                }}
              />
              <button
                type="submit"
                className="mt-10 px-4 py-3  leading-6 text-base rounded-md border border-transparent bg-pink-500 text-pink-100 hover:text-white focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center font-medium focus:outline-none"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
