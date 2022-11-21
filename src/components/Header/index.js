import {
  AboutPerson,
  ButtonIcon,
  ButtonWork,
  StyledHeader,
  Image,
  Introduction,
  LinkToMail,
  Name,
  PersonalInfo,
} from "./styled";
import meggZulewska from "./mzulewska.jpg";

export const Header = () => (
  <>
    <StyledHeader>
      <Image src={meggZulewska} alt="Megg Żulewska"></Image>
      <PersonalInfo>
        <Introduction>This is</Introduction>
        <Name>Magdalena Żulewska</Name>
        <AboutPerson>
          👩🏻💻 I am a mother of a son, who wants a better tommorow for him!
          Instead of crocheting, I decided to program 😍🤓!
          <br />
          Frontend Developer specialized in React, currently looking for a new
          job opportunities!
        </AboutPerson>
        <ButtonWork>
          <ButtonIcon />
          <LinkToMail href="mailto:madziapernach@gmail.com">
            Hire&nbsp;Me
          </LinkToMail>
        </ButtonWork>
      </PersonalInfo>
    </StyledHeader>
  </>
);
