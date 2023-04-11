import React from "react"
import JobForm from '../components/JobForm';
import SideFilter from "../components/SideFilter";
import {postJob} from '../store/actions/actionCreator';

import '../App.css';
function AddJob() {
  return (
    <div className="bg-pink-100 flex">
        <SideFilter />
        <JobForm submitFunction={postJob}/>
    </div>
  );
}

export default AddJob;
