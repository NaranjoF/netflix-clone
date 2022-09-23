import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";
import {
  ArrowContL,
  ArrowContR,
  ArrowLeft,
  ArrowLeftContainer,
  ArrowRight,
  ArrowRightContainer,
  Indicator,
  MovieRowBody,
  MovieRowHeader,
  MoviesRowsContainerPrincipal,
  PaginationIndicator,
  RowContainerComingSoon,
} from "./styledComponents/MoviesRows.elements";

interface Props {
  title: string | undefined;
  collection: Movie[];
}

export const SliderComingSoon = ({ title, collection }: Props) => {
  //Refs

  const arrowRightSliderFull = useRef<"div" | any | {} | never>(null);

  const arrowLeftSliderFull = useRef<"div" | any | {} | never>(null);

  const sliderFullRef = useRef<"div" | any | {} | never>(null);

  const arrowLeftContainerFull = useRef<"div" | any | {} | never>(null);

  const arrowRightContainerFull = useRef<"div" | any | {} | never>(null);

  const indicatorOneSf = useRef<"li" | any | {} | never>(null);

  const indicatorTwoSf = useRef<"li" | any | {} | never>(null);

  const indicatorThreeSf = useRef<"li" | any | {} | never>(null);

  const indicatorFourSf = useRef<"li" | any | {} | never>(null);

  const indicatorFiveSf = useRef<"li" | any | {} | never>(null);

  const indicatorSixSm = useRef<"li" | any | {} | never>(null);

  const indicatorSevenSm = useRef<"li" | any | {} | never>(null);

  const indicatorEightSm = useRef<"li" | any | {} | never>(null);

  const indicatorNineSm = useRef<"li" | any | {} | never>(null);

  const indicatorTenSs = useRef<"li" | any | {} | never>(null);

  const modalRef = useRef<HTMLImageElement | null>(null);

  //States

  const initialWidth = typeof window !== "undefined" && window.innerWidth;
  const [width, setWidth] = useState(initialWidth);

  // StatesTrendingFullSlider
  const [sliderFull, setSliderFull] = useState(false);
  const [sliderFullIndex, setSliderFullIndex] = useState(0);

  // StatesTrendingMediumSlider
  const [sliderMedium, setSliderMedium] = useState(false);
  const [sliderMediumIndex, setSliderMediumIndex] = useState(0);

  // StateTrendingSmallSlider

  const [sliderSmall, setSliderSmall] = useState(false);
  const [sliderSmallIndex, setSliderSmallIndex] = useState(0);

  const cambiarTamaño = () => {
    setWidth(window.innerWidth);
    const sliderRow = sliderFullRef.current;

    if (width > 1000) {
      setSliderFull(true);
      setSliderMedium(false);
      setSliderSmall(false);
      setSliderMediumIndex(0);
    }

    if (width <= 1000 && width > 500) {
      setSliderMedium(true);
      setSliderFull(false);
      setSliderSmall(false);
      setSliderFullIndex(0);
      setSliderSmallIndex(0);
    }

    if (width <= 500) {
      setSliderSmall(true);
      setSliderFull(false);
      setSliderMedium(false);
      setSliderMediumIndex(0);
    }
  };

  const moveSliderRight = () => {
    const sliderRow = sliderFullRef.current;
    const arrowLeftCont = arrowLeftContainerFull.current;
    const arrowRightCont = arrowRightContainerFull.current;
    const indicator1 = indicatorOneSf.current;
    const indicator2 = indicatorTwoSf.current;
    const indicator3 = indicatorThreeSf.current;
    const indicator4 = indicatorFourSf.current;
    const indicator5 = indicatorFiveSf.current;
    const indicator6Sm = indicatorSixSm.current;
    const indicator7Sm = indicatorSevenSm.current;
    const indicator8Sm = indicatorEightSm.current;
    const indicator9Sm = indicatorNineSm.current;
    const indicator10Ss = indicatorTenSs.current;

    if (sliderFull) {
      if (sliderFullIndex <= 2) {
        sliderRow.style.transform = `translateX(calc(${
          sliderFullIndex + 1
        } * -100%))`;
        setSliderFullIndex(sliderFullIndex + 1);
      }

      setTimeout(() => {
        if (sliderFullIndex === 0) {
          arrowLeftCont.style.opacity = "1";
          arrowLeftCont.style.zIndex = "1";
          indicator1.style.backgroundColor = "#4d4d4d";
          indicator2.style.backgroundColor = "#aaa";
        } else if (sliderFullIndex === 1) {
          indicator2.style.backgroundColor = "#4d4d4d";
          indicator3.style.backgroundColor = "#aaa";
        } else if (sliderFullIndex === 2) {
          indicator3.style.backgroundColor = "#4d4d4d";
          indicator4.style.backgroundColor = "#aaa";
          arrowRightCont.style.opacity = "0";
          arrowRightCont.style.zIndex = "-1";
        }
      }, 540);
    } else if (sliderMedium) {
      if (sliderMediumIndex <= 3) {
        sliderRow.style.transform = `translateX(calc(${
          sliderMediumIndex + 1
        } * -100%))`;
        setSliderMediumIndex(sliderMediumIndex + 1);
      }

      setTimeout(() => {
        if (sliderMediumIndex === 0) {
          arrowLeftCont.style.opacity = "1";
          arrowLeftCont.style.zIndex = "1";
          indicator1.style.backgroundColor = "#4d4d4d";
          indicator2.style.backgroundColor = "#aaa";
        } else if (sliderMediumIndex === 1) {
          indicator2.style.backgroundColor = "#4d4d4d";
          indicator3.style.backgroundColor = "#aaa";
        } else if (sliderMediumIndex === 2) {
          indicator3.style.backgroundColor = "#4d4d4d";
          indicator4.style.backgroundColor = "#aaa";
        } else if (sliderMediumIndex === 3) {
          indicator4.style.backgroundColor = "#4d4d4d";
          indicator5.style.backgroundColor = "#aaa";
          arrowRightCont.style.opacity = "0";
          arrowRightCont.style.zIndex = "-1";
        }
      }, 540);
    } else if (sliderSmall) {
      if (sliderSmallIndex <= 8) {
        sliderRow.style.transform = `translateX(calc(${
          sliderSmallIndex + 1
        } * -100%))`;
        setSliderSmallIndex(sliderSmallIndex + 1);
      }

      setTimeout(() => {
        if (sliderSmallIndex === 0) {
          arrowLeftCont.style.opacity = "1";
          arrowLeftCont.style.zIndex = "1";
          indicator1.style.backgroundColor = "#4d4d4d";
          indicator2.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 1) {
          indicator2.style.backgroundColor = "#4d4d4d";
          indicator3.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 2) {
          indicator3.style.backgroundColor = "#4d4d4d";
          indicator4.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 3) {
          indicator4.style.backgroundColor = "#4d4d4d";
          indicator5.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 4) {
          indicator5.style.backgroundColor = "#4d4d4d";
          indicator6Sm.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 5) {
          indicator6Sm.style.backgroundColor = "#4d4d4d";
          indicator7Sm.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 6) {
          indicator7Sm.style.backgroundColor = "#4d4d4d";
          indicator8Sm.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 7) {
          indicator8Sm.style.backgroundColor = "#4d4d4d";
          indicator9Sm.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 8) {
          indicator9Sm.style.backgroundColor = "#4d4d4d";
          indicator10Ss.style.backgroundColor = "#aaa";
          arrowRightCont.style.opacity = "0";
          arrowRightCont.style.zIndex = "-1";
        }
      }, 540);
    }
  };

  const moveSliderLeft = () => {
    const sliderRow = sliderFullRef.current;
    const arrowLeftCont = arrowLeftContainerFull.current;
    const arrowRightCont = arrowRightContainerFull.current;
    const indicator1 = indicatorOneSf.current;
    const indicator2 = indicatorTwoSf.current;
    const indicator3 = indicatorThreeSf.current;
    const indicator4 = indicatorFourSf.current;
    const indicator5 = indicatorFiveSf.current;
    const indicator6Sm = indicatorSixSm.current;
    const indicator7Sm = indicatorSevenSm.current;
    const indicator8Sm = indicatorEightSm.current;
    const indicator9Sm = indicatorNineSm.current;
    const indicator10Ss = indicatorTenSs.current;

    if (sliderFull) {
      if (sliderFullIndex >= 1) {
        sliderRow.style.transform = `translateX(calc(${
          sliderFullIndex - 1
        } * -100%))`;
        setSliderFullIndex(sliderFullIndex - 1);
      }

      setTimeout(() => {
        if (sliderFullIndex === 1) {
          arrowLeftCont.style.opacity = "0";
          arrowLeftCont.style.zIndex = "-1";
          indicator1.style.backgroundColor = "#aaa";
          indicator2.style.backgroundColor = "#4d4d4d";
        } else if (sliderFullIndex === 2) {
          indicator2.style.backgroundColor = "#aaa";
          indicator3.style.backgroundColor = "#4d4d4d";
        } else if (sliderFullIndex === 3) {
          indicator3.style.backgroundColor = "#aaa";
          indicator4.style.backgroundColor = "#4d4d4d";
          arrowRightCont.style.opacity = "1";
          arrowRightCont.style.zIndex = "1";
        }
      }, 540);
    } else if (sliderMedium) {
      if (sliderMediumIndex >= 1) {
        sliderRow.style.transform = `translateX(calc(${
          sliderMediumIndex - 1
        } * -100%))`;
        setSliderMediumIndex(sliderMediumIndex - 1);
      }

      setTimeout(() => {
        if (sliderMediumIndex === 1) {
          arrowLeftCont.style.opacity = "0";
          arrowLeftCont.style.zIndex = "-1";
          indicator1.style.backgroundColor = "#aaa";
          indicator2.style.backgroundColor = "#4d4d4d";
        } else if (sliderMediumIndex === 2) {
          indicator2.style.backgroundColor = "#aaa";
          indicator3.style.backgroundColor = "#4d4d4d";
        } else if (sliderMediumIndex === 3) {
          indicator3.style.backgroundColor = "#aaa";
          indicator4.style.backgroundColor = "#4d4d4d";
        } else if (sliderMediumIndex === 4) {
          indicator4.style.backgroundColor = "#aaa";
          indicator5.style.backgroundColor = "#4d4d4d";
          arrowRightCont.style.opacity = "1";
          arrowRightCont.style.zIndex = "1";
        }
      }, 540);
    } else if (sliderSmall) {
      if (sliderSmallIndex >= 1) {
        sliderRow.style.transform = `translateX(calc(${
          sliderSmallIndex - 1
        } * -100%))`;
        setSliderSmallIndex(sliderSmallIndex - 1);
      }
      setTimeout(() => {
        if (sliderSmallIndex === 1) {
          arrowLeftCont.style.opacity = "0";
          arrowLeftCont.style.zIndex = "-1";
          indicator1.style.backgroundColor = "#aaa";
          indicator2.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 2) {
          indicator2.style.backgroundColor = "#aaa";
          indicator3.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 3) {
          indicator3.style.backgroundColor = "#aaa";
          indicator4.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 4) {
          indicator4.style.backgroundColor = "#aaa";
          indicator5.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 5) {
          indicator5.style.backgroundColor = "#aaa";
          indicator6Sm.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 6) {
          indicator6Sm.style.backgroundColor = "#aaa";
          indicator7Sm.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 7) {
          indicator7Sm.style.backgroundColor = "#aaa";
          indicator8Sm.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 8) {
          indicator8Sm.style.backgroundColor = "#aaa";
          indicator9Sm.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 9) {
          indicator9Sm.style.backgroundColor = "#aaa";
          indicator10Ss.style.backgroundColor = "#4d4d4d";
          arrowRightCont.style.opacity = "1";
          arrowRightCont.style.zIndex = "1";
        }
      }, 540);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const indicator5 = indicatorFiveSf.current;
    const indicator6Sm = indicatorSixSm.current;
    const indicator7Sm = indicatorSevenSm.current;
    const indicator8Sm = indicatorEightSm.current;
    const indicator9Sm = indicatorNineSm.current;
    const indicator10Ss = indicatorTenSs.current;

    if (width > 1000) {
      setSliderFull(true);
      setSliderMedium(false);
      setSliderSmall(false);
      indicator5.style.display = "none";
      indicator6Sm.style.display = "none";
      indicator7Sm.style.display = "none";
      indicator8Sm.style.display = "none";
      indicator9Sm.style.display = "none";
      indicator10Ss.style.display = "none";
    } else if (width <= 1000 && width > 500) {
      setSliderMedium(true);
      setSliderFull(false);
      setSliderSmall(false);
      indicator5.style.display = "inline-block";
      indicator6Sm.style.display = "none";
      indicator7Sm.style.display = "none";
      indicator8Sm.style.display = "none";
      indicator9Sm.style.display = "none";
      indicator10Ss.style.display = "none";
    } else if (width <= 500) {
      setSliderFull(false);
      setSliderMedium(false);
      setSliderSmall(true);
      indicator6Sm.style.display = "inline-block";
      indicator7Sm.style.display = "inline-block";
      indicator8Sm.style.display = "inline-block";
      indicator9Sm.style.display = "inline-block";
      indicator10Ss.style.display = "inline-block";
    }

    window.addEventListener("resize", cambiarTamaño);

    return () => {
      window.removeEventListener("resize", cambiarTamaño);
    };
  });

  return (
    <MoviesRowsContainerPrincipal>
      <MovieRowHeader>
        <p>{title}</p>
        <PaginationIndicator>
          <Indicator ref={indicatorOneSf}></Indicator>
          <Indicator ref={indicatorTwoSf}></Indicator>
          <Indicator ref={indicatorThreeSf}></Indicator>
          <Indicator ref={indicatorFourSf}></Indicator>
          <Indicator ref={indicatorFiveSf}></Indicator>
          <Indicator ref={indicatorSixSm}></Indicator>
          <Indicator ref={indicatorSevenSm}></Indicator>
          <Indicator ref={indicatorEightSm}></Indicator>
          <Indicator ref={indicatorNineSm}></Indicator>
          <Indicator ref={indicatorTenSs}></Indicator>
        </PaginationIndicator>
      </MovieRowHeader>
      <MovieRowBody>
        <ArrowLeftContainer
          ref={arrowLeftContainerFull}
          onClick={moveSliderLeft}
        >
          <ArrowContL ref={arrowLeftSliderFull}>
            <ArrowLeft></ArrowLeft>
          </ArrowContL>
        </ArrowLeftContainer>
        <RowContainerComingSoon ref={sliderFullRef}>
          {collection.map((movie?) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={uuid()}
              src={`${baseUrl}${movie.poster_path}`}
              alt="coverMovie"
            />
          ))}
        </RowContainerComingSoon>
        <ArrowRightContainer
          ref={arrowRightContainerFull}
          onClick={moveSliderRight}
        >
          <ArrowContR ref={arrowRightSliderFull}>
            <ArrowRight></ArrowRight>
          </ArrowContR>
        </ArrowRightContainer>
      </MovieRowBody>
    </MoviesRowsContainerPrincipal>
  );
};
