import "./App.css";

function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-brand">
            <span>SWATHI</span> REDDY
          </a>

          <div className="navbar-links">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certification</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* ================= HOME ================= */}

      <section className="hero-section" id="home">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot"></span>
            Open to Internship Opportunities
          </div>

          <div className="profile-image-container">
            <img
              src="/profile.jpeg"
              alt="Swathi Reddy"
              className="profile-image"
            />
          </div>

          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            Swathi <span>Reddy</span>
          </h1>

          <h2 className="hero-title">
            Aspiring Software Developer
          </h2>

          <p className="hero-description">
            Computer Science and Engineering student passionate about
            software development, web technologies, and creating
            practical digital solutions that solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
              <span>→</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Swathireddy-03"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/swathireddy-vutkuri-a21855411/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:swathireddyvutkuri@gmail.com">
              Email ↗
            </a>
          </div>
        </div>
      </section>

      {/* ================= QUICK STATS ================= */}

      <div className="quick-stats">
        <div className="stat-item">
          <strong>8.9</strong>
          <span>B.Tech CGPA</span>
        </div>

        <div className="stat-item">
          <strong>2+</strong>
          <span>Projects Built</span>
        </div>

        <div className="stat-item">
          <strong>88%</strong>
          <span>Intermediate</span>
        </div>

        <div className="stat-item">
          <strong>92%</strong>
          <span>SSC</span>
        </div>
      </div>

      {/* ================= ABOUT ================= */}

      <section id="about">
        <div className="section-heading">
          <span className="section-number">01</span>

          <div>
            <p className="section-label">GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="about-lead">
              I am a Computer Science and Engineering student with a
              strong interest in software development, web technologies,
              and problem-solving.
            </p>

            <p>
              I enjoy transforming ideas into practical applications
              and improving my development skills through hands-on
              projects. My learning journey includes programming,
              frontend development, backend development, databases,
              and software engineering fundamentals.
            </p>

            <p>
              I have developed projects such as{" "}
              <strong>EduVault</strong> and{" "}
              <strong>SafeSeat</strong>, gaining practical experience
              in application development, user interface design,
              backend development, database management, and deployment.
            </p>

            <p>
              I am currently strengthening my knowledge of{" "}
              <strong>Java and Python</strong> while continuing to
              develop my software engineering skills.
            </p>
          </div>

          <div className="about-highlight-card">
            <div className="highlight-icon">&lt;/&gt;</div>

            <h3>What I Bring</h3>

            <div className="highlight-list">
              <div>
                <span>01</span>
                <p>Problem-solving mindset</p>
              </div>

              <div>
                <span>02</span>
                <p>Hands-on project experience</p>
              </div>

              <div>
                <span>03</span>
                <p>Continuous learning</p>
              </div>

              <div>
                <span>04</span>
                <p>Passion for software development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education">
        <div className="section-heading">
          <span className="section-number">02</span>

          <div>
            <p className="section-label">ACADEMIC BACKGROUND</p>
            <h2>Education</h2>
          </div>
        </div>

        <div className="education-timeline">

          {/* B.Tech */}

          <div className="education-item">
            <div className="timeline-dot"></div>

            <div className="education-card">
              <div className="education-top">
                <span className="education-year">
                  2024 – Present
                </span>

                <span className="education-type">
                  B.Tech
                </span>
              </div>

              <div className="education-card-heading">
                <div>
                  <h3>
                    Bachelor of Technology in Computer Science
                    and Engineering
                  </h3>

                  <h4>
                    Vignan Institute of Technology and Science
                  </h4>
                </div>

                <div className="education-score">
                  <strong>8.9</strong>
                  <span>CGPA</span>
                </div>
              </div>

              <p>
                Pursuing B.Tech in Computer Science and Engineering
                with practical exposure to programming, web
                development, databases, data structures, and software
                engineering concepts.
              </p>

              <div className="education-tags">
                <span>Programming</span>
                <span>Web Development</span>
                <span>DBMS</span>
                <span>DSA</span>
              </div>
            </div>
          </div>

          {/* Intermediate */}

          <div className="education-item">
            <div className="timeline-dot"></div>

            <div className="education-card">
              <div className="education-top">
                <span className="education-year">
                  2022 – 2024
                </span>

                <span className="education-type">
                  Intermediate
                </span>
              </div>

              <div className="education-card-heading">
                <div>
                  <h3>Intermediate Education</h3>

                  <h4>Gouthami Junior College</h4>
                </div>

                <div className="education-score">
                  <strong>88%</strong>
                  <span>Score</span>
                </div>
              </div>

              <p>
                Built a strong foundation in analytical thinking,
                logical reasoning, and academic fundamentals while
                preparing for higher education in Computer Science.
              </p>
            </div>
          </div>

          {/* SSC */}

          <div className="education-item">
            <div className="timeline-dot"></div>

            <div className="education-card">
              <div className="education-top">
                <span className="education-year">
                  2021 – 2022
                </span>

                <span className="education-type">
                  SSC
                </span>
              </div>

              <div className="education-card-heading">
                <div>
                  <h3>Secondary School Certificate</h3>

                  <h4>NEWS High School</h4>
                </div>

                <div className="education-score">
                  <strong>92%</strong>
                  <span>Score</span>
                </div>
              </div>

              <p>
                Developed a strong academic foundation in Mathematics,
                Science, English, analytical thinking, and disciplined
                learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills">
        <div className="section-heading">
          <span className="section-number">03</span>

          <div>
            <p className="section-label">MY TOOLKIT</p>
            <h2>Technical Skills</h2>
          </div>
        </div>

        <p className="section-intro">
          Technologies and programming languages I use while learning,
          experimenting, and building practical software projects.
        </p>

        <div className="skills-grid">

          {/* Programming */}

          <div className="skill-category">
            <div className="skill-category-header">
              <span className="skill-icon">01</span>

              <div>
                <h3>Programming</h3>
                <p>Core programming knowledge</p>
              </div>
            </div>

            <div className="skill-tags">
              <span className="skill-completed">
                C <small>Completed</small>
              </span>

              <span className="skill-learning">
                Java <small>Learning</small>
              </span>

              <span className="skill-learning">
                Python <small>Learning</small>
              </span>
            </div>
          </div>

          {/* Frontend */}

          <div className="skill-category">
            <div className="skill-category-header">
              <span className="skill-icon">02</span>

              <div>
                <h3>Frontend Development</h3>
                <p>Web interface fundamentals</p>
              </div>
            </div>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          {/* Backend */}

          <div className="skill-category">
            <div className="skill-category-header">
              <span className="skill-icon">03</span>

              <div>
                <h3>Backend Development</h3>
                <p>Server-side development</p>
              </div>
            </div>

            <div className="skill-tags">
              <span>Node.js</span>
            </div>
          </div>

          {/* Database & Tools */}

          <div className="skill-category">
            <div className="skill-category-header">
              <span className="skill-icon">04</span>

              <div>
                <h3>Tools & Database</h3>
                <p>Development environment</p>
              </div>
            </div>

            <div className="skill-tags">
              <span>MySQL</span>
              <span>SQL</span>
              <span>DBMS</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects">
        <div className="section-heading">
          <span className="section-number">04</span>

          <div>
            <p className="section-label">WHAT I'VE BUILT</p>
            <h2>Featured Projects</h2>
          </div>
        </div>

        <p className="section-intro">
          Practical applications that showcase my development,
          problem-solving, and implementation skills.
        </p>

        <div className="projects-container">

          {/* EduVault */}

          <article className="project-card featured-project">
            <div className="project-card-top">
              <div className="project-number">01</div>

              <span className="project-status">
                Completed
              </span>
            </div>

            <div className="project-visual">
              <div className="project-visual-glow"></div>

              <span className="project-logo">EV</span>

              <span className="project-code">&lt;/&gt;</span>
            </div>

            <h3>EduVault</h3>

            <h4>
              Academic Resource Management Portal
            </h4>

            <p className="project-description">
              A full-stack academic resource management platform
              designed to provide students and faculty with an
              organized system for managing and accessing educational
              resources.
            </p>

            <div className="project-features">
              <div>
                <span>✓</span>
                Faculty resource upload and management
              </div>

              <div>
                <span>✓</span>
                Student resource browsing and access
              </div>

              <div>
                <span>✓</span>
                Resource categorization and management
              </div>

              <div>
                <span>✓</span>
                Cloud-based file storage
              </div>
            </div>

            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>MySQL</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://academic-resource-management.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-live"
              >
                View Live Project
                <span>↗</span>
              </a>

              <a
                href="https://doi.org/10.22214/ijraset.2026.84523"
                target="_blank"
                rel="noopener noreferrer"
                className="project-outline"
              >
                Research Paper
                <span>↗</span>
              </a>

              <a
                href="/certificates/eduvalt-certificate.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="project-outline"
              >
                Certificate
                <span>↗</span>
              </a>
            </div>
          </article>

          {/* SafeSeat */}

          <article className="project-card">
            <div className="project-card-top">
              <div className="project-number">02</div>

              <span className="project-status">
                Completed
              </span>
            </div>

            <div className="project-visual safeseat-visual">
              <div className="project-visual-glow"></div>

              <span className="project-logo">SS</span>

              <span className="project-code">01</span>
            </div>

            <h3>SafeSeat</h3>

            <h4>
              Smart Travel Booking Platform
            </h4>

            <p className="project-description">
              A modern travel booking platform designed to simplify
              bus and train reservations through an intuitive and
              user-friendly experience.
            </p>

            <div className="project-features">
              <div>
                <span>✓</span>
                Bus and train search
              </div>

              <div>
                <span>✓</span>
                Interactive seat selection
              </div>

              <div>
                <span>✓</span>
                Passenger and booking management
              </div>

              <div>
                <span>✓</span>
                Ticket and trip management
              </div>

              <div>
                <span>✓</span>
                Admin dashboard
              </div>
            </div>

            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>MySQL</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://safe-seat-0608.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-live"
              >
                View Live Project
                <span>↗</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* ================= CERTIFICATION ================= */}

      <section id="certificates">
        <div className="section-heading">
          <span className="section-number">05</span>

          <div>
            <p className="section-label">RECOGNITION</p>
            <h2>Certifications</h2>
          </div>
        </div>

        <p className="section-intro">
          Certifications and recognition associated with my academic
          and technical learning.
        </p>

        <div className="certificate-card">

          <div className="certificate-content">

            <div className="certificate-badge">
              RESEARCH PUBLICATION
            </div>

            <h3>
              EduVault – Academic Resource Management Portal
            </h3>

            <p className="certificate-description">
              Research publication associated with the EduVault
              academic resource management project, published in the
              International Journal for Research in Applied Science &
              Engineering Technology.
            </p>

            <div className="certificate-details">

              <div>
                <span>Paper ID</span>
                <strong>IJRASET84523</strong>
              </div>

              <div>
                <span>Volume & Issue</span>
                <strong>Volume 14, Issue VIII</strong>
              </div>

              <div>
                <span>Published</span>
                <strong>August 2026</strong>
              </div>

              <div>
                <span>Journal</span>
                <strong>IJRASET</strong>
              </div>

            </div>

            <div className="project-buttons">
              <a
                href="https://doi.org/10.22214/ijraset.2026.84523"
                target="_blank"
                rel="noopener noreferrer"
                className="project-live"
              >
                View Research Paper
                <span>↗</span>
              </a>
            </div>

          </div>

          <div className="certificate-image-wrapper">
            <img
              src="/certificates/eduvalt-certificate.jpeg"
              alt="EduVault Research Publication Certificate"
            />
          </div>

        </div>

        {/* Infosys Springboard Certifications */}

        <div className="certificate-list">

          {/* C Programming */}

          <div className="certificate-item">

            <div>
              <h3>C Programming</h3>
              <p>Infosys Springboard</p>
            </div>

            <span className="certificate-completed">
              Completed
            </span>

          </div>

          {/* DBMS */}

          <div className="certificate-item">

            <div>
              <h3>
                Database Management Systems (DBMS)
              </h3>

              <p>Infosys Springboard</p>
            </div>

            <span className="certificate-completed">
              Completed
            </span>

          </div>

        </div>
      </section>

      {/* ================= RESUME ================= */}

      <section className="resume-section" id="resume">

        <div className="resume-decoration resume-decoration-one"></div>
        <div className="resume-decoration resume-decoration-two"></div>

        <div className="resume-content">

          <div className="resume-icon">
            CV
          </div>

          <p className="resume-label">
            MY PROFESSIONAL PROFILE
          </p>

          <h2>
            Want to know more about me?
          </h2>

          <p>
            Explore my complete resume to learn more about my
            education, technical skills, projects, certifications,
            and professional interests.
          </p>

          <div className="resume-buttons">

            {/* VIEW RESUME */}

            <a
              href="/Swathi_Reddy_Resume_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-view-button"
            >
              View Resume
              <span>↗</span>
            </a>

            {/* DOWNLOAD RESUME */}

            <a
              href="/Swathi_Reddy_Resume_Final.pdf"
              download="Swathi_Reddy_Resume.pdf"
              className="resume-download-button"
            >
              Download Resume
              <span>↓</span>
            </a>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact">

        <div className="section-heading">

          <span className="section-number">
            06
          </span>

          <div>
            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              Let's Connect
            </h2>
          </div>

        </div>

        <p className="section-intro">
          I'm open to internship opportunities, software development
          roles, collaborative projects, and opportunities to learn
          and grow.
        </p>

        <div className="contact-grid">

          {/* Email */}

          <a
            href="mailto:swathireddyvutkuri@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              @
            </div>

            <div>
              <span>Email</span>

              <strong>
                swathireddyvutkuri@gmail.com
              </strong>
            </div>

            <b>↗</b>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/swathireddy-vutkuri-a21855411/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              in
            </div>

            <div>
              <span>LinkedIn</span>

              <strong>
                Connect professionally
              </strong>
            </div>

            <b>↗</b>
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/Swathireddy-03"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              &lt;/&gt;
            </div>

            <div>
              <span>GitHub</span>

              <strong>
                Explore my projects
              </strong>
            </div>

            <b>↗</b>
          </a>

          {/* Phone */}

          <a
            href="tel:+919502413681"
            className="contact-card"
          >
            <div className="contact-icon">
              ☎
            </div>

            <div>
              <span>Phone</span>

              <strong>
                +91 95024 13681
              </strong>
            </div>

            <b>↗</b>
          </a>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="portfolio-footer">

        <div className="footer-content">

          <div className="footer-brand">
            <span>SWATHI</span> REDDY
          </div>

          <p>
            Aspiring Software Developer • Computer Science & Engineering
          </p>

          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#resume">
              Resume
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          <div className="footer-divider"></div>

          <p className="footer-copyright">
            © 2026 Swathi Reddy. All Rights Reserved.
          </p>

          <p className="footer-built">
            Designed & Developed with care.
          </p>

        </div>

      </footer>
    </>
  );
}

export default App;