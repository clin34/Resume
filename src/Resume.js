import React from "react";
import resumeData from "./resumeData.json";
import "./resume.css"; // Import the CSS file

export default function Resume() {
  return (
    <div className="resume">
      <div id="column-left">
        <h1 id="name">{resumeData.name}</h1>
        <header>
          <p>
            <a href={resumeData.contact.linkedin}>
              {resumeData.contact.linkedin}
            </a>
          </p>
          <p>{resumeData.contact.email}</p>

          <p>
            <a href={resumeData.contact.github}>{resumeData.contact.github}</a>
          </p>
          <p>{resumeData.contact.phone}</p>
        </header>
        <section className="bio">
          <h4>{resumeData.bio}</h4>
        </section>
        <section className="skills">
          <h3>Skills</h3>
          <ul>
            {resumeData.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="education">
          <h3>Education</h3>
          {resumeData.education.map((edu) => (
            <div key={edu.degree} className="degree">
              <h4>{edu.degree}</h4>
              <div>
                {edu.school}, {edu.year}
              </div>
            </div>
          ))}
        </section>
      </div>

      <div class="columns">
        <section className="experience">
          <h3>Work Experiences</h3>
          {resumeData.experience.map((job) => (
            <div key={job.title} className="job">
              <div>
                <span id="title">{job.title}</span>
                <span id="company">
                  <a href={job.homepage}>{job.company}</a>
                </span>
                <span id="date">{job.date}</span>
              </div>
              <div className="description">
                <ul>
                  {job.description.map((task) => (
                    <li>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
