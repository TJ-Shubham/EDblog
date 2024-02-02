import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import authService from "../services/apiAuth";
import { login } from "../app/authSlice";
import Input from "../ui/Input";
import Button from "../ui/Button";

function Signup() {

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();

    const createNewUser = async(data) => {
        setError("")
        try {
            const newUserData = await authService.createAccount(data)
            if(newUserData){
                dispatch(login(newUserData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }


  return (
    <div className="flex items-center justify-center w-2/6 my-4">
        <div className="mx-auto w-full bg-white rounded-2xl ">
            <div className="mb-2 flex justify-center">
                <span className="text-1xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-4xl lg:leading-tight my-2">
                    <Link to="/" className="tracking-widest">EDBlog</Link>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-sm text-gray-600 text-center">
                Already have an account?&nbsp;
                <Link to="/login" className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Sign In here
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form onSubmit={handleSubmit(createNewUser)}>
                <div className='space-y-6 mt-5'>
                    <Input
                        label="Full Name: "
                        className="border-gray-200 rounded-lg"
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        label="Email: "
                        className="border-gray-200 rounded-lg"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password: "
                        className="border-gray-200 rounded-lg"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                    />
                    <Button type="submit" className="py-3 px-4 w-full gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Create Account
                    </Button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Signup