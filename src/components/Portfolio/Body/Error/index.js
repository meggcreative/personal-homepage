import {
  Button,
  WarningIcon,
  WarningInfo,
  WarningTitle,
  Wrapper,
} from "./styled";

export const Error = () => (
  <>
    <Wrapper>
      <WarningIcon />
      <WarningTitle> Ooops! Something went wrong...</WarningTitle>
      <WarningInfo>
        Sorry, failed to load Github projects.
        <br />
        You can chceck them directly on Github.
      </WarningInfo>
      <Button href="https://github.com/meggcreative" target="_blank">
        Go to Github
      </Button>
    </Wrapper>
  </>
);
