import {
  MoviesRowsGeneralContainer,
  MoviesRowsContainerPrincipal,
  RowContainer,
  ImageRowContainer,
  MovieRowHeader,
  PaginationIndicator,
  Indicator,
  ArrowLeftContainer,
  Arrow,
  ArrowLeft,
  ArrowRight,
  ArrowRightContainer,
  MovieRowBody,
  ShadowLeft,
  ShadowRight,
} from "./styledComponents/MoviesRows.elements";

import { v4 as uuid } from "uuid";

import { trendingNow } from "../utils/movies";

import Image from "next/image";

export default function MoviesRows() {
  return (
    <MoviesRowsGeneralContainer>
      <MoviesRowsContainerPrincipal>
        <MovieRowHeader>
          <p>{trendingNow[0].nameCollection}</p>
        </MovieRowHeader>
        <MovieRowBody>
          <ArrowLeftContainer>
            <ShadowLeft />
            <Arrow>
              <ArrowLeft></ArrowLeft>
            </Arrow>
          </ArrowLeftContainer>
          <PaginationIndicator>
            <Indicator></Indicator>
            <Indicator></Indicator>
            <Indicator></Indicator>
            <Indicator></Indicator>
          </PaginationIndicator>
          <RowContainer>
            {trendingNow.map((movie) => (
              <ImageRowContainer key={uuid()}>
                <Image
                  src={movie.imageRow}
                  width="100%"
                  height="56vh"
                  layout="responsive"
                  alt="Cover"
                  style={{ borderRadius: "0.3vw" }}
                />
              </ImageRowContainer>
            ))}
          </RowContainer>
          <ArrowRightContainer>
            <ShadowRight />
            <Arrow>
              <ArrowRight></ArrowRight>
            </Arrow>
          </ArrowRightContainer>
        </MovieRowBody>
      </MoviesRowsContainerPrincipal>
    </MoviesRowsGeneralContainer>
  );
}
