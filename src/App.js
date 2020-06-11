import React from "react";
import s from "./app.module.scss";
import Home from "./pages/home/Home";
import Nav from "./layout/nav/Nav";
import Footer from "./layout/footer/Footer";

import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Nav />
            <div className={s.container}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </>
    );
}

export default App;
