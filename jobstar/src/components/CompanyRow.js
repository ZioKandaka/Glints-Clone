import React from "react";
import { useDispatch } from "react-redux";
import { deleteCompany } from "../store/actions/actionCreator";
import Swal from "sweetalert2";

function CompanyRow({ company, index, populate }) {
  const dispatch = useDispatch();

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
        dispatch(deleteCompany(company.id));
        Swal.fire(`${company.name} has been deleted`);
      }
    });
  }

  return (
    <tbody>
      <tr>
        <td>
          <div className="flex items-center justify-between">{index + 1}</div>
        </td>
        <td>
          <div className="flex items-center justify-between">
            <div className="avatar w-full flex justify-center">
              <div className="mask mask-squircle w-12 h-12 mr-10 ml-10">
                <img
                  src={company.companyLogo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center justify-between">
            <div className="font-bold text-center w-full">{company.name}</div>
            <div className="text-sm opacity-50">{}</div>
          </div>
        </td>
        <td>
          <div className="flex flex-col justify-center items-center text-xl">
            {company.location}
          </div>
        </td>
        <td>
          <div className="flex justify-center items-center font-semibold">
            {company.createdDate}
          </div>
        </td>
        <td>
          <div className="flex justify-center items-center font-semibold">
            {company.updatedDate}
          </div>
        </td>
        <td className="w-20">
          <button
            className="btn btn-warning btn-md m-2 w-20"
            onClick={deleteHandler}
          >
            Delete
          </button>
          <div>
            <label
              htmlFor="my-modal-6"
              className="btn btn-primary btn-md m-2 w-20"
              onClick={() => {
                populate(index);
              }}
            >
              Edit
            </label>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default CompanyRow;
