import React from 'react';
import './discover.css'; // Make sure to import your updated CSS

const AboutMe = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'cv.pdf'; 
        link.click();
    };
    
    return (<>
        <div className="about-me-container">
            <h2 className="about-me-title">ABOUT ME</h2>
            
            <div className="about-me-content">
                <div className="about-me-image">
                    <img src="/me1.png" alt="Anass Sibbi" />
                </div>
                <div className="about-me-info">
                    <h1>Anass Sibbi</h1>
                    <p>
                        I am a 20-year-old aspiring professional from Settat, Morocco. 
                        Passionate about technology and digital development, I am eager to grow my skills and contribute to innovative projects.
                    </p> 
                    <p>Age: 20</p>
                    <p>From: Settat, Morocco</p>
                    <p>Email: sibbianass@gmail.com</p>
                    <p id='phonenumber'>Phone: +212 699771759</p>
                    <button className="glow-on-hover" type="button" onClick={handleDownloadCV}>
                        Download CV
                    </button>
                </div>
            </div>
        </div></>
    );
};

export default AboutMe;
