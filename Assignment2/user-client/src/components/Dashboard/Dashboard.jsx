import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { GetProfileDetails } from "../../APIRequest/APIRequest";

const Dashboard = () => {


    useEffect(()=>{
        GetProfileDetails()
    },[])

    const ProfileData = useSelector((state) => state.profile.value);
    

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
                                        <input key={Date.now()} defaultValue={ProfileData['email']}  readOnly={true}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Name</label>
                                        <input  key={Date.now()} defaultValue={ProfileData['name']} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    
                                    <div className="col-4 p-2">
                                        <label>Password</label>
                                        <input key={Date.now()} defaultValue={ProfileData['password']} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
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

export default Dashboard;