import { Error } from "./Error";
import { Loading } from "./Loading";
import { Projects } from "./Projects";

export const Body = ({ repositories, repoStatus }) => {
  switch (repoStatus) {
    case "initial":
      return null;
    case "loading":
      return <Loading />;
    case "success":
      return <Projects repositories={repositories} />;
    case "error":
      return <Error />;

    default:
      throw new Error(`something wrong with status: ${repoStatus}`);
  }
};
