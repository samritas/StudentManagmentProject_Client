import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// return
const SignIn = (props) => {

  const navigate = useNavigate();
  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit=(loginData)=>{
     localStorage.setItem("userInfo", JSON.stringify("loggedUser"));
    navigate("/students");
  }

  return (
    <>
      <section class="w-full bg-gray-500">
        <div className="h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
          <div class="flex flex-col md:flex-row items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-full">
            <div class="px-4 py-6 text-white md:mx-6 md:p-12">
              <div class="md:hidden flex text-center">
                <img
                  class="w-48 mx-auto"
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  alt="logo"
                />
              </div>

              <h4 class="my-6 text-xl font-semibold">
                Welcome Sign In to Continue
              </h4>
              <p class="text-sm">
                Waklara is a leading software development and IT consulting
                company providing IT consulting and custom software solutions to
                enterprises worldwide with a mission to solve complex software
                engineering problems.We are tech pioneers with deep knowledge
                and expertise in conceptualizing your business ideas and
                delivering the most feasible solution.
              </p>
            </div>
          </div>

          <div class="px-4 md:px-0 py-4  h-full bg-white w-full">
            <div class="md:mx-6 md:p-12">
              <div class="text-center hidden md:flex">
                <img
                  class="mx-auto w-48"
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  alt="logo"
                />
              </div>
              <div className="items-center  hidden md:flex flex-col justify-center ">
                <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                  Students Management System
                </h4>
              </div>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <p class="mb-4">Please login to your account</p>

                <div>
                  <label
                    for="text"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    UserName
                  </label>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#90EE90] focus:border-[#90EE90] block w-full p-2.5"
                  />
                </div>

                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#90EE90] focus:border-[#90EE90] block w-full p-2.5"
                  />
                </div>

                <div class="mb-12 pb-1 pt-1 text-center">
                  <button
                    type="submit"
                    class="w-full text-white bg-[#90EE90] hover:bg-[#3aa63a] focus:ring-4 focus:outline-none focus:ring-[#9cf09c] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Log in
                  </button>

                  <a href="#!">Forgot password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignIn;
