import React from "react";
import s from "./projects.module.scss";
import Card from "./Card";
import glipher from "../../images/glipher.png";
import hwa from "../../images/hwa.png";
import glipherWeb from "../../images/glipher-web.png";

const projectData = [
    {
        image: glipherWeb,
        title: "Glipher (Web)",
        description:
            "An application that clips sections of YouTube videos and creates animated GIFs from them",
        links: [
            { text: "View Code", url: "https://github.com/mub2332/glipher" },
            {
                text: "Live Demo",
                url: "https://www.glipher.application.marcelnz.com/",
            },
        ],
        tags: ["React", "SCSS", "Node.js", "AWS"],
    },
    {
        image: glipher,
        title: "Glipher (Chrome)",
        description:
            "A Chrome extension to clip sections of YouTube videos and create animated GIFs from them",
        links: [
            { text: "View Code", url: "https://github.com/mub2332/glipher" },
        ],
        tags: ["jQuery", "Node.js", "AWS"],
    },
    {
        image: hwa,
        title: "Monash HWA Calculator",
        description:
            "A Chrome extension to help honors students calculate their honors weighted average mark easily",
        links: [
            {
                text: "View Code",
                url: "https://github.com/mub2332/monash-hwa-calculator",
            },
        ],
        tags: ["jQuery"],
    },
];

const Projects = () => {
    return (
        <div className={s.animate}>
            <h1 className={s.title}>Personal Projects</h1>
            <div className={s.container}>
                {projectData.map((project) => (
                    <Card {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
