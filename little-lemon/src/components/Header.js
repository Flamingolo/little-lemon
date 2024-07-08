import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../images/Hero image.png"

export const Header = () => {
    return (
        <header className="header">
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem Ipsum</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>

                <div className="banner-img">
                    <img src={bannerImage} alt="Picture of Little Lemon Banner" />
                </div>
            </section>
        </header>
    )
}