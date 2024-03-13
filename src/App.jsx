import Header from './components/header';
import AboutMe from './components/aboutme';
import SkillSection from './components/skillsection';
import Myself from './components/myself';
import Projects from './components/projects';
import Awards from './components/awards';
import Footer from './components/footer';
import Socials from './components/socials';
import './App.css';
import Blank from './components/Blank';




function App() {
  

  return (
    <>
    <Header/>
    <AboutMe/>
    <Blank/>
    <Socials/>
    <Blank/>
    <SkillSection/>
    <Myself/>
    <Awards/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
