import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
} from "../../features/MovieListPage/movieListSlice";
import { ButtonWork } from "../Header/styled";
import { Circle, Header, Item, List, Section } from "./styled";
const PAGES=[1,2,3,4,5,6,7]
const MovieList = () => {
  const dispatch = useDispatch();
  const {results:movieList,totalResults} = useSelector(selectMovies);
  const [page, setPage] = useState(1);
  const memoizedValue=useMemo(()=>{
    return totalResults*totalResults
  },[totalResults])
  const mySquare=totalResults*totalResults
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);
  const handleClick=(pageNumber)=>{
    setPage(pageNumber)
  }
  return (
    <Section>
      <Header>Movie list</Header>
      <List>
        {movieList.map((movie) => (
          <img style={{ width: 200, height: 200 }} src={movie.backgroundUrl} />
        ))}
      </List>
      <div style={{flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
        {PAGES.map((item)=><p onClick={()=>handleClick(item)} style={{padding:5,backgroundColor:page===item?'blue':'red'}}>{item}</p>)}
      </div>
      <p>Showing {page*10}/{totalResults}</p>
    </Section>
  );
};
export default MovieList;
