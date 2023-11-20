import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import setRemoteConfig from './data/firebaseApp'

setRemoteConfig('deploy_dt');
setRemoteConfig('isok');
setRemoteConfig('wel_msg');
setRemoteConfig('img_main');
setRemoteConfig('img_not_found');


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
