import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRepositories,
  selectPersonalHomePageRepo,
  selectPersonalHomePageStatus,
} from "../../features/PersonalHomePage/personalHomePageSlice";
import { Body, Header, Icon, Section, Subtitle, Title } from "./styled";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repoStatus = useSelector(selectPersonalHomePageStatus);
  const repositories = useSelector(selectPersonalHomePageRepo);

  useEffect(() => {
    dispatch(fetchRepositories("meggcreative"));
  }, [dispatch]);

  return (
    <>
      <Section>
        <Header>
          <Icon />
          <Title>Portfolio</Title>
          <Subtitle>My recent projects</Subtitle>
        </Header>
        <Body repoStatus={repoStatus} repositories={repositories}></Body>
      </Section>
    </>
  );
};
