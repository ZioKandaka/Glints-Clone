import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompany } from "../store/actions/actionCreator";
import Swal from "sweetalert2";

import "../App.css";
import { useNavigate } from "react-router";
function JobForm({ editData, submitFunction }) {
  let companies = useSelector((state) => state.companyReducer.companies);
  let navigate = useNavigate();
  let [form, setForm] = useState({
    id: "",
    title: "",
    companyId: "",
    minimumSalary: "",
    maximumSalary: "",
    minimumExperience: "",
    maximumExperience: "",
    category: "",
    jobType: "",
    description: "",
  });

  let [skills, setSkills] = useState([
    {
      name: "",
      level: "",
    },
  ]);

  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    // console.log(form, skills);
    // console.log(submitFunction)
    dispatch(submitFunction(form, skills))
      .then((res) => {
        navigate("/");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${res.message}`,
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1000
        })
      });
  }

  useEffect(() => {
    dispatch(fetchCompany());
    // console.log(companies, "INI COPAMNO");
    // console.log(editData, 'ini masuk');
    if (editData) {
      setForm({
        id: editData.id,
        title: editData.title,
        companyId: editData.companyId,
        minimumSalary: editData.minimumSalary,
        maximumSalary: editData.maximumSalary,
        minimumExperience: editData.minimumExperience,
        maximumExperience: editData.maximumExperience,
        category: editData.category,
        jobType: editData.jobType,
        description: editData.description,
      });
      setSkills(editData.Skills);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-center w-full h-full bg-pink-100 ">
        <div className="container  px-4 lg:px-20 ">
          <form
            onSubmit={submitHandler}
            className="w-full p-8 my-4 md:px-12  lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white"
          >
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                Add <br /> Vacancy
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Job Name*"
                value={form.title}
                onChange={({ target }) => {
                  setForm({ ...form, title: target.value });
                }}
              />
              <select
                onChange={({ target }) => {
                  setForm({ ...form, companyId: target.value });
                }}
              >
                <option hidden disabled selected>
                  Select Company
                </option>
                {companies.map((el) => {
                  return (
                    <option
                      selected={el.id === form.companyId}
                      key={el.id}
                      value={el.id}
                    >
                      {el.name}
                    </option>
                  );
                })}
              </select>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Minimum Salary*"
                value={form.minimumSalary}
                onChange={({ target }) => {
                  setForm({ ...form, minimumSalary: target.value });
                }}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Maximum Salary*"
                value={form.maximumSalary}
                onChange={({ target }) => {
                  setForm({ ...form, maximumSalary: target.value });
                }}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Minimum Experience*"
                value={form.minimumExperience}
                onChange={({ target }) => {
                  setForm({ ...form, minimumExperience: target.value });
                }}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Maximum Experience*"
                value={form.maximumExperience}
                onChange={({ target }) => {
                  setForm({ ...form, maximumExperience: target.value });
                }}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Category*"
                value={form.category}
                onChange={({ target }) => {
                  setForm({ ...form, category: target.value });
                }}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="type*"
                value={form.jobType}
                onChange={({ target }) => {
                  setForm({ ...form, jobType: target.value });
                }}
              />
            </div>

            <div className="my-4">
              <textarea
                placeholder="Job Description*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                value={form.description}
                onChange={({ target }) => {
                  setForm({ ...form, description: target.value });
                }}
              ></textarea>
            </div>

            {skills.map((skill, index) => {
              return (
                <div
                  className="grid grid-cols-1 gap-5 md:grid-cols-2"
                  key={index}
                >
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Skill*"
                    name="skillName"
                    value={skill.name}
                    onChange={({ target }) => {
                      const skillClone = structuredClone(skills);
                      skillClone[index].name = target.value;
                      setSkills(skillClone);
                    }}
                  />
                  <select
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    onChange={({ target }) => {
                      const skillClone = structuredClone(skills);
                      skillClone[index].level = target.value;
                      setSkills(skillClone);
                    }}
                  >
                    <option hidden disabled selected>
                      Select Level
                    </option>
                    <option
                      value="Beginner"
                      selected={skill.level === "Beginner"}
                    >
                      Beginner
                    </option>
                    <option
                      value="Intermediate"
                      selected={skill.level === "Intermediate"}
                    >
                      Intermediate
                    </option>
                    <option
                      value="Advance"
                      selected={skill.level === "Advance"}
                    >
                      Advance
                    </option>
                  </select>
                </div>
              );
            })}

            <div className="w-40 mt-2">
              <button
                type="button"
                className="btn btn-error btn-xs"
                onClick={() => {
                  setSkills([...skills, { name: "", level: "" }]);
                }}
              >
                Add Skill
              </button>
            </div>

            <div className="w-40 mt-10">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-pink-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobForm;
