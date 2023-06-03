import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationRequest } from "../../APIRequest/APIRequest";
import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormHelper";
const Registration = () => {
  let emailRef,nameRef,passwordRef=useRef();
  const navigate=useNavigate();
  const onRegistration = () => {

    let email=emailRef.value;
    let name=nameRef.value;
    let password= passwordRef.value;
    if(IsEmail(email)){
        ErrorToast("Valid Email Address Required !")
    }
    else if(IsEmpty(name)){
        ErrorToast("First Name Required !")
    }
    else if(IsEmpty(password)){
        ErrorToast("Password Required !")
    }
    else{
        RegistrationRequest(email,name,password).then((result)=>{
            if(result===true){
                navigate("/login")
            }
        })
    }
}
  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-10 col-lg-10 center-screen">
          <div className="card animated fadeIn w-100 p-3">
            <div className="card-body">
              <h4>Sign Up</h4>
              <br />
              <input ref={(input)=>emailRef=input}  
                placeholder="User Email"
                className="form-control animated fadeInUp"
                type="email"
              />
              <br />
              <input
              ref={(input)=>nameRef=input}  
                placeholder="Name"
                className="form-control animated fadeInUp"
                type="text"
              />
              <br />
              <input
              ref={(input)=>passwordRef=input}  
                placeholder="User Password"
                className="form-control animated fadeInUp"
                type="password"
              />
              <br />
              <button onClick={onRegistration} className="btn w-100 float-end btn-primary animated fadeInUp">
                Next
              </button>
              <div className="text-center w-100">
                <Link className="text-center" to="/Login">
                  Sign in
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
