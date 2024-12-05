import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import "./index.scss";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const getPortfolio = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "portfolio"));
                setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
            } catch (error) {
                console.error("Error fetching portfolio: ", error);
            }
        };

        getPortfolio();
    }, []);

    const renderPortfolio = () => {
        return portfolio.map((port, idx) => (
            <div className="image-box" key={idx}>
                <img src={port.image} className="portfolio-image" alt="portfolio" />
                <div className="content">
                    <p className="title">{port.name}</p>
                    <h4 className="description">{port.description}</h4>
                    <button
                        className="btn"
                        onClick={() => window.open(port.url)}
                    >
                        View
                    </button>
                </div>
            </div>
        ));
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
                <div className="images-container">{renderPortfolio()}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Portfolio;
