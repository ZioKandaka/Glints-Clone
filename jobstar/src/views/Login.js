import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/actionCreator";
import Swal from 'sweetalert2';

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault();
    console.log(user.email, user.password, "()()()")
    dispatch(
      login({
        email: user.email,
        password: user.password,
      })
    )
    .then((res) => {
      navigate("/")
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Success Login`,
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch((err) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `${err.message}`,
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  return (
    <div class="bg-pink-700 h-screen w-screen">
      <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
          style={{ height: "500px" }}
        >
          <div class="flex flex-col w-full md:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="text-4xl text-center font-thin">Welcome Back</h1>
              <div class="w-full mt-4">
                <form class="form-horizontal w-3/4 mx-auto" onSubmit={submit}>
                  <div class="flex flex-col mt-4">
                    <input
                      id="email"
                      type="text"
                      class="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="email"
                      value={user.email}
                      onChange={(e) => {
                        setUser({
                          ...user,
                          email: e.target.value,
                        });
                      }}
                      placeholder="Email"
                    />
                  </div>
                  <div class="flex flex-col mt-4">
                    <input
                      id="password"
                      type="password"
                      class="flex-grow h-8 px-2 rounded border border-grey-400"
                      name={user.password}
                      onChange={(e) => {
                        setUser({
                          ...user,
                          password: e.target.value,
                        });
                      }}
                      required
                      placeholder="Password"
                    />
                  </div>
                  <div class="flex items-center mt-4">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      class="mr-2"
                    />{" "}
                    <label for="remember" class="text-sm text-grey-dark">
                      Remember Me
                    </label>
                  </div>
                  <div class="flex flex-col mt-8">
                    <button
                      type="submit"
                      class="bg-pink-800 hover:bg-pink-900 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div class="text-center mt-4">
                  <a
                    class="no-underline hover:underline text-blue-dark text-xs"
                    href="{{ route('password.request') }}"
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block md:w-1/2 rounded-r-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
