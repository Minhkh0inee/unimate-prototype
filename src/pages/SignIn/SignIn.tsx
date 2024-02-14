import "./SignIn.css";
import Image from "../../assets/image/GraphicNoBackGround.png";
import { SlSocialGoogle } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import SnackBar from "../../components/SnackBar/SnackBar";
import { RiTwitterXFill } from "react-icons/ri";

const validationSchema = yup
  .object({
    username: yup
      .string()
      .required("Username is required")
      .email("Invalid email format"),
    password: yup.string().required("Password is required"),
  })
  .required();

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  console.log("errors", errors);
  const onSubmit = (data: unknown) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
    setOpenSnackBar(true);
  };

  return (
    <section className="section-wrapper">
      <div className="left">
        <div className="title">Sign In</div>
        <div className="card-icon-wrapper">
          <SlSocialGoogle className="icon" />
          <FaFacebookF className="icon" />
          <RiTwitterXFill className="icon" />
        </div>

        <div className="divider-wrapper">
          <div className="line"></div>
          <div className="or">or</div>
          <div className="line"></div>
        </div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label>Username</label>

            <div className="input-field-wrapper">
              <input
                type="text"
                className="input-field"
                placeholder="Enter your username"
                {...register("username")}
                autoComplete="off"
              />

              <FaUser className="input-icon" />
            </div>
            {errors.username && (
              <div className="error-message">{errors.username.message}</div>
            )}
          </div>

          <div className="input-wrapper">
            <label>Password</label>

            <div className="input-field-wrapper">
              <input
                type="password"
                className="input-field"
                placeholder="Enter your password"
                {...register("password")}
              />

              <IoEyeSharp className="input-icon" />
            </div>
            {errors.password && (
              <div className="error-message">{errors.password.message}</div>
            )}
          </div>

          <button type="submit" className="btn-submit">
            Sign In{" "}
            {loading && (
              <svg
                version="1.1"
                id="L9"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                style={{ width: "40px", height: "40px" }}
              >
                <path
                  fill="#1b1f44"
                  d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                >
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="1s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            )}
          </button>
        </form>

        <div className="forgot">
          <a href="">Forgot Password ?</a>
        </div>
      </div>

      <div className="right">
        <div className="half-circle"></div>
        <img src={Image} alt="" className="img-signin" />
      </div>

      <SnackBar open={openSnackBar} close={() => {}} />
    </section>
  );
};

export default SignIn;
