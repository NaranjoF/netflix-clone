import {
  CardContainer,
  ContentContainerReverse,
  TextContainerReverse,
} from "./styledComponents/EnjoyOnYourTv.elements";

import {
  AnimationContainer,
  AnimationContainerKids,
} from "./styledComponents/DownloadYourShows.elements";

export default function CreateProfile() {
  return (
    <CardContainer>
      <ContentContainerReverse>
        <TextContainerReverse>
          <h1>Create profiles for kids.</h1>
          <h2>
            Send kids on adventures with their favorite characters in a space
            made just for them free with your membership.
          </h2>
        </TextContainerReverse>
        <AnimationContainerKids>
          <img
            src="https://occ-0-5460-114.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
            alt="animationPhoto"
          />
        </AnimationContainerKids>
      </ContentContainerReverse>
    </CardContainer>
  );
}
