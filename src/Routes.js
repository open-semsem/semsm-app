import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SemsmChat from "./views/SemsmChat.js";
import SemsmOutput from "./views/SemsmOutput.js";
// import SemsmBot from "./views/SemsmBot.js";
import LandingPage from "./views/LandingPage.js";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path='/' component={HomePage} /> */}

                <Route exact  path="/" render={(props) => <LandingPage {...props} />} />

                <Route
                    path="/chat"
                    render={(props) => <SemsmChat {...props} />}
                />
                {/* <Route
                    path="/semsm-bot"
                    render={(props) => <SemsmBot {...props} />}
                /> */}
                {/* <Route
                    path="/semsm-cli"
                    render={(props) => <SemsmCLI {...props} />}
                /> */}
                <Route
                    path="/semsm-output"
                    render={(props) => <SemsmOutput {...props} />}
                />


                <Route
                    render={function () {
                        return <h1>Not Found</h1>;
                    }}
                />
 
                      <Redirect to="/" />

            </Switch>
        );

    }
}

export default Routes;
