import data from "../apiKey.json";
export const API_KEY = data.apiKey;

const requests = {
   //  fetchTrending: `/discover/movie/?=${API_KEY}&with_genres`,
   fetchNowPlaying: `movie/now_playing?=${API_KEY}`,
   fetchUpcoming: `movie/upcoming?=${API_KEY}`,
   fetchPopular: `discover/movie?=${API_KEY}&sort_by=popularity.desc`,
   fetchTopRated: `/movie/top_rated?=${API_KEY}`,
   fetchActionMovies: `discover/movie?=${API_KEY}&sort_by=popularity.desc&include_video=true&with_genres=28&append_to_response=videos,images`,
   fetchAdventureMovies: `discover/movie?=${API_KEY}&sort_by=popularity.desc&include_video=true&with_genres=12&append_to_response=videos,images`,
   fetchComedyMovies: `discover/movie?=${API_KEY}&sort_by=popularity.desc&include_video=true&with_genres=35&append_to_response=videos,images`,
   fetchCrimeMovies: `discover/movie?=${API_KEY}&sort_by=popularity.desc&include_video=true&with_genres=80&append_to_response=videos,images`,
   fetchDocumentaries: `discover/movie?=${API_KEY}&sort_by=popularity.desc&include_video=true&with_genres=99&append_to_response=videos,images`,
   fetchDramaMovies: `discover/movie?=${API_KEY}&sort_by=popularity.desc&include_video=true&with_genres=18&append_to_response=videos,images`,
   fetchHorrorMovies: `discover/movie?=${API_KEY}&sort_by=popularity.desc&include_video=true&with_genres=27&append_to_response=videos,images`,
   fetchRomanceMovies: `discover/movie?=${API_KEY}&sort_by=popularity.desc&include_video=true&with_genres=10749&append_to_response=videos,images`,
   fetchSciFiMovies: `discover/movie?=${API_KEY}&sort_by=popularity.desc&include_video=true&with_genres=878&append_to_response=videos,images`,
};

export default requests;
