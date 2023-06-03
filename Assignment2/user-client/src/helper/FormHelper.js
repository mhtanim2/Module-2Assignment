import cogoToast from "cogo-toast";
let EmailRegx = /\S+@\S+\.\S+/;

class FormHelper {

    IsEmpty(value) {
        return value.length === 0;
    }


    IsEmail(value) {
        return !EmailRegx.test(value);
    }

    ErrorToast(msg) {
        cogoToast.error(msg, { position: "bottom-center" });
    }
    SuccessToast(msg) {
        cogoToast.success(msg, { position: "bottom-center" });
    }

}

export const {
    IsEmpty,
    IsEmail,
    ErrorToast,
    SuccessToast
} = new FormHelper();