import React from "react";
import { render } from "react-dom";
//обертка на все приложением которая дает возможность всем дочерним компонентам подключиться к сторам 
import { Provider } from "react-redux";

import App from "./App";
import "./../scss/main.scss";
//импортирование созданного стора из конфига
import store from "./sores/index";

render (
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById("root"));



