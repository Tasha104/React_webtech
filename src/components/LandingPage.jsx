import React, { useEffect, useState } from "react";
import "../css/style.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.css";

const LandingPage = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    const plusSlides = (n) => {
        setSlideIndex((prev) => prev + n);
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    const showSlides = (n) => {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("demodots");

        let index = n;
        if (n > slides.length) index = 1;
        if (n < 1) index = slides.length;

        Array.from(slides).forEach((slide) => (slide.style.display = "none"));
        Array.from(dots).forEach((dot) => {
            dot.className = dot.className.replace(" w3-white", "");
        });

        slides[index - 1].style.display = "block";
        dots[index - 1].className += " w3-white";
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "en,fr,rw",
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                },
                "google_translate_element"
            );
        };
    }, []);

    return (
        <div>
            {/* Google Translate */}
            <div id="google_translate_element" style={{ position: "fixed", top: "50px", right: "10px" }}></div>

            {/* Header */}
            <div className="w3-top w3-light-grey">
                <div className="w3-row">
                    <div className="w3-col s3">
                        <a href="/" className="w3-button w3-block">
                            Home
                        </a>
                    </div>
                    <div className="w3-col s3">
                        <a href="/books" className="w3-button w3-block">
                            Books
                        </a>
                    </div>
                    <div className="w3-col s3">
                        <a href="/login" className="w3-button w3-block">
                            Login
                        </a>
                    </div>
                    <div className="w3-col s3">
                        <a href="/register" className="w3-button w3-block">
                            Register
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w3-content" style={{ maxWidth: "1100px", marginTop: "80px", marginBottom: "80px" }}>
                <div className="w3-panel">
                    <h1>
                        <b>Book Library Management</b>
                    </h1>
                </div>

                {/* Slideshow */}
                <div className="w3-container">
                    <div className="mySlides w3-display-container">
                        <img
                            src="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?q=80&w=2070&auto=format&fit=crop"
                            style={{ width: "100%" }}
                            alt="Novels"
                        />
                        <div className="w3-display-topleft w3-container w3-padding-32">
                            <span className="w3-white w3-padding-large w3-animate-bottom">Novels</span>
                        </div>
                    </div>

                    {/* Add other slides similarly */}
                    {/* Navigation buttons */}
                    <div className="w3-container w3-dark-grey w3-padding w3-xlarge">
                        <div className="w3-left" onClick={() => plusSlides(-1)}>
                            <i className="fa fa-arrow-circle-left w3-hover-text-teal"></i>
                        </div>
                        <div className="w3-right" onClick={() => plusSlides(1)}>
                            <i className="fa fa-arrow-circle-right w3-hover-text-teal"></i>
                        </div>
                        <div className="w3-center">
                            <span className="w3-tag demodots w3-border w3-transparent w3-hover-white" onClick={() => currentSlide(1)}></span>
                            <span className="w3-tag demodots w3-border w3-transparent w3-hover-white" onClick={() => currentSlide(2)}></span>
                            <span className="w3-tag demodots w3-border w3-transparent w3-hover-white" onClick={() => currentSlide(3)}></span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="w3-container w3-padding-32 w3-light-grey w3-center">
                    <h4>Book Library Management</h4>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
