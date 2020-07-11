import React, { useEffect, useState } from "react";
import s from "./nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [styles, setStyles] = useState("transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset === 0) {
                setStyles("transparent");
            } else {
                setStyles("opaque");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [styles]);

    return (
        <div
            className={
                s.navContainer +
                " " +
                (styles === "transparent" ? s.transparentNav : s.opaqueNav)
            }
        >
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
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact={true}
                            activeStyle={{
                                color: "#c8a2c8",
                                borderBottom: "2px solid #c8a2c8",
                            }}
                            to="/experience"
                        >
                            My Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact={true}
                            activeStyle={{
                                color: "#c8a2c8",
                                borderBottom: "2px solid #c8a2c8",
                            }}
                            to="/work"
                        >
                            My Work
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
