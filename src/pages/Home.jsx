import React, { useState } from 'react';
import './Home.css'; // Ensure this path is correct

const Profile = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mgvkqopy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="profile-container">

      {/* Profile Section */}
      <div className="profile-box">
        <img src="../public/pic1.jpg" alt="Profile" className="profile-picture" />
        <h1 className="job-title">Benson .C. Kamau</h1>
      </div>

      {/* About Me Section */}
      <div className="about-me-container">
        <h2><b>ABOUT ME</b></h2>
        <p className="about-me-description">
          I’m Benson  Kamau, a passionate and self-driven junior software developer with a diploma in Software Engineering from Zetech University. I have a strong interest in web development, particularly in React.js, PHP, and MySQL, and I enjoy building responsive and user-friendly applications. 

        </p>
      </div>

      {/* Skills Section */}
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-row">
          {[
            { src: "download.png", alt: "PHP", name: "PHP", desc: "Dynamic server-side scripting." },
            { src: "logo192.png", alt: "React.js", name: "React.js", desc: "Interactive UI development." },
            { src: "images.jpeg", alt: "Cyber Security", name: "Cyber Security", desc: "System and data protection." },
            { src: "Html.png", alt: "HTML", name: "HTML", desc: "Web content structure." },
            { src: "Css.jpeg", alt: "CSS", name: "CSS", desc: "Web design and layout." },
            { src: "skill1.png", alt: "Tailwind CSS", name: "Tailwind CSS", desc: "Utility-first CSS framework." },
            { src: "skill2.jpeg", alt: "JavaScript", name: "JavaScript", desc: "Interactive web scripting." },
            { src: "skill3.png", alt: "Node.js", name: "Node.js", desc: "Server-side JavaScript runtime." },
            { src: "skill4.png", alt: "MySQL", name: "MySQL", desc: "Relational database system." },
            { src: "skill5.png", alt: "Git", name: "Git", desc: "Source control system." },
            { src: "skill6.jpeg", alt: "Team Player", name: "Team Player", desc: "Collaborative and dependable." },
            { src: "skill7.jpeg", alt: "Problem Solver", name: "Problem Solver", desc: "Analytical and solution-focused." },
          ].map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.src} alt={skill.alt} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
              <p className="skill-description">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-container">
        <h2 className="projects-title">Some of My Projects</h2>
        <div className="projects-row">
          <div className="project-card">
            <img src="project1.png" alt="Environmental Project" className="project-icon" />
            <p className="project-title">Eco-conservation Website</p>
            <a href="https://github.com/your-github-username/project1" target="_blank" rel="noopener noreferrer">
              <button className="project-github-button">See the project</button>
            </a>
          </div>

          <div className="project-card">
            <img src="project2.jpeg" alt="Library System" className="project-icon" />
            <p className="project-title">Library Management System</p>
            <a href="https://cleancode-solutions.onrender.com" target="_blank" rel="noopener noreferrer">
              <button className="project-github-button">See the project</button>
            </a>
          </div>

          <div className="project-card">
            <img src="project3.jpeg" alt="Shoe Shop" className="project-icon" />
            <p className="project-title">Online Shoe Shop</p>
            <a href="https://github.com/your-github-username/project3" target="_blank" rel="noopener noreferrer">
              <button className="project-github-button">See the project</button>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-container">
        <h2 className="contact-title">Contact Me</h2>

        {successMessage && <div className="success-message">{successMessage}</div>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/254759958410?text=Hi%20Benson!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
        className="whatsapp-chat-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="whatsapp.jpeg" alt="WhatsApp Chat" className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default Profile;
