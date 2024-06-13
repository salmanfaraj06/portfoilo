import Header from "./components/header";
import AboutMe from "./components/aboutme";
import SkillSection from "./components/skillsection";
import Myself from "./components/myself";
import Projects from "./components/projects";
import Awards from "./components/awards";
import Footer from "./components/footer";
import Socials from "./components/socials";
import Blog from "./components/Blog";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Socials />
      <SkillSection />
      <Myself />
      <Projects />
      <Awards />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
