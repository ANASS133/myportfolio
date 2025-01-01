import React, { useEffect, useRef } from 'react';

export default function First() {
    const textRef = useRef(null);

    useEffect(() => {
        const textLoad = () => {
            const texts = [
                "" ,"" ,"" ,"" ,"" ,"" , "A", "An", "Ana", "Anas", "Anass", "Anass ", "Anass S", "Anass Si", "Anass Sib", "Anass Sibbi",
                "Anass Sibbi", "Anass Sibbi", "Anass Sibbi", "Anass Sibbi", "Anass Sibbi",
                "Anass Sibb", "Anass Sib", "Anass Si", "Anass S", "Anass", "Ana", "An", "A", "",
                "W", "We", "Web", "Web F", "Web Fu", "Web Ful", "Web Full", "Web Full S", "Web Full St", "Web Full Stack",
                "Web Full Stack D", "Web Full Stack De", "Web Full Stack Dev", "Web Full Stack Deve", "Web Full Stack Devel",
                "Web Full Stack Develo", "Web Full Stack Developer", "Web Full Stack Developer", "Web Full Stack Developer",
                "Web Full Stack Developer", "Web Full Stack Developer", "Web Full Stack Developer", "Web Full Stack Developer", "Web Full Stack Developer",
                 "Web Full Stack Developer","Web Full Stack Develo", "Web Full Stack Devel", "Web Full Stack Deve", "Web Full Stack Dev",
                "Web Full Stack D", "Web Full Stack", "Web Full Sta", "Web Full St", "Web Full S", "Web Full",
                "Web Ful", "Web Fu", "Web F", "Web", "We", "W", ""
            ];

            const intervalTime = 180; // Time between updates (ms)
            let index = 0;

            const updateText = () => {
                if (textRef.current) {
                    textRef.current.textContent = texts[index];
                }
                index++;
                if (index < texts.length) {
                    setTimeout(updateText, intervalTime);
                }
            };

            updateText();
        };

        // Load text once
        textLoad();

        // Repeat text animation every 13.5 seconds
        const intervalId = setInterval(() => {
            textLoad();
        }, 13500);

        // Cleanup on unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="con">
                <div className="firstp">
                    <span className='firstpart'>Hello, I'm </span><br />
                    <span className='secondpart' ref={textRef}></span>
                </div>

                {/* Button animated */}
                <div className="buttons">
                    <button className="blob-btn">
                        Contact me
                        <span className="blob-btn__inner">
                            <span className="blob-btn__blobs">
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                            </span>
                        </span>
                    </button>
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    );
}
