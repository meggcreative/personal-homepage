export const Projects = ({ repositories }) => (
  <>
    <List>
      {repositories.map(({ id, name, description, homepage, html_url }) => (
        <Tile key={id}>
          <Header>{name}</Header>
          <Description>{description}</Description>
          <Demo>
            <Title>Demo:</Title>
            <Url>{homepage}</Url>
          </Demo>
          <Code>
            <Title>Code</Title>
            <Url>{html_url}</Url>
          </Code>
        </Tile>
      ))}
    </List>
  </>
);
