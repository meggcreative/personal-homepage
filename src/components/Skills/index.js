import { Circle, Header, Item, List, Section } from "./styled";

export const Skills = ({ title, icon, skills }) => (
  <>
    <Section>
      <Header>
        {title}&nbsp;{icon}
      </Header>
      <List>
        {skills.map((skill) => (
          <Item key={skill}>
            <Circle />
            {skill}
          </Item>
        ))}
      </List>
    </Section>
  </>
);
