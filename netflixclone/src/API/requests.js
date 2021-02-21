const API_KEY = "7d10e9133e40db8a26d7ee976e6795cc";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=tr-TR`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=tr-TR`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=tr-TR`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=tr-TR`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=tr-TR`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=tr-TR`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=tr-TR`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=tr-TR`,
};

export default requests;
