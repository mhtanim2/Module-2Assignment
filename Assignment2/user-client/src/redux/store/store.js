import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../state-slice/profile-slice";
import settingsReducer from "../state-slice/settings-slice";

export default configureStore({
    reducer: {
        settings: settingsReducer,
        profile:profileReducer
    }
})