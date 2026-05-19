import './App.css'
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa'

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="nav">
        <h2>Mamatha</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="section">
        <h1>Hi, I'm Mamatha</h1>
        <p>Computer Science Engineer | Full Stack Developer</p>
      </section>

      {/* About */}
      <section id="about" className="section light">
        <h2>About Me</h2>
        <p>
          Computer Science Engineering student skilled in programming, web development, 
          and frontend development. Focused on building impactful solutions and continuous learning.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="card">Java</div>
          <div className="card">Python</div>
          <div className="card">C</div>
          <div className="card">JavaScript</div>
          <div className="card">React.js</div>
          <div className="card">Node.js</div>
          <div className="card">Express.js</div>
          <div className="card">MongoDB</div>
          <div className="card">MySQL</div>
          <div className="card">HTML/CSS</div>
          <div className="card">TypeScript</div>
          <div className="card">Tailwind CSS</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section light">
        <h2>Projects</h2>
        <div className="projects-container">
          
          {/* Project 1 - Blockchain Voting System (Major Project - April 2026) */}
          <div className="card project-card">
            <h3>🔗 Blockchain-Based Online Voting System</h3>
            <p className="project-tech">Blockchain | Ethereum | MetaMask | React | Node.js</p>
            <p className="project-date">April 2026 (Major Project)</p>
            <p className="project-desc">
              Secure online voting system using Blockchain technology for transparent and tamper-proof voting records. 
              Built web portal with Admin/User modules, Ethereum Test Network integration, and MetaMask wallet connection 
              for secure blockchain-based voting and validation.
            </p>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code (Coming Soon)
              </a>
            </div>
          </div>

          {/* Project 2 - Edu-Track Academic Management (June 2025) */}
          <div className="card project-card">
            <h3>📚 Edu-Track: Academic Management System</h3>
            <p className="project-tech">React | Node.js | Express.js | MongoDB | HTML/CSS/JS</p>
            <p className="project-date">June 2025 (Mini Project)</p>
            <p className="project-desc">
              Full-stack web app with role-based authentication for Teachers & Students. Features QR code, 
              GPS geofencing, face recognition for secure attendance, plus Quiz, Voting, and Notification modules 
              with CRUD operations and analytics.
            </p>
            <div className="project-links">
              <a href="https://github.com/Byagarimamatha/Edu-Track-Academic-Management-web-application" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
            </div>
          </div>

          {/* Project 3 - Grocify Grocery Tracking System (July 2025) */}
          <div className="card project-card">
            <h3>🛒 Grocify - Grocery Tracking System</h3>
            <p className="project-tech">PHP | MySQL | Chart.js | 3-Tier Architecture</p>
            <p className="project-date">July 2025</p>
            <p className="project-desc">
              Full-stack grocery management system using 3-tier architecture. Features email OTP authentication, 
              live inventory tracking, low-stock alerts, and interactive analytics with Chart.js. 
              Implemented CRUD operations and input validation.
            </p>
            <div className="project-links">
              <a href="https://github.com/Byagarimamatha/Grocify-Grocery-Tracking-System" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
            </div>
          </div>

          {/* Project 4 - Automated Time Analysis Tool */}
          <div className="card project-card">
            <h3>⏱️ Automated Time Analysis Tool</h3>
            <p className="project-tech">C | MATLAB | JavaScript</p>
            <p className="project-desc">
              Developed C programs for runtime data and time-difference analysis. Used MATLAB for visualization 
              and built a web interface for analysis tools. (RCI, DRDO Internship Project)
            </p>
            <div className="project-links">
              <a href="https://github.com/Byagarimamatha/automated-time-analysis-tool" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
            </div>
          </div>

          {/* Project 5 - Todo List App */}
          <div className="card project-card">
            <h3>✅ Todo List App</h3>
            <p className="project-tech">JavaScript | HTML | CSS</p>
            <p className="project-desc">
              Task management application with create, read, update, and delete functionality.
            </p>
            <div className="project-links">
              <a href="https://github.com/Byagarimamatha/todo-list-app" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
            </div>
          </div>

          {/* Project 6 - CodSoft Java Projects */}
          <div className="card project-card">
            <h3>☕ CodSoft Java Projects</h3>
            <p className="project-tech">Java | OOP | CLI Applications</p>
            <p className="project-date">April 2024 - May 2024</p>
            <p className="project-desc">
              Developed Java-based projects during CodSoft internship including ATM Interface, 
              Student Grade Calculator, and Number Guessing Game. Strengthened programming skills 
              and practical understanding of Java development.
            </p>
            <div className="project-links">
              <a href="https://github.com/Byagarimamatha/CODSOFT-" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
            </div>
          </div>

          {/* Project 7 - Catalyst AI Agent */}
          <div className="card project-card">
            <h3>🤖 Catalyst AI Agent</h3>
            <p className="project-tech">Python | AI/ML | Automation</p>
            <p className="project-desc">
              Intelligent agent for automated task processing and decision making. 
              Designed to streamline workflows and enhance productivity through AI-driven automation.
            </p>
            <div className="project-links">
              <a href="https://github.com/Byagarimamatha/catalyst-ai-agent" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
            </div>
          </div>

          {/* Project 8 - Codveda Web Application */}
          <div className="card project-card">
            <h3>💻 Codveda Web Application</h3>
            <p className="project-tech">HTML | CSS | JavaScript | Web Application</p>
            <p className="project-date">Feb 2026</p>
            <p className="project-desc">
              Web application developed during Codveda internship. Built with modern HTML, CSS, and JavaScript
              for responsive and interactive user experience.
            </p>
            <div className="project-links">
              <a href="https://github.com/Byagarimamatha/codveda" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>📧 Email: <a href="mailto:b.mamatha3015@gmail.com">b.mamatha3015@gmail.com</a></p>
        <p>🐙 GitHub: <a href="https://github.com/Byagarimamatha" target="_blank">github.com/Byagarimamatha</a></p>
      </section>
    </div>
  )
}

export default App