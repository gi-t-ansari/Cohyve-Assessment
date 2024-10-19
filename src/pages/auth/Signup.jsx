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
import { useDispatch } from "react-redux";
import { setMe } from "../../redux/slices/userSlice";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(6, "Password too short")
      .required("Password is required"),
  });

  const { handleSubmit, reset, control, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignup = (data) => {
    dispatch(
      setMe({
        ...data,
      })
    );
    navigate(APP_URL.LOGIN);
    reset();
  };

  return (
    <Card className="w-96 bg-gray-300 mt-[20%]">
      <form onSubmit={handleSubmit(handleSignup)}>
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
            label="Set Password"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            disabled={!watch("username") || !watch("password")}
            fullWidth
            type="submit"
            // onClick={handleSignup}
            // className="bg-[#fff5d9] text-black"
          >
            Signup
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              <Link to={APP_URL.LOGIN}>Login</Link>
            </Typography>
          </Typography>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Signup;
