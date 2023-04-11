import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import SideFilter from "../components/SideFilter";
import { fetchCompany, fetchJobs } from "../store/action";
import MyNavbar from "../components/MyNavbar";
import TopFilter from "../components/TopFilter";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import CompanyCard from '../components/CompanyCard';

function Companies() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const jobs = useSelector((state) => {
    return state.jobReducer.jobs;
  });
  const companies = useSelector((state) => {
    return state.companyReducer.companies;
  });

  useEffect(() => {
    dispatch(fetchCompany());
    // console.log(jobs);
  }, [])

  return (
    <div className="min-h-screen">
      <MyNavbar />
      <div className="flex w-full flex-wrap justify-center mt-6">
        {companies.map(el => {
            return <CompanyCard company={el}/>
        })}
      </div>
        <Footer />
    </div>
  );
}

export default Companies;
