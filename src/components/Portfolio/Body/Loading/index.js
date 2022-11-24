import { LoadingIcon, Paragraph, Wrapper } from "./styled";

export const Loading = () => (
  <>
    <Wrapper>
      <Paragraph>Please wait, projects are being loaded...</Paragraph>
      <LoadingIcon></LoadingIcon>
    </Wrapper>
  </>
);
