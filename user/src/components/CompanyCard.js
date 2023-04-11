import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompany } from "../store/action";

function CompanyCard({ company }) {
  return (
    <div className="h-52 w-80 m-2">
      <div className="w-full h-full rounded-sm  border-solid border-2 border-slate-300 shadow-md shadow-orange-200">
        <div className="flex">
          <img className="w-14 h-14 m-2 ml-3" src={company.companyLogo} />
          <div className="mt-2">
            <p className="text-lg font-semibold">{company.name}</p>
            <p className="text-cyan-600 text-left">{company.location}</p>
          </div>
        </div>

        <div className="ml-3 gap-10 mt-10">
          <div className="flex items-center h-6 gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/40/40127.png"
              className="w-5"
            />
            <p>
              {company.Jobs.length} lowongan
            </p>
          </div>
        </div>

        <div className="flex justify-start ml-3 ">
          <p>Diperbarui {company.updatedDate}</p>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
