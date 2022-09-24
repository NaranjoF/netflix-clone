export interface Genre {
  id: number;
  name: string;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}

export interface Movie {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieSlider {
  nameCollection?: string | undefined;
  imageRow?: string | undefined;
  maturyRaiting: string;
  duration: string;
  features?: string[] | undefined;
  name: string;
  modalImageMovie?: string;
  releaseYear?: string;
  aboutMovie?: string;
  titleImage?: string;
  backgroundImageMovie?: string;
  cast?: string[];
  Genres?: string[];
  thisMovieIs?: string[];
  Director?: string[] | string;
  writer?: string[];
  match?: string;
  trailer?: string;
}

export interface Element {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}
