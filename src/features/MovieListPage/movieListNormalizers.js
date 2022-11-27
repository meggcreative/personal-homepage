import {BASE_IMAGE_URL} from './movieEndpoints'
export const normalizePopularMovies=(movieList)=>movieList.map((movie)=>({
    releaseDate:movie.release_date,
    backgroundUrl:movie.backdrop_path?`${BASE_IMAGE_URL}${movie.backdrop_path}`:'https://www.prezydent.pl/storage/image/core_files/2021/9/22/116b78eb0ae0497e6b7b51dc0c36595a/jpg/prezydent/preview/0152.jpg',
    posterUrl:`${BASE_IMAGE_URL}${movie.poster_path}`,
    title:movie.title,
    genres:movie.genre_ids,
    id:movie.id
}))

