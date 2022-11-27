import { Container } from "../../components/Container";
import { Header, Footer } from "../../components";
import { Portfolio } from "../../components/Portfolio";
import { Skills } from "../../components/Skills";
import { skills, skillsToLearn } from "../../skills";
import MovieList from "../../components/MovieList";
export const PersonalHomePage = (props) => {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Skills title="My Skillset includes 🛠" skills={skills} />
          <Skills title="What I want to learn next 🚀" skills={skillsToLearn} />
          <Portfolio />
          <MovieList />
        </main>
        <Footer />
      </Container>
    </>
  );
};
