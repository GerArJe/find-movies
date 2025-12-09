import { environment } from '../../../../environments/environment';
import { Movie } from '../../../domain/models/movie/movie.model';
import { MovieResponse } from '../models/movie-response.model';

export const movieMapper = (response: MovieResponse): Movie[] =>
  response.results.map((result) => ({
    id: result.id,
    title: result.original_name ?? result.original_title ?? 'No Title',
    image: `${environment.baseImageUrl}/${result.poster_path}`,
    rate: result.vote_average,
  }));
