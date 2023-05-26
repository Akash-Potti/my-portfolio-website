import React, { useState } from "react";


const Header = () => {



    return (
        <header className="flex justify-between items-center px-5 py-4 bg-primary text-white fixed w-full z-10">
            <a href="/" className="logo text-2xl font-bold text-accent-text">
                Akash Potti
            </a>
            <nav className="hidden md:block">
                <ul className="flex">
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;