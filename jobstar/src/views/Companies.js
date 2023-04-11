import React, { useEffect, useState } from "react";
import CompanyRow from "../components/CompanyRow";
import SideFilter from "../components/SideFilter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addCompany,
  fetchCompany,
  patchCompany,
} from "../store/actions/actionCreator";
import Swal from "sweetalert2";

function Companies() {
  let companies = useSelector((state) => state.companyReducer.companies);
  const navigate = useNavigate();

  let [newCompany, setNewCompany] = useState({
    name: "",
    companyLogo: "",
    location: "",
    email: "",
    description: "",
  });

  let [formType, setFormType] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompany());
    // console.log(companies);
  }, []);

  function restart() {
    setNewCompany({
      name: "",
      companyLogo: "",
      location: "",
      email: "",
      description: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  function populate(index) {
    setNewCompany({
      id: companies[index].id,
      name: companies[index].name,
      companyLogo: companies[index].companyLogo,
      location: companies[index].location,
      email: companies[index].email,
      description: companies[index].description,
    });
    setFormType("edit");
  }

  function submitAddCompany(e) {
    e.preventDefault();
    dispatch(addCompany(newCompany))
      .then((res) => {
        restart();
        document.getElementById("my-modal-6").checked = false;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${res.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1000,
        });
      });
  }

  function submitEditCompany(e) {
    e.preventDefault();
    dispatch(patchCompany(newCompany))
      .then((res) => {
        restart();
        document.getElementById("my-modal-6").checked = false;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${res.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1000,
        });
      });
  }

  return (
    <div className="flex bg-pink-100 min-h-screen">
      {/* modal for add company */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div
        className="modal modal-bottom sm:modal-middle"
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   dispatch(addCompany(newCompany))
        //   // navigate("/companies")
        // }}
      >
        <div className="modal-box w-full">
          <h3 className="font-bold text-lg text-center">
            Add new company to our system
          </h3>
          <div className="flex flex-col justify-center w-full items-center mt-5">
            <input
              type="text"
              placeholder="Company Name"
              className="input input-bordered w-full max-w-md m-3"
              value={newCompany.name}
              onChange={({ target }) => {
                setNewCompany({ ...newCompany, name: target.value });
              }}
            />
            <input
              type="text"
              placeholder="Company Location"
              className="input input-bordered w-full max-w-md m-3"
              value={newCompany.location}
              onChange={({ target }) => {
                setNewCompany({ ...newCompany, location: target.value });
              }}
            />
            <input
              type="text"
              placeholder="Company Email"
              className="input input-bordered w-full max-w-md m-3"
              value={newCompany.email}
              onChange={({ target }) => {
                setNewCompany({ ...newCompany, email: target.value });
              }}
            />
            <input
              type="text"
              placeholder="Company Description"
              className="input input-bordered w-full max-w-md m-3"
              value={newCompany.description}
              onChange={({ target }) => {
                setNewCompany({ ...newCompany, description: target.value });
              }}
            />
            <input
              type="text"
              placeholder="Company Logo Link"
              className="input input-bordered w-full max-w-md m-3"
              value={newCompany.companyLogo}
              onChange={({ target }) => {
                setNewCompany({ ...newCompany, companyLogo: target.value });
              }}
            />
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6">
              <label
                // type="submit"
                htmlFor="my-modal-6"
                className="btn btn-secondary"
                onClick={(e) => {
                  if (formType === "add") {
                    submitAddCompany(e);
                  } else if (formType === "edit") {
                    submitEditCompany(e);
                  }
                }}
              >
                Submit
              </label>
            </label>
            <label htmlFor="my-modal-6" className="btn btn-error">
              Cancel
            </label>
          </div>
        </div>
      </div>
      {/* end of modal */}

      <SideFilter />

      <div className="bg-pink-100 h-full w-full">
        <div className="flex scale-95">
          <div className="w-full">
            <div className="overflow-x-auto w-full">
              <div className="text-4xl ml-10 mb-6 flex justify-between">
                <div>Manage Our Companies</div>
                <div>
                  <label
                    htmlFor="my-modal-6"
                    className="btn"
                    onClick={() => {
                      setFormType("add");
                      dispatch(restart());
                    }}
                  >
                    Add Company
                  </label>
                </div>
              </div>

              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="text-center w-10 bg-pink-500">No</th>
                    <th className="text-center bg-pink-500">Logo</th>
                    <th className="text-center bg-pink-500">Company</th>
                    <th className="text-center bg-pink-500">Location</th>
                    <th className="text-center bg-pink-500">Created At</th>
                    <th className="text-center bg-pink-500">Updated At</th>
                    <th className="text-center bg-pink-500">Action</th>
                  </tr>
                </thead>
                {companies.map((el, i) => {
                  return (
                    <CompanyRow
                      key={el.id}
                      company={el}
                      index={i}
                      populate={populate}
                    />
                  );
                })}
                <tfoot></tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
