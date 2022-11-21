import "./App.css";
import { Container } from "./components/Container";
import { HeaderHeader } from "./components/HeaderHeader";
import { skills, skillsToLearn } from "./skills.js";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Container>
        <HeaderHeader />
        <main>
          <Skills title="My Skillset includes 🛠" skills={skills} />
          <Skills title="What I want to learn next 🚀" skills={skillsToLearn} />
          <Portfolio />
        </main>
        <Footer />
      </Container>
    </div>
  );
}

export default App;