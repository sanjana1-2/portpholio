import React from 'react';

function Projects({ projects, loading }) {
  const defaultProjects = [
    {
      _id: '1',
      title: 'LIVE CLASSROOM SYSTEM',
      date: 'OCT - NOV 2025',
      description: 'Real-time live classroom platform. Interactive sessions. Attendance tracking. Resource sharing. Built for scale.',
      features: [
        'Real-time live class sessions',
        'JWT authentication',
        'Attendance tracking',
        'Resource sharing',
        'Scalable API architecture'
      ],
      techStack: ['REACT', 'TAILWIND CSS', 'NODE.JS', 'MYSQL', 'REST APIS']
    },
    {
      _id: '2',
      title: 'ONLINE ZOO PLATFORM',
      date: 'FEB 2025',
      description: 'Responsive zoo platform. Animal database. Ticket booking. Weather integration. Interactive maps. Admin control.',
      features: [
        'Animal information database',
        'Ticket booking system',
        'Weather integration',
        'Interactive maps',
        'Admin management'
      ],
      techStack: ['HTML & CSS', 'TAILWIND CSS', 'JAVASCRIPT', 'PHP', 'MYSQL']
    }
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>PROJECTS</h2>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#b0b0b0' }}>LOADING...</p>
        ) : (
          <div className="projects-grid">
            {displayProjects.map((project) => (
              <div key={project._id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="date">{project.date}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="https://github.com/sanjana1-2" target="_blank" rel="noopener noreferrer" className="link-btn">
                    VIEW CODE
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
