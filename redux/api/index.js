import defaultAxios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Redirect, Link } from "react-router-dom";
import { loadX } from "components/parts/sweetalert2";
const MySwal = withReactContent(Swal);

const axios = defaultAxios.create({
  baseURL: "https://protra.kuyrek.com",
  headers: {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Origin": "*",
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  withCredentials: false,
  crossorigin: true,
});

export const signIn = async (data, props) => {
  loadX();

  let datax = {};
  const todos = await axios.post("user/login", data).catch(function (error) {
    if (error.response.status !== 200) {
      datax = {
        token: null,
      };
      if ("errors" in error.response.data) {
        if ("email" in error.response.data.errors) {
          datax.message = error.response.data.errors.email.msg;
        }
        if ("password" in error.response.data.errors) {
          datax.message = error.response.data.errors.password.msg;
        }
      } else if ("msg" in error.response.data) {
        datax.message = error.response.data.message;
      }
    }
  });
  if ("token" in datax) {
    MySwal.fire({
      icon: "error",
      title: <h5>{datax.message}</h5>,
    });
    return datax;
  } else {
    localStorage.setItem("token", todos.data.token);
    localStorage.setItem("role", "user");
    datax = {
      message: todos.data.message,
      token: todos.data.token,
    };
    MySwal.fire({
      icon: "success",
      title: <h5>{datax.message}</h5>,
      // confirmButtonText : <a href="/dashboard/home">Okay</a>,
      allowOutsideClick: false,
    }).then(() => {
      window.location.href = "/dashboard/home"; //pindah halaman
    });
    return datax;
  }
};

export const signup = async (data) => {
  loadX();
  let datax = {};
  const todos = await axios.post("user/signup", data).catch(function (error) {
    if (error.response.status !== 200) {
      datax = {
        token: null,
      };
      if ("errors" in error.response.data) {
        if (error.response.data.errors.passwordConfirmation) {
          datax.message = error.response.data.errors.passwordConfirmation.msg;
        }
        if ("password" in error.response.data.errors) {
          datax.message = error.response.data.errors.password.msg;
        }
      } else if ("message" in error.response.data) {
        datax.message = error.response.data.message;
      }
    }
  });
  if ("token" in datax) {
    MySwal.fire({
      icon: "error",
      title: <h5>{datax.message}</h5>,
    });
    return datax;
  } else {
    localStorage.setItem("token", todos.data.token);
    datax = {
      message: "success",
      token: todos.data.token,
    };
    MySwal.fire({
      icon: "success",
      title: <h5>{todos.data.message}</h5>,
    });
    return datax;
  }
};

export const googleLogIn = async (data) => {
  loadX();

  let datax = {};
  const todos = await axios
    .post("user/verify", { token: data })
    .catch(function (error) {
      if (error.response.status !== 200) {
        datax = {
          token: null,
        };
        if ("errors" in error.response.data) {
          if ("email" in error.response.data.errors) {
            datax.message = error.response.data.errors.email.msg;
          }
          if ("password" in error.response.data.errors) {
            datax.message = error.response.data.errors.password.msg;
          }
        } else if ("message" in error.response.data) {
          datax.message = error.response.data.message;
        }
      }
    });
  if ("token" in datax) {
    MySwal.fire({
      icon: "error",
      title: <h5>{datax.message}</h5>,
    });
    return datax;
  } else {
    localStorage.setItem("token", todos.data.token);
    localStorage.setItem("role", "user");
    datax = {
      message: todos.data.message,
      token: todos.data.token,
    };
    MySwal.fire({
      icon: "success",
      title: <h5>{datax.message}</h5>,
      // confirmButtonText : <a href="/dashboard/home">Okay</a>,
      allowOutsideClick: false,
    }).then(() => {
      window.location.href = "/dashboard/home";
    });
    return datax;
  }
};

export const verify = async (data) => {
  loadX();
  let datax = {};
  const todos = await axios
    .get(`user/verifyUser/${data}`)
    .catch(function (error) {
      if (error.response.status !== 200) {
        datax = {
          token: null,
        };
        if ("message" in error.response.data) {
          datax.message = error.response.data.message;
        }
      }
    });
  if ("token" in datax) {
    MySwal.fire({
      icon: "error",
      title: <h5>{datax.message}</h5>,
      allowOutsideClick: false,
    }).then(() => {
      window.location.href = "/";
    });
    return datax;
  } else {
    datax = {
      message: todos.data.message,
      status: todos.data.status,
    };
    MySwal.fire({
      icon: "success",
      title: <h5>{todos.data.message}</h5>,
      allowOutsideClick: false,
    }).then(() => {
      window.location.href = "/signin";
    });

    return datax;
  }
};
