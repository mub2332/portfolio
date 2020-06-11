import React from "react";
import s from "./nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className={s.navContainer}>
            <nav>
                <ul className={s.nav}>
                    <li>
                        <NavLink
                            exact={true}
                            activeStyle={{
                                color: "#c8a2c8",
                                borderBottom: "2px solid #c8a2c8",
                            }}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact={true}
                            activeStyle={{
                                color: "#c8a2c8",
                                borderBottom: "2px solid #c8a2c8",
                            }}
                            to="/skills"
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact={true}
                            activeStyle={{
                                color: "#c8a2c8",
                                borderBottom: "2px solid #c8a2c8",
                            }}
                            to="/projects"
                        >
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
