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
    </div>
  );
}

export default App;
