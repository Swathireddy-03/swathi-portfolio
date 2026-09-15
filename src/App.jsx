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
            <a href="#contact">Contact</a>
          </div>

          {/* ONLY ONE RESUME BUTTON */}
          <a
            href="/Swathi_Reddy_Resume_Final.pdf"
            download
            className="nav-resume"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* ================= HOME ================= */}

      <section className="hero-section" id="home">
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

          <h2 className="hero-title">Aspiring Software Developer</h2>

          <p className="hero-description">
            Computer Science and Engineering student passionate about
            software development, web technologies, and building practical
            solutions to real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
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
              I am a Computer Science and Engineering student with a strong
              interest in software development, web technologies, and
              problem-solving.
            </p>

            <p>
              I enjoy turning ideas into practical applications and
              continuously improving my technical skills through hands-on
              development. My learning journey includes programming, frontend
              development, backend development, databases, and software
              engineering concepts.
            </p>

            <p>
              I have built full-stack applications such as{" "}
              <strong>EduVault</strong> and <strong>SafeSeat</strong>, gaining
              practical experience in designing user interfaces, developing
              APIs, managing databases, integrating cloud services, and
              deploying web applications.
            </p>

            <p>
              I am currently looking for internship and entry-level
              opportunities where I can apply my skills, learn from experienced
              developers, and contribute to meaningful software solutions.
            </p>
          </div>

          <div className="about-highlight-card">
            <div className="highlight-icon">{"</>"}</div>

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
                <p>Passion for building software</p>
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
                <span className="education-year">2024 – Present</span>
                <span className="education-type">B.Tech</span>
              </div>

              <h3>
                Bachelor of Technology in Computer Science and Engineering
              </h3>

              <h4>Vignan Institute of Technology and Science</h4>

              <p>
                Pursuing B.Tech in Computer Science and Engineering with
                practical exposure to programming, web development, database
                management, data structures, and software engineering
                concepts.
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
                <span className="education-year">2022 – 2024</span>
                <span className="education-type">Intermediate</span>
              </div>

              <h3>Intermediate Education</h3>

              <h4>Gouthami Junior College</h4>

              <p>
                Developed a strong foundation in analytical thinking, logical
                reasoning, and subject knowledge while preparing for higher
                education in Computer Science and Engineering.
              </p>
            </div>
          </div>

          {/* SSC */}

          <div className="education-item">
            <div className="timeline-dot"></div>

            <div className="education-card">
              <div className="education-top">
                <span className="education-year">2021 – 2022</span>
                <span className="education-type">SSC</span>
              </div>

              <h3>Secondary School Certificate</h3>

              <h4>NEWS High School</h4>

              <p>
                Built a strong foundation in Mathematics, Science, English,
                analytical thinking, and disciplined learning.
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
          Technologies and tools I use while learning and building practical
          software projects.
        </p>

        <div className="skills-grid">
          {/* Programming */}

          <div className="skill-category">
            <div className="skill-category-header">
              <span className="skill-icon">01</span>
              <h3>Programming Languages</h3>
            </div>

            <div className="skill-tags">
              <span>Java</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>C</span>
            </div>
          </div>

          {/* Frontend */}

          <div className="skill-category">
            <div className="skill-category-header">
              <span className="skill-icon">02</span>
              <h3>Frontend Development</h3>
            </div>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>React.js</span>
              <span>Vite</span>
            </div>
          </div>

          {/* Backend */}

          <div className="skill-category">
            <div className="skill-category-header">
              <span className="skill-icon">03</span>
              <h3>Backend Development</h3>
            </div>

            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
            </div>
          </div>

          {/* Database & Tools */}

          <div className="skill-category">
            <div className="skill-category-header">
              <span className="skill-icon">04</span>
              <h3>Database & Tools</h3>
            </div>

            <div className="skill-tags">
              <span>MySQL</span>
              <span>SQL</span>
              <span>DBMS</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Cloudinary</span>
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
          A selection of full-stack projects that demonstrate my practical
          development experience and ability to build real-world applications.
        </p>

        <div className="projects-container">
          {/* ================= EDUVAULT ================= */}

          <article className="project-card featured-project">
            <div className="project-card-top">
              <div className="project-number">01</div>

              <span className="project-status completed">
                Completed
              </span>
            </div>

            <div className="project-icon">EV</div>

            <h3>EduVault</h3>

            <h4>Academic Resource Management Portal</h4>

            <p className="project-description">
              EduVault is a full-stack academic resource management platform
              designed to provide students and faculty with an organized
              system for managing and accessing educational resources.
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
                Resource categorization and file management
              </div>

              <div>
                <span>✓</span>
                Cloud-based file storage
              </div>
            </div>

            <div className="tech-stack">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MySQL</span>
              <span>Cloudinary</span>
              <span>REST APIs</span>
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
                className="project-live"
              >
                Research Paper
                <span>↗</span>
              </a>

              <a
                href="/certificates/eduvalt-certificate.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="project-live"
              >
                Certificate
                <span>↗</span>
              </a>
            </div>
          </article>

          {/* ================= SAFESEAT ================= */}

          <article className="project-card">
            <div className="project-card-top">
              <div className="project-number">02</div>

              <span className="project-status completed">
                Completed
              </span>
            </div>

            <div className="project-icon">SS</div>

            <h3>SafeSeat</h3>

            <h4>Smart Travel Booking Platform</h4>

            <p className="project-description">
              SafeSeat is a travel booking platform designed to simplify bus
              and train reservations through an intuitive and user-friendly
              interface.
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
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MySQL</span>
              <span>REST APIs</span>
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

      {/* ================= CERTIFICATION / PUBLICATION ================= */}

      <section id="certificates">
        <div className="section-heading">
          <span className="section-number">05</span>

          <div>
            <p className="section-label">RECOGNITION</p>
            <h2>Certification</h2>
          </div>
        </div>

        <p className="section-intro">
          A research publication associated with my EduVault project.
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
              Research publication associated with the EduVault academic
              resource management project, published after review in the
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
              alt="EduVault IJRASET Research Publication Certificate"
            />
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact">
        <div className="section-heading">
          <span className="section-number">06</span>

          <div>
            <p className="section-label">GET IN TOUCH</p>
            <h2>Let's Connect</h2>
          </div>
        </div>

        <p className="section-intro">
          I'm open to internship opportunities, software development roles,
          collaborative projects, and opportunities to learn and grow.
        </p>

        <div className="contact-grid">
          {/* Email */}

          <a
            href="mailto:swathireddyvutkuri@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">@</div>

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
            <div className="contact-icon">in</div>

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
            <div className="contact-icon">&lt;/&gt;</div>

            <div>
              <span>GitHub</span>

              <strong>
                Explore my projects
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
            Aspiring Software Developer • Computer Science Engineering
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
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