import {
  MoviesRowsGeneralContainer,
  SlidersGeneralContainer,
} from "./styledComponents/MoviesRows.elements";

import { Slider } from "./Slider";

import { SliderComingSoon } from "./SliderComingSoon";

import {
  actionThrillersSmall,
  familiarFavoritesSmall,
  raunchyComediesSmall,
  romanticSmall,
  trendingNow,
  trendingNowMedium,
  trendingNowSmall,
  raunchyComedies,
  raunchyComediesMedium,
  actionThrillers,
  actionThrillersMedium,
  familiarFavorites,
  familiarFavoritesMedium,
  romantic,
  romanticMedium,
} from "../utils/movies";

import { useEffect, useState } from "react";
import { Movie } from "../typings";
import { baseUrl } from "../constants/movie";

interface Props {
  comingSoon: Movie[];
}

export default function MoviesRows({ comingSoon }: Props) {
  //States

  const initialWidth = typeof window !== "undefined" && window.innerWidth;
  const initialHeight = typeof window !== "undefined" && window.innerHeight;
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);

  // StatesTrendingFullSlider
  const [sliderFull, setSliderFull] = useState(false);

  // StatesTrendingMediumSlider
  const [sliderMedium, setSliderMedium] = useState(false);

  // StateTrendingSmallSlider

  const [sliderSmall, setSliderSmall] = useState(false);

  //Functions

  const cambiarTamaño = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    if (width > 1000) {
      setSliderFull(true);
      setSliderMedium(false);
      setSliderSmall(false);
    }

    if (width <= 1000 && width > 500) {
      setSliderMedium(true);
      setSliderFull(false);
      setSliderSmall(false);
    }

    if (width <= 500) {
      setSliderSmall(true);
      setSliderMedium(false);
      setSliderFull(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (width > 1000) {
      setSliderFull(true);
      setSliderMedium(false);
      setSliderSmall(false);
    } else if (width <= 1000 && width > 500) {
      setSliderMedium(true);
      setSliderFull(false);
      setSliderSmall(false);
    } else if (width <= 500) {
      setSliderFull(false);
      setSliderMedium(false);
      setSliderSmall(true);
    }

    window.addEventListener("resize", cambiarTamaño);

    return () => {
      window.removeEventListener("resize", cambiarTamaño);
    };
  });

  return (
    <MoviesRowsGeneralContainer>
      {/* <p>
        ${width}${height}
      </p> */}
      <SlidersGeneralContainer>
        {sliderFull && (
          <>
            <Slider
              title={trendingNow[0].nameCollection}
              collection={trendingNow}
            />
            <Slider
              title={raunchyComedies[0].nameCollection}
              collection={raunchyComedies}
            />
            <Slider
              title={actionThrillers[0].nameCollection}
              collection={actionThrillers}
            />
            <Slider
              title={familiarFavorites[0].nameCollection}
              collection={familiarFavorites}
            />
            <Slider title={romantic[0].nameCollection} collection={romantic} />
            <SliderComingSoon title="Coming Soon" collection={comingSoon} />
          </>
        )}
        {sliderMedium && (
          <>
            <Slider
              title={trendingNowMedium[0].nameCollection}
              collection={trendingNowMedium}
            />
            <Slider
              title={raunchyComediesMedium[0].nameCollection}
              collection={raunchyComediesMedium}
            />
            <Slider
              title={actionThrillersMedium[0].nameCollection}
              collection={actionThrillersMedium}
            />
            <Slider
              title={familiarFavoritesMedium[0].nameCollection}
              collection={familiarFavoritesMedium}
            />
            <Slider
              title={romanticMedium[0].nameCollection}
              collection={romanticMedium}
            />
            <SliderComingSoon title="Coming Soon" collection={comingSoon} />
          </>
        )}

        {sliderSmall && (
          <>
            <Slider
              title={trendingNowSmall[0].nameCollection}
              collection={trendingNowSmall}
            />
            <Slider
              title={raunchyComediesSmall[0].nameCollection}
              collection={raunchyComediesSmall}
            />
            <Slider
              title={actionThrillersSmall[0].nameCollection}
              collection={actionThrillersSmall}
            />
            <Slider
              title={familiarFavoritesSmall[0].nameCollection}
              collection={familiarFavoritesSmall}
            />
            <Slider
              title={romanticSmall[0].nameCollection}
              collection={romanticSmall}
            />
            <SliderComingSoon title="Coming Soon" collection={comingSoon} />
          </>
        )}
      </SlidersGeneralContainer>
    </MoviesRowsGeneralContainer>
  );
}
