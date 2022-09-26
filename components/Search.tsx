/* eslint-disable react/no-unescaped-entities */
import { allMovies } from "../utils/movies";

import { SearchContainer, NoMatches } from "./styledComponents/Search.elements";
import { MovieSlider } from "../typings";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

interface Props {
  searchInfo: string;
}

export default function Search({ searchInfo }: Props) {
  const [content, setContent] = useState(false);

  const movieSearch = allMovies.reduce((a: MovieSlider[], e) => {
    if (!a.find((d) => d.name === e.name)) {
      a.push(e);
    }
    return a;
  }, []);

  const movieSearchFilteredOut = movieSearch.filter((movie) =>
    movie.name.toLocaleLowerCase().includes(searchInfo.toLocaleLowerCase())
  );

  useEffect(() => {
    if (movieSearchFilteredOut.length === 0) {
      setContent(false);
    } else {
      setContent(true);
    }

    console.log(movieSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieSearchFilteredOut]);
  return (
    <SearchContainer>
      {content ? (
        movieSearchFilteredOut.map((movie) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={uuid()}
            src={movie.imageRow || movie.modalImageMovie}
            alt="cover"
          />
        ))
      ) : (
        <NoMatches>
          <p>Your search for "{searchInfo}" did not have any matches.</p>
          <p>Suggestions:</p>
          <ul>
            <li>Try different keywords</li>
            <li>Looking for a movie or TV show?</li>
            <li>Is the name spelled correctly?</li>
          </ul>
        </NoMatches>
      )}
    </SearchContainer>
  );
}
