import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {


  const [fname,setFname] = useState("");
  
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const navigate = useNavigate();
  

function handleSubmit(e) {
  e.preventDefault();

  const userData = {fname,email,pass}

  fetch('http://localhost:4500/users',{
      method:"post",
      "headers":{"content-type":"application/json"},
      body:JSON.stringify(userData)
  })
  .then((res)=>{ return res.json()})
  // .then()
  

if(fname.length==0  || email.length==0 || pass.length==0)
{
  console.log("error");
}
else 
{
  navigate('/Login');
}


}
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
           
            <form className="mt-8" >
              <div className="m-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                  <input
            value={fname}
            onChange={(e)=>{setFname(e.target.value)}}
              type="text"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              name="firstname"
              placeholder="Full Name"
              id="name"
            />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
            
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="Email"
              aria-describedby="emailHelp"
              name="email"
            />

                  </div>
                </div>

                <div>
                
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="m-2">
           
            <input
              type="password"
              value={pass}
              onChange={(e)=>{setPass(e.target.value)}}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              id="exampleInputPassword"
              name="password"
              placeholder="Password"
            />
          </div>
                 
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleSubmit}
            
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
            {/* ... existing JSX code ... */}
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}


export default Register