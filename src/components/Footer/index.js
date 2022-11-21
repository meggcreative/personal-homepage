import {
  FacebookIcon,
  GitHubIcon,
  Icons,
  InstagramIcon,
  LetsTalk,
  LinkedINIcon,
  Mail,
  StyledFooter,
  Summary,
} from "./styled";

export const Footer = () => (
  <>
    <StyledFooter>
      <LetsTalk>LET'S TALK!</LetsTalk>
      <Mail href="mailto:madziapernach@gmail.com">madziapernach@gmail.com</Mail>
      <Summary>
        I am sure, it's safe to say that I have the soul of an artist. I love to
        create and I&nbsp;am not afraid of challenges! <br />
        If You have a website or mobile app in mind and need someone who will
        help&nbsp;to make your ideas come to life, feel free to write to me! 👌{" "}
      </Summary>
      <Icons>
        <GitHubIcon />
        <FacebookIcon />
        <InstagramIcon />
        <LinkedINIcon />
      </Icons>
    </StyledFooter>
  </>
);
