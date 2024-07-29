"use client";
import React from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconBriefcase, IconTool, IconSchool} from "@tabler/icons-react";

export const NavBar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href.split("#")[1];
        window.scrollTo({
            top: document.getElementById(href)?.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    const navItems = [
        {
            name: "Home",
            link: "#home",
            icon: <IconHome className="h-4 w-4 text-neutral-500" title="Home"/>,
        },
        {
            name: "About",
            link: "#about",
            icon: <IconUser className="h-4 w-4 text-neutral-500" title="About Me"/>,
        },
        {
            name: "Experience",
            link: "#experience",
            icon: <IconSchool className="h-4 w-4 text-neutral-500" title="Experience"/>,
        },
        {
            name: "Skills",
            link: "#skills",
            icon: <IconTool className="h-4 w-4 text-neutral-500" title="Skills"/>,
        },
        {
            name: "Projects",
            link: "#projects",
            icon: <IconBriefcase className="h-4 w-4 text-neutral-500" title="Project"/>,
        },
        {
            name: "Contact",
            link: "#contact",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500" title="Contact Me"/>
            ),
        },
    ];
    return (
        <div className="relative w-full items-center justify-center">
            <FloatingNav navItems={navItems} />
        </div>
    );
}