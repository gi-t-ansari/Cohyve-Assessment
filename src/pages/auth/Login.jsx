import React, { useState } from "react";
import { ControlledInput, Navbar } from "../../common";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { APP_URL } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userSelector } from "../../redux/slices/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useSelector(userSelector);
  console.log(user?.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(6, "Username too short")
      .required("Username is required"),
    password: yup
      .string()
      .min(6, "Password too short")
      .required("Password is required"),
  });
  const { handleSubmit, reset, control, watch, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    const { username, password } = data;

    if (user?.username !== username) {
      setError("username", { type: "manual", message: "Invalid username" });
    } else if (user?.password !== password) {
      setError("password", { type: "manual", message: "Invalid password" });
    } else {
      dispatch(loginUser(true));
      // navigate(APP_URL.HOME);
      reset();
    }
  };

  return (
    <Card className="w-96 bg-gray-300 mt-[30%]">
      <form onSubmit={handleSubmit(handleLogin)}>
        <CardBody className="flex flex-col gap-4">
          <ControlledInput
            name="username"
            label="Username"
            type="text"
            control={control}
          />
          <ControlledInput
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            icon={
              showPassword ? (
                <FaRegEye
                  onClick={() => setShowPassword(false)}
                  className="cursor-pointer"
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setShowPassword(true)}
                  className="cursor-pointer text-lg"
                />
              )
            }
            label="Password"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            disabled={!watch("username") || !watch("password")}
            fullWidth
            className="bg-[#fff5d9]"
            type="submit"
          >
            Login
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              <Link to={APP_URL.SIGNUP}>Sign up</Link>
            </Typography>
          </Typography>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Login;
