import React, { useEffect } from "react"
import JobForm from '../components/JobForm';
import SideFilter from "../components/SideFilter";
import { useLocation} from 'react-router-dom';
import {patchJob} from '../store/actions/actionCreator';

import '../App.css';
function EditJob() {
  const location = useLocation();
  const jobData = location.state.data;
//   console.log(jobData)

  useEffect(() => {
    // console.log(id, jobData, "INI AAAA")
  }, []);

  return (
    <div className="bg-pink-100 flex">
        <SideFilter />
        <JobForm editData={jobData} submitFunction={patchJob}/>
    </div>
  );
}

export default EditJob;
