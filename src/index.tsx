import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import setRemoteConfig from './firebaseApp'

setRemoteConfig('deploy_dt');
setRemoteConfig('isok');
setRemoteConfig('wel_msg');


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
