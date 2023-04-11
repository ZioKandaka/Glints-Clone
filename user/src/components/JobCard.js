import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompany } from "../store/action";

function JobCard({ job }) {
  return (
    <div className="h-52 w-80 m-2">
      <div className="w-full h-full rounded-sm  border-solid border-2 border-slate-300 shadow-md shadow-orange-200">
        <div className="flex">
          <img className="w-14 h-14 m-2 ml-3" src={job.Company.companyLogo} />
          <div className="mt-2">
            <p className="text-lg font-semibold">{job.title}</p>
            <p className="text-cyan-600 text-left">{job.Company.name}</p>
          </div>
        </div>

        <div className="ml-3 gap-10">
          <div className="flex items-center h-6 gap-2 mb-1">
            <img
              src="https://www.iconpacks.net/icons/2/free-location-icon-2950-thumb.png"
              className="w-5"
            />
            <p>{job.Company.location}</p>
          </div>
          <div className="flex items-center h-6 gap-2 mb-1">
            <img
              src="https://www.freeiconspng.com/thumbs/dollar-icon-png/dollar-black-circle-icon-28.png"
              className="w-5"
            />
            <p>
              IDR {job.minimumSalaryFormatted} - {job.maximumSalaryFormatted}
            </p>
          </div>
          <div className="flex items-center h-6 gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/40/40127.png"
              className="w-5"
            />
            <p>
              {job.minimumExperience} - {job.maximumExperience} tahun
            </p>
          </div>
        </div>

        <div className="flex justify-start m-3">
          <p>Diperbarui {job.updatedDate}</p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
