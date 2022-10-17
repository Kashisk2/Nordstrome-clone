import React from "react";
import { IconButton } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { InputLabel } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { FormControl } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginLoading,
  loginError,
  loginSuccess,
  loginUserLoading,
  loginUserSuccess,
  loginUserError,
} from "../../Features/Login/actions";
import { useEffect, useState } from "react";
import { registerSuccess } from "../../Features/Register/actions";

export const Login = () => {
  const [form, setForm] = useState({});
  const [user, setUser] = useState([]);
  const [logStatus, setStatus] = useState(false);

  const { register } = useSelector((state) => ({
    register: state.registerState.register,
  }));

  const { users, userData } = useSelector((state) => ({
    users: state.loginState.users,
    userData: state.loginState.userData,
  }));

  useEffect(() => {
    getUsers();
  }, []);

  const dispatch = useDispatch();

  function findUser() {
    let userDet = users.filter((el) => el.email === form.email);
    setUser(userDet);
  }

  function getUsers() {
    dispatch(loginLoading());
    fetch("/register")
      .then((d) => d.json())
      .then((res) => {
        dispatch(loginSuccess(res));
      })
      .catch((err) => {
        dispatch(loginError());
      });
  }

  function postLoginData() {
    dispatch(loginUserLoading());
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        email: form.email,
        password: form.password,
        otp: Math.floor(1000 + Math.random() * 9000),
        first_name: user[0].first_name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((res) => {
        dispatch(loginUserSuccess(res));
      })
      .catch((err) => {
        dispatch(loginUserError());
      });
  }

  const handleSubmit = () => {
    if (user.length === 0) {
      alert("Invalid Email Id");
    } else if (user[0].password != form.password) {
      alert("Invalid password");
    } else {
      postLoginData();
      setStatus(true);
    }
  };

  const handleRegister = () => {
    dispatch(registerSuccess(false));
  };

  const handleEmailChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
    findUser();
  };

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setForm({ ...form, [prop]: event.target.value });
    findUser();
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (logStatus) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <div className="formLog">
        <div className="staticTextOne">Welcome back!</div>
        <div className="staticTextTwo">Sign in with the same info</div>

        <FormControl
          size="medium"
          sx={{ m: "auto", mt: "20px", mb: "10px", width: "350px" }}
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            sx={{ fontSize: "12px" }}
          >
            Email
          </InputLabel>
          <OutlinedInput
            label="Email"
            sx={{ fontSize: "12px" }}
            name="email"
            onChange={handleEmailChange}
          />
        </FormControl>

        <FormControl
          size="medium"
          sx={{ m: "auto", mt: "10px", mb: "10px", width: "350px" }}
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            sx={{ fontSize: "12px" }}
          >
            Password
          </InputLabel>
          <OutlinedInput
            sx={{ fontSize: "12px" }}
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="small"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <div className="staticTextThree">Forgot password?</div>
        <div className="staticTextFour">
          <input className="checkBox" type="checkbox" />
          <label> Keep me signed in.</label>
        </div>

        <button onClick={handleSubmit} className="signInButton">
          Sign in
        </button>

        <div className="staticTextTwo">
          Dont have an account?
          <Link to={"/register"} onClick={handleRegister}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
