import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import { setAuth } from "../../store/Features/User/AuthenticationSlice";
import useDocumentTitle from "../layout/useDocumentTitle";
import toast from "react-hot-toast";

const AuthForm = () => {
  useDocumentTitle('Login')
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const auth = useSelector((state=>state.authentication.auth))  
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(()=>{
    if (auth) {
      navigate('/')
    }
  },[auth])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) {
      //Register logic
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_USER_URI}/createUser`,
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            age: formData.age,
            gender: formData.gender,
            email: formData.email,
            dob: formData.dob,
            password: formData.password,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        // console.log(response);
        dispatch(setAuth({"user":response.data.user,"auth":true }))
        navigate("/");
        
      } catch (error) {
        dispatch(setAuth({"user":{},"auth":false }))

        // console.log("Error while Registering: ", error);
      }
    } else {
      // Login logic here
      try {
        if (formData.password) {
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_USER_URI}/loginUser`,
            {
              email: formData.email,
              password: formData.password,
            },
            {
              withCredentials: true,
              headers: { "Content-Type": "application/json" },
            }
          );
          //console.log("Login successful:", response.data);
          toast.success(response.data.message, {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          // console.log(formData);
          // console.log(response.data);
          dispatch(setAuth({"user":response.data.user,"auth":true }))

          navigate("/");
        } else {
          toast.error("Password & Confirm Password do not match!!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          // console.log(
          //   "Error While Login: Password & confirm Password do not match"
          // );        
          dispatch(setAuth({"user":{},"auth":false }))
        }
      } catch (error) {
        // console.log(error.response.data.message);
        dispatch(setAuth({"user":{},"auth":false }))

        // const errorMessage =
        //   error.response?.data?.message || "An error occurred";
        // toast.error(errorMessage, {
        //   style: {
        //     borderRadius: "10px",
        //     background: "#333",
        //     color: "#fff",
        //   },
        // });
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-subheadingFont">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegistering ? "Register" : "Login"}
        </h2>

        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <div className="flex flex-wrap mb-4 -mx-2">
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-2">
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-2">
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </>
          )}
          {/* Login form fields */}
          {!isRegistering && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              
            </>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
