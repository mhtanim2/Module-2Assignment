
import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { getToken, setToken, setUserDetails } from "../helper/SessionHelper";
import { SetProfile } from "../redux/state-slice/profile-slice";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import store from "../redux/store/store";

const BaseURL="http://localhost:4040/api/v1"
const AxiosHeader={headers:{"token":getToken()}}

//Authentication Section
export function RegistrationRequest(email,name,password){
    store.dispatch(ShowLoader());
    let URL=BaseURL+"/registration";
    let PostBody={email:email,name:name,password:password}
    return axios.post(URL,PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                if(res.data['data']['keyPattern']['email']===1){
                    ErrorToast("Email Already Exist")
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong")
                    return false;
                }
            }
            else {
                SuccessToast("Registration Success")
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }).catch((err)=>{
       store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
        return false;
    })
}

export function LoginRequest(email,password){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/login";
    let PostBody={"email":email,"password":password}
    return axios.post(URL,PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            SuccessToast("Login Success")
            return true;
        }
        else{
            ErrorToast("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

//Task Section
export function GetProfileDetails(){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/profileDetails";
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetProfile(res.data['data'][0]))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    });
}

export function ProfileUpdateRequest(email,name,password){
    store.dispatch(ShowLoader())

    let URL=BaseURL+"/profileUpdate";

    let PostBody={email:email,name:name,password:password}
    let UserDetails={email:email,name:name,password:password}

    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){

            SuccessToast("Profile Update Success")
            setUserDetails(UserDetails)

            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}