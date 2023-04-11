const ORIGIN = "http://localhost:3001";

export function fetchJobs(filter) {
  return async function (dispatch, getState) {
    try {
      let link = `${ORIGIN}/jobs`;
      if (filter) {
        link += `?filter=${filter}`;
      }
      let res = await fetch(link, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      // console.log(res, "BLOM ");
      res = await res.json();
      // console.log(res, "INI RES");
      dispatch({
        type: "fetch/jobs",
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function postJob(job, skills) {
  return async function (dispatch) {
    try {
      // console.log(job, "DI AC");
      job.authorId = 1;
      job.postDate = "today";
      job.skills = skills;
      // console.log(job);
      let newData = await fetch(`${ORIGIN}/jobs`, {
        method: "POST",
        body: JSON.stringify(job),
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!newData.ok) {
        throw newData;
      }
      newData = await newData.json();
      return newData;
      // console.log(newData);
    } catch (err) {
      err = await err.json();
      // console.log(err);
      throw err;
    }
  };
}

export function patchJob(job, skills) {
  return async function (dispatch) {
    try {
      job.skills = skills;
      console.log(job, "INI DI AC");
      let editedJob = await fetch(`${ORIGIN}/jobs/${job.id}`, {
        method: "PATCH",
        body: JSON.stringify(job),
        headers: {
          "Content-type": "application/json",
          access_token: localStorage.getItem("access_token"),
          "Access-Control-Allow-Origin": "*",
        },
      });
      if (!editedJob.ok) {
        throw await editedJob.json();
      }
      console.log("SUccess patch");
      return await editedJob.json();
    } catch (err) {
      // console.log(err)
      throw err;
    }
  };
}

export function deleteJob(id) {
  return async function (dispatch) {
    try {
      // console.log(id);
      let deleted = await fetch(`${ORIGIN}/jobs/${id}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchJobs());
      console.log("Success delete");
    } catch (err) {
      console.log(err, "delete job");
    }
  };
}

export function fetchCompany() {
  return async function (dispatch, getState) {
    try {
      let data = await fetch(`${ORIGIN}/companies`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      data = await data.json();
      data.forEach((el) => {
        // el.createdAt = el.createdAt.toISOString().substring(0, 10)
      });
      // console.log(data, "INI COMP");
      dispatch({
        type: "fetch/companies",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addCompany(company) {
  return async function (dispatch) {
    try {
      // console.log(company);
      let newCompany = await fetch(`${ORIGIN}/companies`, {
        method: "POST",
        body: JSON.stringify(company),
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!newCompany.ok) {
        throw await newCompany.json();
      }

      dispatch(fetchCompany());
      newCompany = await newCompany.json();
      // console.log(newCompany, "Success add company");
      return newCompany;
    } catch (err) {
      console.log(err, "Add company");
      throw err;
    }
  };
}

export function patchCompany(company) {
  return async function (dispatch) {
    try {
      // console.log(company);
      let newCompany = await fetch(`${ORIGIN}/companies/${company.id}`, {
        method: "PATCH",
        body: JSON.stringify(company),
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!newCompany.ok) {
        throw await newCompany.json();
      }

      dispatch(fetchCompany());
      newCompany = await newCompany.json();
      // console.log(newCompany, "Success edit company");
      return newCompany;
    } catch (err) {
      console.log(err, "edit company");
      throw err;
    }
  };
}

export function deleteCompany(id) {
  return async function (dispatch) {
    try {
      let deleted = await fetch(`${ORIGIN}/companies/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchCompany());
    } catch (err) {
      console.log(err);
    }
  };
}

export function login(input) {
  return async function (dispatch) {
    try {
      // console.log(input, "INILOGIN");
      let response = await fetch(`${ORIGIN}/login`, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw await response.json();
      }
      let data = await response.json();
      // console.log(data, "RES LOGIN");
      localStorage.setItem("access_token", data.access_token);
    } catch (err) {
      console.log(err)
      throw err;
    }
  };
}

export function registerAdmin(data) {
  return async function (dispatch) {
    try {
      // console.log(data)
      let admin = await fetch(`${ORIGIN}/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!admin.ok) {
        throw await admin.json();
      }
      // console.log("Succes create admin");
      return await admin.json();
    } catch (err) {
      // console.log(err, "new admin");
      throw err;
    }
  };
}
