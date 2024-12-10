import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emsystem from "../../assets/images/emsystem.png"
import cart from "../../assets/images/shopping-cart.png";
import "./index.scss";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            image: emsystem,
            title: "EMSystem",
            description: "Description of Project 1",
        },
        {
            image: cart,
            title: "Shopping-Cart",
            description: "Description of Project 2",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="slider-container">
                    <Slider {...settings}>
                        {projects.map((project, index) => (
                            <div key={index} className="slider-item">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="slider-image"
                                />
                                <div className="slider-description">
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Portfolio;
