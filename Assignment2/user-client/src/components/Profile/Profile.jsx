import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetProfileDetails, ProfileUpdateRequest } from "../../APIRequest/APIRequest";
import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormHelper";

const Profile = () => {
    let emailRef,nameRef,passwordRef=useRef();

    useEffect(()=>{
        GetProfileDetails()
    },[])


    const ProfileData = useSelector((state) => state.profile.value);


    let navigate=useNavigate();
    
    

    
    const UpdateMyProfile = () => {
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
            ProfileUpdateRequest(email,name,password).then((result)=>{
                if(result===true){
                    navigate("/")
                }
            })
        }
    }


    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <label>Email Address</label>
                                        <input key={Date.now()} defaultValue={ProfileData['email']}  readOnly={true}  ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>First Name</label>
                                        <input  key={Date.now()} defaultValue={ProfileData['name']} ref={(input)=>nameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    
                                    <div className="col-4 p-2">
                                        <label>Password</label>
                                        <input key={Date.now()} defaultValue={ProfileData['password']}  ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <button onClick={UpdateMyProfile}  className="btn w-100 float-end btn-primary animated fadeInUp">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;