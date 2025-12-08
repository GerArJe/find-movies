const baseUrl = 'https://api.themoviedb.org/3';

export const environment = {
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWIwZGUzMTlmZTY3Nzc3MGFmOWViMzNmY2Q3YzljNSIsIm5iZiI6MTc2NTE5ODQ0MC42NDEsInN1YiI6IjY5MzZjYTY4MzExMTY0ZmU4ZmQyMDNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A6oPW6Koz7pPja31ErOxBol7yFCR3xkI8ofUmRJ2ZiY',
  featuredTodayMoviesUrl: `${baseUrl}/movie/top_rated?language=en-US`,
  baseImageUrl: 'https://image.tmdb.org/t/p/w500',
};
