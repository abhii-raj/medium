// import React from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import LabelInput from "./LabelInput"
import { useState } from "react"
import type { SignupType } from "@abhii_raj/common_app";
import { BACKEND_URL } from '../../config'
const Auth = ({type} : {type : "signup" | "signin"}) => {
    const [postInputs, setpostInputs]   = useState<SignupType>({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    async function sendRequest( ) {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signin"?"signin":"signup"}`, postInputs);

            const { jwt , token } = response.data;
            if(!jwt){
                localStorage.setItem("token" , "Bearer " + token);
            } else if(!token){
                localStorage.setItem("token" , "Bearer " + token);
            }else{
                localStorage.setItem('token' , "man idk");
            }
            navigate('/blog');
            
        }catch(e ){
            
        }
    }
  return <div className="flex  flex-col justify-center h-screen">
    <div className="flex justify-center" >
        <div >
            <div className="px-10">
                <div className="text-3xl  font-extrabold">
                    {type === "signin"?"Sign in to blogs":"Create an account"}
                </div>
                <div className="text-slate-400 mb-10">
                    {type=== "signup"?"Already have an account? ":"Create an account "}
                    <Link className="underline" to={ type === "signup"?"/signin":"/signup"}> {type==="signup"?"SignIn":"SignUp"} </Link>
                </div>
            </div>
            
                <div className={type==="signin"?"hidden":""}>
                <LabelInput  label= "Name" placeholder="Abhishek raj..." onChange={(e)=> {
                    setpostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} />
                </div>
            
            
        
            <LabelInput label= "Email" type = "email" placeholder="abhishek@gmail.com" onChange={(e)=> {
                setpostInputs({
                    ...postInputs,
                    email: e.target.value
                })
            }} />
            <LabelInput label= "Password" placeholder="123456" type="password" onChange={(e)=> {
                setpostInputs({
                    ...postInputs,
                    password: e.target.value
                })
            }} />

            <button type="button" onClick={sendRequest} className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 ">{type === "signup"?"SignUp":"SignIn"}</button>
            
        </div>
    </div>
  </div>
  
}

export default Auth