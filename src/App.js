import './App.css';
function App() {
  return (
    <div className='main_container'>
      <div className='nav_container'>
      <div className='logo_container'>
        <img src="/images/logo_bee.png" alt="error" />
        <div className='logo_name'>BEE</div>
      </div>
      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Certificates</li>
        <li>Experience</li>
        <li>Resume</li>
      </ul>
    </div>
    <div className='home_container'>
      <div className='home_page_upper'>
        <img src="/images/home_page_bee.png" alt="error" />
        <div className='home_page_name'>Hemanth Paila</div>
      </div>
      <div className='home_page_lower'>
        <div className='home_page_aspired'>aspired</div>
        <div className='home_page_designation'>&nbsp;software development engineer</div>
      </div>
    </div>
    <div className='about_container'>
      <div className='about_heading'>ABOUT</div>
      <div className='content_container'>
        <img src="/images/logo_bee.png" alt="error" />
        <div className='about_content'>I'm Hemanth Paila, a MERN Stack Developer and Software Engineer who thrives in crafting efficient web 
        applications, mirroring the harmony of a beehive.My expertise spans both frontend and backend development, ensuring seamless integration 
        and innovation.I meticulously build code, just as bees craft hexagonal cells, focusing on robustness and scalability.My goal is to elevate 
        businesses, 
        propelling them to new horizons, much like bees take to the sky.I thrive in team environments, understanding that unity, like in a hive, is 
        the source of strength. In tech's ever-evolving landscape, I embrace constant learning, expanding my knowledge and skills.I'm a debugging 
        dynamo, committed to ensuring optimal performance in every project.Let's collaborate to create digital landscapes as productive as a 
        thriving bee colony. </div>
      </div>
      <div className='skills_container'>
        <div className='skills_heading'>SKILLS</div>
        <img src="/images/skills1.jpg" alt="" />
      </div>
    </div>
    </div>
  );
}

export default App;
