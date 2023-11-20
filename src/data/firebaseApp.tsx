import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getRemoteConfig, getValue, fetchAndActivate, getString, getBoolean, getNumber} from "firebase/remote-config";
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

// remoteConfig.defaultConfig = {
//     "welcome_message": "Welcome"
// };
remoteConfig.settings.minimumFetchIntervalMillis = 1000;



async function setRemoteConfig(config_name: string) {
    try {
        await fetchAndActivate(remoteConfig);
        queryClient.setQueryData(config_name, getString(remoteConfig, config_name));
    } catch (err) {
        console.log(err);
    }
}


export default setRemoteConfig;
