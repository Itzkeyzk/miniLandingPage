import logo from './kp.jpg';
import './App.css';

function App() {
  return (
    
    <>
      <header className="header"> 
        <a href="home" class="myLogo"> My <span>Portfolio</span></a>
        <nav class="navbar">
          <a href="#Home">Home</a>
          <a href="#about_me">About</a>
          <a href="#services">Services</a>
          <a href="#Contact">Contact</a>



        </nav>
        </header>
        <section id='home' class='home'>
          <div className='content'>
            <h3>Hi every one</h3>
            <h1>i'm <span>Ishola Kolawole</span></h1>
            <h3>FrontEnd Developer</h3>
            <p>newbeie front end developer with no experince lol. <br/>
            practicing to create a website and improve my frontend skill
            
            </p>
          </div>

        </section>
        <div class="image-container">
          <img src={logo} alt='my profile pic'></img>
        </div>
     
    </>
  );
}

export default App;
