import React from "react";
import s from "./nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className={s.navContainer}>
            <nav>
                <ul className={s.nav}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
