import { useEffect, useRef, useState } from "react";
import { raunchyComedies } from "../utils/movies";
import { v4 as uuid } from "uuid";
import { MovieSlider } from "../typings";
import {
  Arrow,
  ArrowLeft,
  ArrowLeftContainer,
  ArrowRight,
  ArrowRightContainer,
  Indicator,
  MovieRowBody,
  MovieRowHeader,
  MoviesRowsContainerPrincipal,
  PaginationIndicator,
  RowContainer,
} from "./styledComponents/MoviesRows.elements";

interface Props {
  title: string | undefined;
  collection: MovieSlider[];
}

export const Slider = ({ title, collection }: Props) => {
  //Refs

  // TrendingRefsFullSlider

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

  // TrendingRefsFullSlider End

  // TrendingRefsMediumSlider
  const sliderMediumRef = useRef<"div" | any | {} | never>(null);

  const arrowRightSliderMedium = useRef<"div" | any | {} | never>(null);

  const arrowLeftSliderMedium = useRef<"div" | any | {} | never>(null);

  const arrowLeftContainerMedium = useRef<"div" | any | {} | never>(null);

  const arrowRightContainerMedium = useRef<"div" | any | {} | never>(null);

  const indicatorOneSm = useRef<"li" | any | {} | never>(null);

  const indicatorTwoSm = useRef<"li" | any | {} | never>(null);

  const indicatorThreeSm = useRef<"li" | any | {} | never>(null);

  const indicatorFourSm = useRef<"li" | any | {} | never>(null);

  const indicatorFiveSm = useRef<"li" | any | {} | never>(null);

  const indicatorSixSm = useRef<"li" | any | {} | never>(null);

  const indicatorSevenSm = useRef<"li" | any | {} | never>(null);

  const indicatorEightSm = useRef<"li" | any | {} | never>(null);

  const indicatorNineSm = useRef<"li" | any | {} | never>(null);

  // TrendingRefsMediumSlider End

  // TrendingRefsSmallSlider

  const sliderSmallRef = useRef<"div" | any | {} | never>(null);

  const arrowRightSliderSmall = useRef<"div" | any | {} | never>(null);

  const arrowLeftSliderSmall = useRef<"div" | any | {} | never>(null);

  const arrowLeftContainerSmall = useRef<"div" | any | {} | never>(null);

  const arrowRightContainerSmall = useRef<"div" | any | {} | never>(null);

  const indicatorOneSs = useRef<"li" | any | {} | never>(null);

  const indicatorTwoSs = useRef<"li" | any | {} | never>(null);

  const indicatorThreeSs = useRef<"li" | any | {} | never>(null);

  const indicatorFourSs = useRef<"li" | any | {} | never>(null);

  const indicatorFiveSs = useRef<"li" | any | {} | never>(null);

  const indicatorSixSs = useRef<"li" | any | {} | never>(null);

  const indicatorSevenSs = useRef<"li" | any | {} | never>(null);

  const indicatorEightSs = useRef<"li" | any | {} | never>(null);

  const indicatorNineSs = useRef<"li" | any | {} | never>(null);

  const indicatorTenSs = useRef<"li" | any | {} | never>(null);

  const indicatorElevenSs = useRef<"li" | any | {} | never>(null);

  const indicatorTwelveSs = useRef<"li" | any | {} | never>(null);

  const indicatorThirteenSs = useRef<"li" | any | {} | never>(null);

  const indicatorFourteenSs = useRef<"li" | any | {} | never>(null);

  //States

  const initialWidth = typeof window !== "undefined" && window.innerWidth;
  const initialHeight = typeof window !== "undefined" && window.innerHeight;
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);

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
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    const sliderRow = sliderFullRef.current;

    if (width > 1000) {
      setSliderFull(true);
      setSliderMedium(false);
      setSliderMediumIndex(0);
    } else {
      setSliderFull(false);
    }

    if (width <= 1000 && width > 500) {
      setSliderMedium(true);
      setSliderFullIndex(0);
      setSliderSmallIndex(0);
    }

    if (width <= 500) {
      setSliderSmall(true);
      setSliderMediumIndex(0);
    }
  };

  const moveSliderRight = () => {
    const sliderRow = sliderFullRef.current;
    const sliderRowMedium = sliderMediumRef.current;
    const sliderRowSmall = sliderSmallRef.current;
    const arrowLeftCont = arrowLeftContainerFull.current;
    const arrowRightCont = arrowRightContainerFull.current;
    const arrowLeftContMedium = arrowLeftContainerMedium.current;
    const arrowRightContMedium = arrowRightContainerMedium.current;
    const arrowLeftContSmall = arrowLeftContainerSmall.current;
    const arrowRightContSmall = arrowRightContainerSmall.current;
    const indicator1 = indicatorOneSf.current;
    const indicator2 = indicatorTwoSf.current;
    const indicator3 = indicatorThreeSf.current;
    const indicator4 = indicatorFourSf.current;
    const indicator5 = indicatorFiveSf.current;
    const indicator1Sm = indicatorOneSm.current;
    const indicator2Sm = indicatorTwoSm.current;
    const indicator3Sm = indicatorThreeSm.current;
    const indicator4Sm = indicatorFourSm.current;
    const indicator5Sm = indicatorFiveSm.current;
    const indicator6Sm = indicatorSixSm.current;
    const indicator7Sm = indicatorSevenSm.current;
    const indicator8Sm = indicatorEightSm.current;
    const indicator9Sm = indicatorNineSm.current;
    const indicator1Ss = indicatorOneSs.current;
    const indicator2Ss = indicatorTwoSs.current;
    const indicator3Ss = indicatorThreeSs.current;
    const indicator4Ss = indicatorFourSs.current;
    const indicator5Ss = indicatorFiveSs.current;
    const indicator6Ss = indicatorSixSs.current;
    const indicator7Ss = indicatorSevenSs.current;
    const indicator8Ss = indicatorEightSs.current;
    const indicator9Ss = indicatorNineSs.current;
    const indicator10Ss = indicatorTenSs.current;
    const indicator11Ss = indicatorElevenSs.current;
    const indicator12Ss = indicatorTwelveSs.current;
    const indicator13Ss = indicatorThirteenSs.current;
    const indicator14Ss = indicatorFourteenSs.current;

    if (sliderFull) {
      if (sliderFullIndex <= 3) {
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
        } else if (sliderFullIndex === 3) {
          indicator4.style.backgroundColor = "#4d4d4d";
          indicator5.style.backgroundColor = "#aaa";
          arrowRightCont.style.opacity = "0";
          arrowRightCont.style.zIndex = "-1";
        }
      }, 540);
    } else if (sliderMedium) {
      if (sliderMediumIndex <= 7) {
        sliderRowMedium.style.transform = `translateX(calc(${
          sliderMediumIndex + 1
        } * -100%))`;
        setSliderMediumIndex(sliderMediumIndex + 1);
      }

      setTimeout(() => {
        if (sliderMediumIndex === 0) {
          arrowLeftContMedium.style.opacity = "1";
          arrowLeftContMedium.style.zIndex = "1";
          indicator1Sm.style.backgroundColor = "#4d4d4d";
          indicator2Sm.style.backgroundColor = "#aaa";
        } else if (sliderMediumIndex === 1) {
          indicator2Sm.style.backgroundColor = "#4d4d4d";
          indicator3Sm.style.backgroundColor = "#aaa";
        } else if (sliderMediumIndex === 2) {
          indicator3Sm.style.backgroundColor = "#4d4d4d";
          indicator4Sm.style.backgroundColor = "#aaa";
        } else if (sliderMediumIndex === 3) {
          indicator4Sm.style.backgroundColor = "#4d4d4d";
          indicator5Sm.style.backgroundColor = "#aaa";
        } else if (sliderMediumIndex === 4) {
          indicator5Sm.style.backgroundColor = "#4d4d4d";
          indicator6Sm.style.backgroundColor = "#aaa";
        } else if (sliderMediumIndex === 5) {
          indicator6Sm.style.backgroundColor = "#4d4d4d";
          indicator7Sm.style.backgroundColor = "#aaa";
        } else if (sliderMediumIndex === 6) {
          indicator7Sm.style.backgroundColor = "#4d4d4d";
          indicator8Sm.style.backgroundColor = "#aaa";
        } else if (sliderMediumIndex === 7) {
          indicator8Sm.style.backgroundColor = "#4d4d4d";
          indicator9Sm.style.backgroundColor = "#aaa";
          arrowRightContMedium.style.opacity = "0";
          arrowRightContMedium.style.zIndex = "-1";
        }
      }, 540);
    } else if (sliderSmall) {
      if (sliderSmallIndex <= 12) {
        sliderRowSmall.style.transform = `translateX(calc(${
          sliderSmallIndex + 1
        } * -100%))`;
        setSliderSmallIndex(sliderSmallIndex + 1);
      }

      setTimeout(() => {
        if (sliderSmallIndex === 0) {
          arrowLeftContSmall.style.opacity = "1";
          arrowLeftContSmall.style.zIndex = "1";
          indicator1Ss.style.backgroundColor = "#4d4d4d";
          indicator2Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 1) {
          indicator2Ss.style.backgroundColor = "#4d4d4d";
          indicator3Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 2) {
          indicator3Ss.style.backgroundColor = "#4d4d4d";
          indicator4Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 3) {
          indicator4Ss.style.backgroundColor = "#4d4d4d";
          indicator5Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 4) {
          indicator5Ss.style.backgroundColor = "#4d4d4d";
          indicator6Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 5) {
          indicator6Ss.style.backgroundColor = "#4d4d4d";
          indicator7Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 6) {
          indicator7Ss.style.backgroundColor = "#4d4d4d";
          indicator8Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 7) {
          indicator8Ss.style.backgroundColor = "#4d4d4d";
          indicator9Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 8) {
          indicator9Ss.style.backgroundColor = "#4d4d4d";
          indicator10Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 9) {
          indicator10Ss.style.backgroundColor = "#4d4d4d";
          indicator11Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 10) {
          indicator11Ss.style.backgroundColor = "#4d4d4d";
          indicator12Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 11) {
          indicator12Ss.style.backgroundColor = "#4d4d4d";
          indicator13Ss.style.backgroundColor = "#aaa";
        } else if (sliderSmallIndex === 12) {
          indicator13Ss.style.backgroundColor = "#4d4d4d";
          indicator14Ss.style.backgroundColor = "#aaa";
          arrowRightContSmall.style.opacity = "0";
          arrowRightContSmall.style.zIndex = "-1";
        }
      }, 540);
    }
  };
  //   setTimeout(() => {
  //     arrowLeftCont.style.opacity = "1";
  //   }, 540);
  // };

  const moveSliderLeft = () => {
    const sliderRow = sliderFullRef.current;
    const sliderRowMedium = sliderMediumRef.current;
    const sliderRowSmall = sliderSmallRef.current;
    const arrowLeftContFull = arrowLeftContainerFull.current;
    const arrowRightContFull = arrowRightContainerFull.current;
    const arrowLeftContMedium = arrowLeftContainerMedium.current;
    const arrowRightContMedium = arrowRightContainerMedium.current;
    const arrowLeftContSmall = arrowLeftContainerSmall.current;
    const arrowRightContSmall = arrowRightContainerSmall.current;
    const indicator1 = indicatorOneSf.current;
    const indicator2 = indicatorTwoSf.current;
    const indicator3 = indicatorThreeSf.current;
    const indicator4 = indicatorFourSf.current;
    const indicator5 = indicatorFiveSf.current;
    const indicator1Sm = indicatorOneSm.current;
    const indicator2Sm = indicatorTwoSm.current;
    const indicator3Sm = indicatorThreeSm.current;
    const indicator4Sm = indicatorFourSm.current;
    const indicator5Sm = indicatorFiveSm.current;
    const indicator6Sm = indicatorSixSm.current;
    const indicator7Sm = indicatorSevenSm.current;
    const indicator8Sm = indicatorEightSm.current;
    const indicator9Sm = indicatorNineSm.current;
    const indicator1Ss = indicatorOneSs.current;
    const indicator2Ss = indicatorTwoSs.current;
    const indicator3Ss = indicatorThreeSs.current;
    const indicator4Ss = indicatorFourSs.current;
    const indicator5Ss = indicatorFiveSs.current;
    const indicator6Ss = indicatorSixSs.current;
    const indicator7Ss = indicatorSevenSs.current;
    const indicator8Ss = indicatorEightSs.current;
    const indicator9Ss = indicatorNineSs.current;
    const indicator10Ss = indicatorTenSs.current;
    const indicator11Ss = indicatorElevenSs.current;
    const indicator12Ss = indicatorTwelveSs.current;
    const indicator13Ss = indicatorThirteenSs.current;
    const indicator14Ss = indicatorFourteenSs.current;

    if (sliderFull) {
      if (sliderFullIndex >= 1) {
        sliderRow.style.transform = `translateX(calc(${
          sliderFullIndex - 1
        } * -100%))`;
        setSliderFullIndex(sliderFullIndex - 1);
      }

      setTimeout(() => {
        if (sliderFullIndex === 1) {
          arrowLeftContFull.style.opacity = "0";
          arrowLeftContFull.style.zIndex = "-1";
          indicator1.style.backgroundColor = "#aaa";
          indicator2.style.backgroundColor = "#4d4d4d";
        } else if (sliderFullIndex === 2) {
          indicator2.style.backgroundColor = "#aaa";
          indicator3.style.backgroundColor = "#4d4d4d";
        } else if (sliderFullIndex === 3) {
          indicator3.style.backgroundColor = "#aaa";
          indicator4.style.backgroundColor = "#4d4d4d";
        } else if (sliderFullIndex === 4) {
          arrowRightContFull.style.opacity = "1";
          arrowRightContFull.style.zIndex = "1";
          indicator4.style.backgroundColor = "#aaa";
          indicator5.style.backgroundColor = "#4d4d4d";
        }
      }, 540);
    } else if (sliderMedium) {
      if (sliderMediumIndex >= 1) {
        sliderRowMedium.style.transform = `translateX(calc(${
          sliderMediumIndex - 1
        } * -100%))`;
        setSliderMediumIndex(sliderMediumIndex - 1);
      }

      setTimeout(() => {
        if (sliderMediumIndex === 1) {
          arrowLeftContMedium.style.opacity = "0";
          arrowLeftContMedium.style.zIndex = "-1";
          indicator1Sm.style.backgroundColor = "#aaa";
          indicator2Sm.style.backgroundColor = "#4d4d4d";
        } else if (sliderMediumIndex === 2) {
          indicator2Sm.style.backgroundColor = "#aaa";
          indicator3Sm.style.backgroundColor = "#4d4d4d";
        } else if (sliderMediumIndex === 3) {
          indicator3Sm.style.backgroundColor = "#aaa";
          indicator4Sm.style.backgroundColor = "#4d4d4d";
        } else if (sliderMediumIndex === 4) {
          indicator4Sm.style.backgroundColor = "#aaa";
          indicator5Sm.style.backgroundColor = "#4d4d4d";
        } else if (sliderMediumIndex === 5) {
          indicator5Sm.style.backgroundColor = "#aaa";
          indicator6Sm.style.backgroundColor = "#4d4d4d";
        } else if (sliderMediumIndex === 6) {
          indicator6Sm.style.backgroundColor = "#aaa";
          indicator7Sm.style.backgroundColor = "#4d4d4d";
        } else if (sliderMediumIndex === 7) {
          indicator7Sm.style.backgroundColor = "#aaa";
          indicator8Sm.style.backgroundColor = "#4d4d4d";
        } else if (sliderMediumIndex === 8) {
          indicator8Sm.style.backgroundColor = "#aaa";
          indicator9Sm.style.backgroundColor = "#4d4d4d";
          arrowRightContMedium.style.opacity = "1";
          arrowRightContMedium.style.zIndex = "1";
        }
      }, 540);
    } else if (sliderSmall) {
      if (sliderSmallIndex >= 1) {
        sliderRowSmall.style.transform = `translateX(calc(${
          sliderSmallIndex - 1
        } * -100%))`;
        setSliderSmallIndex(sliderSmallIndex - 1);
      }
      setTimeout(() => {
        if (sliderSmallIndex === 1) {
          arrowLeftContSmall.style.opacity = "0";
          arrowLeftContSmall.style.zIndex = "-1";
          indicator1Ss.style.backgroundColor = "#aaa";
          indicator2Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 2) {
          indicator2Ss.style.backgroundColor = "#aaa";
          indicator3Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 3) {
          indicator3Ss.style.backgroundColor = "#aaa";
          indicator4Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 4) {
          indicator4Ss.style.backgroundColor = "#aaa";
          indicator5Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 5) {
          indicator5Ss.style.backgroundColor = "#aaa";
          indicator6Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 6) {
          indicator6Ss.style.backgroundColor = "#aaa";
          indicator7Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 7) {
          indicator7Ss.style.backgroundColor = "#aaa";
          indicator8Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 8) {
          indicator8Ss.style.backgroundColor = "#aaa";
          indicator9Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 9) {
          indicator9Ss.style.backgroundColor = "#aaa";
          indicator10Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 10) {
          indicator10Ss.style.backgroundColor = "#aaa";
          indicator11Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 11) {
          indicator11Ss.style.backgroundColor = "#aaa";
          indicator12Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 12) {
          indicator12Ss.style.backgroundColor = "#aaa";
          indicator13Ss.style.backgroundColor = "#4d4d4d";
        } else if (sliderSmallIndex === 13) {
          indicator13Ss.style.backgroundColor = "#aaa";
          indicator14Ss.style.backgroundColor = "#4d4d4d";
          arrowRightContSmall.style.opacity = "1";
          arrowRightContSmall.style.zIndex = "1";
        }
      }, 540);
    }
  };

  useEffect(() => {
    if (width > 1000) {
      setSliderFull(true);
      setSliderMedium(false);
    } else if (width <= 1000 && width > 500) {
      setSliderMedium(true);
      setSliderFull(false);
      setSliderSmall(false);
    } else if (width <= 500) {
      setSliderMedium(false);
      setSliderSmall(true);
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
        </PaginationIndicator>
      </MovieRowHeader>
      <MovieRowBody>
        <ArrowLeftContainer
          ref={arrowLeftContainerFull}
          onClick={moveSliderLeft}
        >
          <Arrow ref={arrowLeftSliderFull}>
            <ArrowLeft></ArrowLeft>
          </Arrow>
        </ArrowLeftContainer>
        <RowContainer ref={sliderFullRef}>
          {collection.map((movie?) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={uuid()} src={movie.imageRow} alt="Cover" />
          ))}
        </RowContainer>
        <ArrowRightContainer
          ref={arrowRightContainerFull}
          onClick={moveSliderRight}
        >
          <Arrow ref={arrowRightSliderFull}>
            <ArrowRight></ArrowRight>
          </Arrow>
        </ArrowRightContainer>
      </MovieRowBody>
    </MoviesRowsContainerPrincipal>
  );
};
