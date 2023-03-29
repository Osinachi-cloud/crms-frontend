// import { userInfo as user  } from 'os';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';
import { baseUrl } from '../../data/data';
import UseFormValidator from '../../hooks/UseFormValidator';
import { UsePost } from '../../hooks/UsePost';

const Login = () => {
    const logInDetails = {
        username: "",
        password: ""
    };
    const URL = `${baseUrl}/sign-in`;
    const { setUserInfo, userInfo, token, setToken, setAuth, auth } = useContext(AuthContext);
    const [userLoggedInDetails, setUserLoggedInDetails] = useState(logInDetails);
    const { apiResponse, fetchLoginApi, loading } = UsePost(URL, userInfo);
    const [formErrors, setFormErrors] = useState<any>({});
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const navigate = useNavigate();

    const handleLoginForm = (e: any) => {
        setUserLoggedInDetails({
            ...userLoggedInDetails,
            [e.target.name]: e.target.value,
        })
        // const { name, value } = e.target;
        // setUserLoggedInDetails({ ...userLoggedInDetails, [name]: value });
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleLoginSubmit = (e: any) => {
        e.preventDefault();
        Object.keys(formErrors).length === 0 && fetchLoginApi();
        loading ? <>Loader</>:<>Home</>;
        setFormErrors(UseFormValidator(userInfo));

        Swal.fire({
            title: 'Customize Alert Message',
            text: 'You can use different options to customize the alert message',
            icon: 'warning',
            // confirmButtonText: 'OK',
            // cancelButtonText: 'Cancel',
            // showCancelButton: false,
            // showCloseButton: false,
            timer: 3000,
            showConfirmButton: false
            // timerProgressBar: true
            });
              

        setAuth({
            accessToken:"hello"
        })
        auth.accessToken ? navigate("/dashboard"): navigate("/account/login")

    }

    useEffect(() => {
        setUserInfo(userLoggedInDetails);
        console.log({userLoggedInDetails});
        console.log({userInfo});
    }, [userLoggedInDetails])

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.username}</small>
                        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.username && "border-red-500"}`}
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={userLoggedInDetails.username.trim()}
                            name="username"
                            onChange={handleLoginForm}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.password}</small>
                        <div>
                            <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${formErrors.password && "border-red-500"}`}
                                id="password"
                                type={'password'}
                                placeholder="******************"
                                value={userLoggedInDetails.password.trim()}
                                name="password"
                                onChange={handleLoginForm}
                            />
                            {/* <span onClick={toggleShowPassword}>eye</span> */}

                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={(e: any) => handleLoginSubmit(e)}
                            type="button"
                            // disabled={Object.keys(formErrors).length === 0}
                            >
                            Sign In
                        </button>
                        {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a> */}
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    {/* &copy;2020 Acme Corp. All rights reserved. */}
                </p>
            </div>
        </div>
    )
}

export default Login




