import React from "react";
import s from "./app.module.scss";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Projects from "./pages/projects/Projects";
import Nav from "./layout/nav/Nav";
import Footer from "./layout/footer/Footer";

import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className={s.app}>
            <div className={s.bg} />
            <Nav />
            <div className={s.container}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/projects" component={Projects} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
