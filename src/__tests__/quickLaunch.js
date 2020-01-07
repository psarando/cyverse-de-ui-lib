import React from "react";
import ReactDOM from "react-dom";

import { getMuiTheme, MuiThemeProvider } from "../lib";
import { QuickLaunchTest } from "../../stories/QuickLaunch.stories";

it("renders quick launch without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <MuiThemeProvider theme={getMuiTheme()}>
            <QuickLaunchTest />
        </MuiThemeProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
