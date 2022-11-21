import { Error } from "./Body/Error";
import { Body, Header, Icon, Section, Subtitle, Title } from "./styled";

export const Portfolio = () => (
  <>
    <Section>
      <Header>
        <Icon />
        <Title>Portfolio</Title>
        <Subtitle>My recent projects</Subtitle>
      </Header>
      <Body>
        <Error></Error>
      </Body>
    </Section>
  </>
);
