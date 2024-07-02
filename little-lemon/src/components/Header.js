import React from "react";
import bannerImage from ""

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