import React, { useEffect, useState } from "react";
import JobRow from "../components/JobRow";
import SideFilter from "../components/SideFilter";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../store/actions/actionCreator";

import "../App.css";

function Home() {
  const [filterKey, setFilterKey] = useState("");

  let jobs = useSelector((state) => {
    return state.jobReducer.jobs
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <div className="flex min-h-screen">
      <SideFilter />
      <div className="bg-pink-100 w-full">
        <div className="w-full">
          <div className="">
            <div className="form-control ">
              <div className="input-group flex justify-between">
                <div className="text-4xl ml-10 m-6">Manage Our Vacancy</div>

                <div className="form-control m-6">
                  <div className="input-group">
                    <NavLink to="/addJob" className=" btn">
                      Add Job
                    </NavLink>
                    <input
                      type="text"
                      placeholder="Search…"
                      className="input input-bordered"
                      value={filterKey}
                      onChange={(e) => {
                        setFilterKey(e.target.value);
                      }}
                    />
                    <button
                      className="btn btn-square"
                      onClick={() => {
                        dispatch(fetchJobs(filterKey));
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scale-95">
          <div className="w-full">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead className="">
                  <tr>
                    <th className="text-center bg-pink-500">No.</th>
                    <th className="text-center bg-pink-500">Vacancy</th>
                    <th className="text-center bg-pink-500">Company</th>
                    <th className="text-center bg-pink-500">Salary</th>
                    <th className="text-center bg-pink-500">Skills</th>
                    <th className="text-center bg-pink-500">Created By</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                {jobs?.map((el, i) => {
                  return <JobRow key={el.id} job={el} i={i + 1} />;
                })}
                <tfoot></tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
