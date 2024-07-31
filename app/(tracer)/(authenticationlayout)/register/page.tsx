"use client";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Select from "react-select";
import { registerSchema } from "@/shared/schemas/register";
import { z } from "zod";
import { register } from "@/shared/actions/register";
import store from "@/shared/redux/store";
import { ThemeChanger } from "@/shared/redux/action";
import { connect } from "react-redux";
import Model from "@/shared/layout-components/ui/model";

interface RegisterFormValues {
  userType: { value: string; label: string; id: number } | null;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string | null;
  termsAccepted: boolean;
}

const Signupcover = ({ ThemeChanger }: any) => {
  const theme = store.getState();
  const [passwordshow1, setpasswordshow1] = useState(false);
  const [passwordshow2, setpasswordshow2] = useState(false);

  interface select {
    id: number;
    label: string;
    value: string;
  }

  const userTypeOptions: select[] = [
    { id: 0, label: "Select User Type", value: "" },
    { id: 1, label: "Personal", value: "personal" },
    { id: 2, label: "Organization", value: "organization" },
  ];

  const [formValues, setFormValues] = useState<RegisterFormValues>({
    userType: userTypeOptions[0],
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: null,
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<Partial<RegisterFormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  async function submit(formdata: any) {
    try {
      ThemeChanger({ ...theme, authLayoutIsLoading: true });
      registerSchema.parse(formValues);
      setErrors({});
      const transformedValues = {
        email: formValues.email,
        userType: formValues.userType?.value as string,
        passwordHash: formValues.password,
        profile: {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
        },
        roles: [],
      };
      await register(transformedValues).then((res) => {
        console.log(res);
        ThemeChanger({ ...theme, authLayoutIsLoading: false });
        if (res?.data?.register?.success) {
          ThemeChanger({
            ...theme,
            modal: true,
            modalTitle: "Success",
            modalMessage: "User registered successfully",
            modalButtonText: "Proceed To Login",
            modalRedirect: "/login",
          });
        } else if (res?.data?.register?.error) {
          ThemeChanger({
            ...theme,
            modal: true,
            modalTitle: "Error",
            modalMessage: res?.data?.register?.error?.message,
            modalButtonText: "Ok",
          });
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        ThemeChanger({ ...theme, authLayoutIsLoading: false });
      }
    }
  }
  return (
    <Fragment>
      <Seo title={"Signup-cover"} />
      <div className="grid grid-cols-12 authentication mx-0 text-defaulttextcolor text-defaultsize">
        <div className="xxl:col-span-7 xl:col-span-7 lg:col-span-12 col-span-12 bg-white dark:!bg-bodybg">
          <div className="flex justify-center items-center h-full">
            <div className="p-[3rem]">
              <div className="mb-4">
                <Link aria-label="anchor" href="/">
                  <Image
                    height={100}
                    width={100}
                    src="/assets/images/brand-logos/desktop-logo.png"
                    alt=""
                    className="authentication-brand desktop-logo"
                  />
                  <Image
                    height={100}
                    width={100}
                    src="/assets/images/brand-logos/desktop-dark.png"
                    alt=""
                    className="authentication-brand desktop-dark"
                  />
                </Link>
              </div>
              <p className="h5 font-semibold mb-2">Sign Up</p>
              <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal">
                Welcome &amp; Join us by creating a free account !
              </p>
              <div className="btn-list">
                <button
                  aria-label="button"
                  type="button"
                  className="ti-btn ti-btn-lg ti-btn-light !font-medium me-[0.365rem] dark:border-defaultborder/10"
                >
                  <svg
                    className="google-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2443"
                    height="2500"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 262"
                  >
                    <path
                      fill="#4285F4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    />
                    <path
                      fill="#34A853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    />
                    <path
                      fill="#FBBC05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    />
                    <path
                      fill="#EB4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    />
                  </svg>
                  Sign In with google
                </button>
                <button
                  aria-label="button"
                  type="button"
                  className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]"
                >
                  <i className="ri-facebook-fill"></i>
                </button>
                <button
                  aria-label="button"
                  type="button"
                  className="ti-btn ti-btn-icon ti-btn-light"
                >
                  <i className="ri-twitter-x-line"></i>
                </button>
              </div>
              <div className="text-center my-[3rem] authentication-barrier">
                <span>OR</span>
              </div>
              <form action={submit}>
                <div className="grid grid-cols-12 gap-y-4">
                  <div className="xl:col-span-12 col-span-12 mt-0">
                    <label
                      htmlFor="signup-user-type"
                      className="form-label text-default"
                    >
                      User Type
                    </label>
                    <Select
                      classNamePrefix="Select2"
                      id="react-select-3-live-region !rounded-md"
                      options={userTypeOptions}
                      value={formValues.userType}
                      placeholder="Open this select menu"
                      name="userType"
                      onChange={(selectedOption) => {
                        setFormValues({
                          ...formValues,
                          userType: selectedOption as {
                            value: string;
                            label: string;
                            id: number;
                          },
                        });
                      }}
                    />
                    {errors.userType && (
                      <span className="text-danger text-xs">
                        {errors.userType.toString()}
                      </span>
                    )}
                  </div>
                  <div className="xl:col-span-12 col-span-12 mt-0">
                    <label
                      htmlFor="signup-firstname"
                      className="form-label text-default"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg w-full !rounded-md"
                      id="signup-firstname"
                      name="firstName"
                      placeholder="first name"
                      value={formValues.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <span className="text-danger text-xs">
                        {errors.firstName}
                      </span>
                    )}
                  </div>
                  <div className="xl:col-span-12 col-span-12">
                    <label
                      htmlFor="signup-lastname"
                      className="form-label text-default"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg w-full !rounded-md"
                      id="signup-lastname"
                      placeholder="last name"
                      name="lastName"
                      value={formValues.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <span className="text-danger text-xs">
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                  <div className="xl:col-span-12 col-span-12">
                    <label
                      htmlFor="signup-email"
                      className="form-label text-default"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg w-full !rounded-md"
                      id="signup-email"
                      placeholder="email"
                      value={formValues.email}
                      name="email"
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="text-danger text-xs">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="xl:col-span-12 col-span-12">
                    <label
                      htmlFor="signup-password"
                      className="form-label text-default"
                    >
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        type={passwordshow1 ? "text" : "password"}
                        className="form-control  !border-s form-control-lg !rounded-md"
                        id="signup-password"
                        placeholder="password"
                        value={formValues.password}
                        name="password"
                        onChange={handleChange}
                      />
                      <button
                        aria-label="button"
                        className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                        onClick={() => setpasswordshow1(!passwordshow1)}
                        type="button"
                        id="button-addon2"
                      >
                        <i
                          className={`${
                            passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"
                          } align-middle`}
                        ></i>
                      </button>
                    </div>
                    {errors.password && (
                      <span className="text-danger text-xs">
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <div className="xl:col-span-12 col-span-12">
                    <label
                      htmlFor="signup-confirmpassword"
                      className="form-label text-default"
                    >
                      Confirm Password
                    </label>
                    <div className="input-group">
                      <input
                        type={passwordshow2 ? "text" : "password"}
                        className="form-control  !border-s form-control-lg !rounded-md"
                        id="signup-confirmpassword"
                        placeholder="confirm password"
                        value={formValues.confirmPassword || ""}
                        onChange={handleChange}
                        name="confirmPassword"
                      />
                      <button
                        aria-label="button"
                        className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                        onClick={() => setpasswordshow2(!passwordshow2)}
                        type="button"
                        id="button-addon21"
                      >
                        <i
                          className={`${
                            passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"
                          } align-middle`}
                        ></i>
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <span className="text-danger text-xs">
                        {errors.confirmPassword}
                      </span>
                    )}
                    <div className="form-check mt-4 flex !ps-0 ">
                      <input
                        className="form-check-input align-middle"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                        name="termsAccepted"
                        checked={formValues.termsAccepted}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            termsAccepted: e.target.checked,
                          })
                        }
                      />
                      <label
                        className="form-check-label text-[#8c9097] dark:text-white/50 font-normal "
                        htmlFor="defaultCheck1"
                      >
                        By creating a account you agree to our{" "}
                        <Link
                          href="/pages/terms&conditions/"
                          className="text-success"
                        >
                          <u className="mx-1">&nbsp;Terms &amp; Conditions</u>
                        </Link>
                        &nbsp; and&nbsp;{" "}
                        <Link href="#!" scroll={false} className="text-success">
                          <u className="mx-1">Privacy Policy</u>
                        </Link>
                      </label>
                    </div>
                    {errors.termsAccepted && (
                      <span className="text-danger text-xs">
                        {errors.termsAccepted}
                      </span>
                    )}
                  </div>
                  <div className="xl:col-span-12 col-span-12 grid mt-1">
                    <button
                      type="submit"
                      className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10"
                    >
                      {theme.authLayoutIsLoading ? "Signing Up..." : "Sign Up"}
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary">
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="xxl:col-span-5 xl:col-span-5 lg:col-span-5 col-span-12 xl:block hidden px-0">
          <div className="authentication-cover">
            <div className="aunthentication-cover-content rounded">
              <div className="swiper keyboard-control">
                <Swiper
                  spaceBetween={30}
                  navigation={true}
                  centeredSlides={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Pagination, Autoplay, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="text-white text-center p-[3rem] flex items-center justify-center">
                      <div>
                        <div className="mb-[3rem]">
                          <Image
                            height={100}
                            width={100}
                            src="/assets/images/authentication/2.png"
                            className="authentication-image"
                            alt=""
                          />
                        </div>
                        <h6 className="font-semibold text-[1rem]">Sign Up</h6>
                        <p className="font-normal text-[.875rem] opacity-[0.7]">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ipsa eligendi expedita aliquam quaerat nulla
                          voluptas facilis. Porro rem voluptates possimus, ad,
                          autem quae culpa architecto, quam labore blanditiis at
                          ratione.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-white text-center p-[3rem] flex items-center justify-center">
                      <div>
                        <div className="mb-[3rem]">
                          <Image
                            height={100}
                            width={100}
                            src="/assets/images/authentication/3.png"
                            className="authentication-image"
                            alt=""
                          />
                        </div>
                        <h6 className="font-semibold text-[1rem]">Sign Up</h6>
                        <p className="font-normal text-[.875rem] opacity-[0.7]">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ipsa eligendi expedita aliquam quaerat nulla
                          voluptas facilis. Porro rem voluptates possimus, ad,
                          autem quae culpa architecto, quam labore blanditiis at
                          ratione.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-white text-center p-[3rem] flex items-center justify-center">
                      <div>
                        <div className="mb-[3rem]">
                          <Image
                            height={100}
                            width={100}
                            src="/assets/images/authentication/2.png"
                            className="authentication-image"
                            alt=""
                          />
                        </div>
                        <h6 className="font-semibold text-[1rem]">Sign Up</h6>
                        <p className="font-normal text-[.875rem] opacity-[0.7]">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ipsa eligendi expedita aliquam quaerat nulla
                          voluptas facilis. Porro rem voluptates possimus, ad,
                          autem quae culpa architecto, quam labore blanditiis at
                          ratione.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {theme.modal && (
        <Model title={theme.modalTitle} message={theme.modalMessage} />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps, { ThemeChanger })(Signupcover);
