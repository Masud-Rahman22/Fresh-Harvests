import { registerUser } from '@/utils/actions/registerUser';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';

const RegisterPage = ({isDropdownOpen2}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const router = useRouter();
    
      const onSubmit = async (data) => {
        console.log(data);
    
        try {
          const res = await registerUser(data)
      if(res.message){
        alert(res.message)
        router.push("/")
      }
        } catch (err) {
          console.error(err.message);
          throw new Error(err.message);
        }
      };
  return (
    <div>
        {
            isDropdownOpen2 && (
                <div className="p-6 lg:p-14 lg:max-h-[100vh] max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl lg:text-3xl text-center font-semibold text-gray-700">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="fullName"
              placeholder="Full Name"
              {...register("fullName")}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email")}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              {...register("password")}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex  lg:flex-row lg:items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                required
              />
              <label
                htmlFor="remember"
                className="ml-2 lg:text-sm text-xs text-gray-700"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="lg:text-sm text-xs text-black underline hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="btn  w-full hover:bg-[#c0561d] mt-6 bg-[#FF6A1A] text-white border-0"
          >
            Register
          </button>

          <div className="relative flex items-center justify-center mt-8">
            <hr className="w-full h-px bg-gray-200" />
            <span className="absolute px-4 bg-white text-gray-700">
              or
            </span>
          </div>
        </form>

        <div className="flex flex-col lg:flex-row items-center mt-2 space-y-4 lg:space-y-0 lg:space-x-4">
          <button
            type="button"
            className="w-full gap-2 font-bold border text-[#212337] bg-white hover:bg-[#3b5998]/90 rounded-lg px-5 py-2.5 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
            </svg>
            Facebook
          </button>
          <button
            type="button"
            className="w-full gap-2 font-bold border text-[#212337] bg-white pr-3 hover:bg-[#4285F4]/90 rounded-lg px-5 py-2.5 flex items-center justify-center"
          >
            <svg viewBox="-3 0 262 262" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"  ></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>
            Google
          </button>
        </div>

        <p className=" text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button onClick={()=>setDropdownOpen(true)} className="text-blue-500">
            Sign in
          </button>
        </p>
      </div>
            )
        }
    </div>
  )
}

export default RegisterPage