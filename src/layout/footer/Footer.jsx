import React from "react";
import s from "./footer.module.scss";

import { GithubIcon, LinkedinIcon, GmailIcon } from "../../icons/Icons";

const Footer = () => {
    return (
        <div className={s.footer}>
            <ul>
                <li>
                    <a target="blank" href="https://github.com/mub2332">
                        <GithubIcon />
                    </a>
                </li>
                <li>
                    <a
                        target="blank"
                        href="https://www.linkedin.com/in/mubtasim-mahmud-7b426318b/"
                    >
                        <LinkedinIcon />
                    </a>
                </li>
                <li>
                    <a href="mailto:mubtasimmahmud20@gmail.com">
                        <GmailIcon />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
