import './App.css'

function App() {
  const name = "Akash Varma";
  const profession = "Full stack Developer";
  const projects = [
    {
      title : "Project One",
      description : "A web application built using React and Node.js",
      link : "#"
    },
    {
      title : "Project Two",
      description : "An eCommerce platform using Springboot",
      link : "#"
    }
  ]

  return (
    <div className='App'>
      {/*This is a header section*/}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

    {/* About Section  */}

    <section id='about' className='about-section'>
      <h2>About Me</h2>
      <p>Hello! I am {name}, a passinate {profession}. I love building web application that solves a really life problems</p>

    </section>

    {/* Projects section */}

    <section id='projects' className='projects-section'>
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (

          <div key = {index} className="project-item">
            <h3>{project.title}</h3>
            <h3>{project.description}</h3>
            <a href={project.link} target = '_blank'  rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>

    </section>

    {/* Contact section */}
    <section id = 'contact'  className="contact-section">

       <h2>Contact Me</h2>
       <p>If you like to get in touh, feel free to email me at <a href="mailto:akashvarma.k@gmail.com">akashvarma.k@gmail.com</a></p>
    </section>

    {/* Footer Section */}

    <footer className="footer">
      <p>2025. All Rights Reserved</p>
    </footer>

    </div>
  )
}

export default App
