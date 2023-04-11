import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import SideFilter from "../components/SideFilter";
import { fetchCompany, fetchJobs } from "../store/action";
import MyNavbar from "../components/MyNavbar";
import TopFilter from "../components/TopFilter";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const jobs = useSelector((state) => {
    return state.jobReducer.jobs;
  });
  const companies = useSelector((state) => {
    return state.companyReducer.company;
  });

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchCompany());
  }, []);
  console.log(jobs);

  function redirectJob(job) {
    navigate(`/job/${job.id}`, { state: { job: job } });
  }

  return (
    <div>
      <MyNavbar />
      <TopFilter />
      <div className="flex w-full">
        <SideFilter />
        <div>
          <div className="flex flex-wrap justify-center mt-8">
            {jobs.map((el) => {
              return (
                <button
                  onClick={() => redirectJob(el)}
                >
                  <JobCard key={el.id} job={el} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default App;
