import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../store/action";

function TopFilter() {
  const jobs = useSelector((state) => {
    return state.jobReducer.jobs;
  });

  const [filterKey, setFilterKey] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs(filterKey));
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-between items-center w-screen h-20 mt-2">
        <div className="flex h-full items-center w-full ml-44 text-xs font-bold">
          <input
            type="text"
            placeholder="Cari lowongan"
            className="w-2/5 h-10 bg-blue-100 rounded-md pl-10 text-lg font-normal mr-5"
            value={filterKey}
            onChange={(e) => {
              setFilterKey(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Tambahkan negara atau kota"
            className="w-2/6 h-10 bg-blue-100 rounded-md pl-10 text-lg font-normal mr-5"
          />
          <button
            className="btn btn-xs h-10 w-48"
            onClick={() => {
              dispatch(fetchJobs(filterKey));
            }}
          >
            Cari
          </button>
        </div>
      </div>

      <div className="ml-24 text-xl font-semibold -mb-6">
        <h1>{jobs.length} Info Lowongan Kerja Tersedia</h1>
      </div>
    </div>
  );
}

export default TopFilter;
