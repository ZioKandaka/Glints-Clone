import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import SideFilter from "../components/SideFilter";
import { fetchCompany, fetchJobs } from "../store/action";
import MyNavbar from "../components/MyNavbar";
import TopFilter from "../components/TopFilter";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import TunjanganCard from "../components/TunjanganCard";
import Footer from "../components/Footer";

function JobDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const jobData = location.state.job;
  const jobs = useSelector((state) => {
    return state.jobReducer.jobs;
  });
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  let otherJobs = jobs.slice(0, 3);
  function redirectJob(job) {
    navigate(`/job/${job.id}`, { state: { job: job } });
  }

  //   console.log(jobs, otherJobs, "INIJOB");
  return (
    <div>
      <MyNavbar />
      <div className="min-h-screen flex mt-10">
        {/* kiri */}
        <div className="w-3/5 bg-white ml-20 ">
          {/* preview */}
          <div className="flex border-b-2 border-slate-200 text-lg">
            <div>
              <img src={jobData.Company.companyLogo} className="w-20" />
            </div>

            <div className="ml-5 mt-3">
              <div>
                <div className="text-xl font-semibold mb-2">
                  <p>{jobData.title}</p>
                </div>
                <div className="text-cyan-600">
                  <p>{jobData.Company.name}</p>
                </div>
              </div>

              {/*  */}
              <div className="mt-5">
                <div className="flex items-center h-6 gap-2 mb-2">
                  <img
                    src="https://www.freeiconspng.com/thumbs/dollar-icon-png/dollar-black-circle-icon-28.png"
                    className="w-5"
                  />
                  <p>
                    IDR {jobData.minimumSalaryFormatted} - {jobData.maximumSalaryFormatted}/bulan
                  </p>
                </div>
                <div className="flex items-center h-6 gap-2 mb-2 text-cyan-600">
                  <img
                    src="https://www.freeiconspng.com/thumbs/building-icon/office-building-icon-32.png"
                    className="w-5"
                  />
                  <p>{jobData.category}</p>
                </div>
                <div className="flex items-center h-6 gap-2 mb-2">
                  <img
                    src="https://www.pngmart.com/files/5/Time-PNG-Transparent-Image.png"
                    className="w-5"
                  />
                  <p>{jobData.jobType}</p>
                </div>
                <div className="flex items-center h-6 gap-2 mb-2">
                  <img
                    src="https://www.freeiconspng.com/thumbs/building-icon/office-building-icon-32.png"
                    className="w-5"
                  />
                  <p>
                    {jobData.minimumExperience} - {jobData.maximumExperience}{" "}
                    tahun
                  </p>
                </div>
                <div className="flex items-center h-6 gap-2 mb-2">
                  <img
                    src="https://www.iconpacks.net/icons/2/free-location-icon-2950-thumb.png"
                    className="w-5"
                  />
                  <p>{jobData.Company.location}</p>
                </div>
                <div className="flex items-center h-6 gap-2 mb-2">
                  <p>Diperbarui pada{jobData.updatedDate}</p>
                </div>
              </div>

              <div className="flex mt-5 mb-5">
                <button className="bg-cyan-600 text-white h-12 w-40 flex justify-center items-center font-bold">
                  LAMAR CEPAT
                </button>
                <button className="bg-white border-2 border-cyan-600 text-cyan-600 h-12 w-40 flex justify-center items-center font-bold ml-5">
                  TANDAI
                </button>
                <button className="bg-white border-2 border-cyan-600 text-cyan-600 h-12 w-40 flex justify-center items-center font-bold ml-5">
                  BAGIKAN
                </button>
              </div>
            </div>
          </div>

          {/* tunjangan dan keuntungan */}
          <div className="mb-5">
            <div className="font-bold text-xl m-5">
              Tunjangan dan keuntungan
            </div>
            <div className="flex ">
              <div className="">
                {/* tunjangan card */}
                <div className="m-2 mb-6 flex">
                  <img
                    src="https://glints-dashboard.s3.amazonaws.com/job-benefits-logos/remote_work_options.svg"
                    className="w-12 h-12"
                  />
                  <div className="w-full ml-5">
                    <h3 className="font-semibold">Opsi kerja jarak jauh</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Thanks to technology, we no longer have to be physically
                      present at the office to be productive. Joining our
                      company allows you to work anywhere without
                      place-constraint.
                    </p>
                  </div>
                </div>

                <div className="m-2 mb-6 flex">
                  <img
                    src="https://glints-dashboard.s3.amazonaws.com/job-benefits-logos/insurance.svg"
                    className="w-12 h-12"
                  />
                  <div className="w-full ml-5">
                    <h3 className="font-semibold">Opsi kerja jarak jauh</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Unexpected things may happen at unexpected times. We cover
                      basic insurance costs for you and your loved ones in case
                      of emergencies or unfortunate events. You can also upgrade
                      your plan any time you want.
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                {/* tunjangan card */}
                <div className="m-2 mb-6 flex">
                  <img
                    src="https://glints-dashboard.s3.amazonaws.com/job-benefits-logos/team_building_events.svg"
                    className="w-12 h-12"
                  />
                  <div className="w-full ml-5">
                    <h3 className="font-semibold">Acara team building</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Our company simply cannot function well without teams of
                      people working together. That said, we provide numerous
                      team-building activities and events for you and your team
                      to nurture meaningful relationships between every
                      individual.
                    </p>
                  </div>
                </div>

                <div className="m-2 mb-6 flex">
                  <img
                    src="https://glints-dashboard.s3.amazonaws.com/job-benefits-logos/professional_development.svg"
                    className="w-12 h-12"
                  />
                  <div className="w-full ml-5">
                    <h3 className="font-semibold">Pengembangan profesional</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Every employee is an invaluable asset to any team; that's
                      why we want to help you grow. Level up your skills and
                      expertise through our professional co-development programs
                      with notable organizations. We will cover the cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="font-bold text-xl m-5">Skills</div>
            <div className="m-5 mb-10">
              {jobData.Skills.map((el) => {
                return (
                  <div className="badge h-8 text-black bg-gray-100 border-gray-300 p-3">
                    {el.name} - {el.level}
                  </div>
                );
              })}
            </div>
          </div>

          {/* deskripsi */}
          <div>
            <div className="font-bold text-xl ml-5 mb-2">
              Deskripsi pekerjaan {jobData.title} {jobData.Company.name}
            </div>
            <div className="font-semibold text-lg ml-5 underline">
              About the role
            </div>
            <div className="text-lg ml-5">{jobData.description}</div>
          </div>

          {/* tentang perusahaan */}
          <div className="border-2 border-gray-300 w-full ml-5 rounded-md mt-10 p-10">
            <div className="font-bold text-xl mb-5">Tentang perusahaan</div>
            <div className="flex">
              <img src={jobData.Company.companyLogo} className="w-14 h-14" />
              <div className="ml-6">
                <p className="text-xl font-semibold">{jobData.Company.name}</p>
                <p className="text-cyan-600 text-lg">{jobData.category}</p>
              </div>
            </div>
            <div className="mt-5 ">
              <p>{jobData.Company.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mt-10 mb-3">
                Alamat Kantor
              </h2>
              <p>{jobData.Company.location}</p>
            </div>
          </div>
        </div>

        {/* kanan */}
        <div className="w-2/5 flex flex-col items-center">
          {otherJobs.map((el) => {
            return (
              <button onClick={() => redirectJob(el)} className="mb-2">
                <JobCard key={el.id} job={el} />;
              </button>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobDetail;
