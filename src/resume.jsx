import React from 'react';
import './resume.css'; // Make sure to import your styles

const Resume = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>Resume</h1>
      </header>

      <section className="resume-section">
        <div className="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Licence Excellence in Digital Law and Security</h3>
            <p>2024 - Present</p>
            <p>University of Hassan 1 in Settat</p>
          </div>
          <div className="education-item">
            <h3>Digital Development</h3>
            <p>2022 - 2024</p>
            <p>OFPPT</p>
          </div>
          <div className="education-item">
            <h3>High School Degree</h3>
            <p>2022</p>
            <p>AL Amal high School</p>
          </div>
        </div>

        <div className="experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Web Developer Intern</h3>
            <p>2023 - 2024</p>
            <p>Lemacom</p>
            <ul>
              <li>Designed and developed responsive websites for clients using a combination of front-end technologies such as HTML, CSS, JavaScript, and ReactJS.</li>
              <li>Integrated third-party APIs and services to enhance website functionality, such as payment gateways or social media integration.</li>
              <li>Utilized version control systems (e.g., Git) for efficient collaboration and code management within a team environment.</li>
              <li>Conducted testing and debugging across multiple browsers and devices to ensure optimal performance and compatibility.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
