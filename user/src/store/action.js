const ORIGIN = "https://glints-production.up.railway.app"

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
        console.log(res, "INI RES");
        dispatch({
          type: "fetch/jobs",
          payload: res,
        });
      } catch (err) {
        console.log(err);
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