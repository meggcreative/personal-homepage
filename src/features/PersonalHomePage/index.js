import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Portfolio } from "../../components/Portfolio";
import { Skills } from "../../components/Skills";
import { skills, skillsToLearn } from "../../skills";

export const PersonalHomePage = () => (
  <>
    <Container>
      <Header />
      <main>
        <Skills title="My Skillset includes 🛠" skills={skills} />
        <Skills title="What I want to learn next 🚀" skills={skillsToLearn} />
        <Portfolio />
      </main>
      <Footer />
    </Container>
  </>
);
