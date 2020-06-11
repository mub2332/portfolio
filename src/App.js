import React from "react";
import s from "./app.module.scss";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Nav from "./layout/nav/Nav";
import Footer from "./layout/footer/Footer";

import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

function App() {
    return (
        <>
            <Nav />
            <div className={s.container}>
                <AnimatedSwitch
                    atEnter={{ offset: -200 }}
                    atLeave={{ offset: -200 }}
                    atActive={{ offset: 0 }}
                    mapStyles={(styles) => ({
                        transform: `translateX(${styles.offset}%)`,
                    })}
                >
                    <Route exact path="/" component={Home} />
                    <Route exact path="/skills" component={Skills} />
                    <Route exact path="/projects" component={Projects} />
                </AnimatedSwitch>
            </div>
            <Footer />
        </>
    );
}

export default App;
