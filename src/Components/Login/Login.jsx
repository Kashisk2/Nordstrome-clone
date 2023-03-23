import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { InputLabel } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { FormControl } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import DialogContent from '@mui/material/DialogContent';
import DialogContent from "@mui/material/DialogContent";
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
import { FaBuromobelexperte } from "react-icons/fa";
import { useContext } from "react";
import { SignUpContex } from "../../Contex/SignupContex";
// import { FormControl } from "@chakra-ui/react";
const intial = {
  email: "",
  password: "",
};
export const Login = () => {
  const [form, setForm] = useState(intial);
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
    console.log(userDet);
    localStorage.setItem("userData", JSON.stringify(userDet));
    setUser(userDet);
  }

  function getUsers() {
    dispatch(loginLoading());
    fetch("https://nordstrom-ojra.onrender.com/user")
      .then((d) => d.json())
      .then((res) => {
        dispatch(loginSuccess(res));
      })
      .catch((err) => {
        dispatch(loginError());
      });
  }

  // function postLoginData() {
  //   dispatch(loginUserLoading());
  //   fetch("https://nordstrom-ojra.onrender.com/userData", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: form.email,
  //       password: form.password,
  //       otp: Math.floor(1000 + Math.random() * 9000),
  //       first_name: user[0].first_name,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((d) => d.json())
  //     .then((res) => {
  //       dispatch(loginUserSuccess(res));
  //     })
  //     .catch((err) => {
  //       dispatch(loginUserError());
  //     });
  // }

  // const handleSubmit = () => {
  //
  // };
  const [open, setOpen] = React.useState(false);
  const { handleMiddle } = useContext(SignUpContex);
  const handleClickOpen = () => {
    if (user.length === 0) {
      setOpen(true);
    } else if (user[0].password != form.password) {
      setOpen(true);
    } else {
      // postLoginData();
      handleMiddle();
      setStatus(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
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
    localStorage.setItem("userData", JSON.stringify(user[0]));
    localStorage.setItem("logedin", true);
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

        <button onClick={handleClickOpen} className="signInButton">
          Sign in
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle width={"500px"} id="alert-dialog-title">
            {"Alert"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {form.email === "" || form.password === ""
                ? "Please enter the Email and Password"
                : user.length === 0
                ? "Invalid email id"
                : user[0].password != form.password
                ? "Invalid Password"
                : ""}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} backgroundColor="red" autoFocus>
              Try again
            </Button>
          </DialogActions>
        </Dialog>

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
