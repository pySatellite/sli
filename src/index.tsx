import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getRemoteConfig, getValue, fetchAndActivate, getString} from "firebase/remote-config";
import queryClient from './queryClient'; // Import the queryClient

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA0-WJ-QHyW9Rvobf_5BY3OmEy3ehOcoiI",
    authDomain: "satellite-info.firebaseapp.com",
    projectId: "satellite-info",
    storageBucket: "satellite-info.appspot.com",
    messagingSenderId: "1079553824337",
    appId: "1:1079553824337:web:c473cb1888f1767cb48a70",
    measurementId: "G-K1LY6B5YS9"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(firebase_app);
const analytics = getAnalytics(firebase_app);

remoteConfig.defaultConfig = {
    "welcome_message": "Welcome"
};
// remoteConfig.settings.minimumFetchIntervalMillis = 10000;

console.log("===============================================")
let wel;
fetchAndActivate(remoteConfig)
    .then(() => {
        console.log("*************************************************")
        wel = getString(remoteConfig, "co2rocket")
        console.log(typeof wel)
        console.log(wel)
        console.log("*************************************************")
        const server_version = getString(remoteConfig, "server_version")
        console.log(server_version)
        queryClient.setQueryData('server_version', server_version)


        const hi = getString(remoteConfig, "hi")
        console.log('hi:' + hi)
        queryClient.setQueryData('hi', hi)

        const isok = getString(remoteConfig, "isok")
        const version = getString(remoteConfig, "version")
        const welcom_msg = getString(remoteConfig, "welcom_msg")

        queryClient.setQueryData('isok', isok)
        queryClient.setQueryData('version', version)
        queryClient.setQueryData('welcom_msg', welcom_msg)


    })
    .catch((err) => {
        console.log(err)
    });
console.log("===============================================")
console.log(getValue(remoteConfig, "welcome_messsage"))
console.log(getValue(remoteConfig, "server_version"))
console.log(getValue(remoteConfig, "my_json"))
console.log(getValue(remoteConfig, "myconfig"))

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
