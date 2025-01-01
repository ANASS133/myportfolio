import React from 'react';

const Header = () => (
  <>
    <section>
      <nav>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="menuItems">
          <li>
            <a href="#" data-item="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#" data-item="About">
              About
            </a>
          </li>
          <li>
            <a href="#" data-item="Projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#" data-item="Blog">
              Blog
            </a>
          </li>
          <li>
            <a href="#" data-item="Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </>
);

export default Header;
