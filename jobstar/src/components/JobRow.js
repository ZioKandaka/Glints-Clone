import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteJob } from "../store/actions/actionCreator";
import Swal from "sweetalert2";

function JobRow({ job, i }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function redirectJob() {
    navigate(`/editJob/${job.id}`, { state: { data: job } });
  }

  function deleteHandler(e) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        e.preventDefault();
        dispatch(deleteJob(job.id));
        Swal.fire(`${job.title} has been deleted`);
      }
    });
  }

  return (
    <tbody>
      <tr>
        <td>{i}</td>
        <td>
          <div className="flex items-center justify-between">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12 mr-10 ml-10">
                <img
                  src={job.Company.companyLogo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{job.title}</div>
              <div className="text-sm opacity-50">{}</div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex flex-col justify-center items-center text-xl">
            {job.Company.name}
            <br />
            <span className="badge badge-ghost badge-sm">
              {job.Company.location}
            </span>
          </div>
        </td>
        <td>
          <div className="flex justify-center items-center font-semibold">
            Rp {job.minimumSalary} - {job.maximumSalary}
          </div>
        </td>
        <td>
          <div className=" font-semibold">
            {job.Skills.map((el) => {
              return (
                <div key={el.id} className="m-2 text-center">
                  {el.name} - {el.level}
                </div>
              );
            })}
          </div>
        </td>
        <td>
          <div className="flex justify-center items-center font-semibold">
            {job.User.username}
          </div>
        </td>
        <td className="w-20">
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(redirectJob);
            }}
            className="btn btn-secondary btn-md m-2"
          >
            Edit
          </button>
          <button
            className="btn btn-warning btn-md m-2"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default JobRow;
