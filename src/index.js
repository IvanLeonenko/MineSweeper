import React from "react";
import ReactDOM from 'react-dom';
import {AppContainer} from "react-hot-loader";
import App from "components/app/App";

const rootEl = document.getElementById("root");

const renderComponent = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        rootEl
    );
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./components/app/App", () => {
        renderComponent(App);
    });
}
