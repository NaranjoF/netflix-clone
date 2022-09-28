/* eslint-disable @next/next/no-img-element */
import {
  StyledHeaderwob,
  StyledHeaderwb,
  Nav,
  Search,
  StyledImage,
  Bell,
  Item,
  DropDownMenu,
  NavContentLeft,
  DownMenu,
  ButtonMenu,
  ArrowUp,
  DropDownContainer,
  ArrowNDDContainer,
  DefaultMenu,
  NetflixLogo,
  NetflixLogoContainer,
  NavContentRight,
  ProfileContainer,
  ArrowDownBrowse,
  BellSvg,
  SearchBarContainer,
  InputSearch,
  StyledHeader,
  SignInButton,
  NetflixLogoLogin,
} from "./styledComponents/Header.elements";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

interface Props {
  setingSearch?: (state: boolean, search: string) => void;
  inputSearch?: string;
  searchBar?: boolean;
  setSearchBar?: (state: boolean) => void;
  login?: boolean;
}

export default function Header({
  setingSearch,
  inputSearch,
  searchBar,
  setSearchBar,
  login,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 1) {
      setingSearch?.(true, e.target.value);
    } else if (e.target.value.length <= 0) {
      setingSearch?.(false, e.target.value);
    }
  };

  // Start of Handle NavBackground

  const navWithBackground = useRef<"header" | any | {} | never>(null);

  useEffect(() => {
    if (login) {
      const search = searchNavbar.current;
      const searchIcn = searchIcon.current;

      if (searchBar) {
        setTimeout(() => {
          search.style.opacity = 1;
        }, 50);
      }

      const handleScroll = () => {
        if (window.scrollY > 0) {
          navWithBackground.current.style.opacity = 1;
          navWithBackground.current.style.visibility = "visible";
        } else if (window.scrollY <= 0) {
          navWithBackground.current.style.opacity = 0;
          navWithBackground.current.style.visibility = "hidden";
          navWithBackground.current.style.transition =
            "opacity 1s, visibility 0.5s ease-in-out";
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [searchBar, login]);

  // End HandleNavbar

  // Start of States of DropwDownMenu

  const [openMenu, setOpenMenu] = useState(false);

  const [dropDownMenu, setDDownMenu] = useState(false);

  const [toggleMenu, setToggleMenu] = useState(false);

  // End of States of DropwDownMenu

  // Timer Start

  const [sec, setSec] = useState(0);

  var t: NodeJS.Timeout;

  const tick = () => {
    setSec(sec + 1);
  };

  const timer = () => {
    t = setTimeout(() => {
      if (sec === 1) {
        clearTimeout(t);
        setSec(0);
      } else {
        tick();
      }
    }, 1000);
  };

  // Timer end

  // Start of Handle DropwDownMenu

  useEffect(() => {
    if (toggleMenu === true && dropDownMenu === false) {
      setOpenMenu(true);
    } else if (toggleMenu === false && dropDownMenu === false) {
      timer();
      if (sec >= 1) {
        clearTimeout(t);
        setOpenMenu(false);
      }
    } else if (toggleMenu === false && dropDownMenu === true) {
      setOpenMenu(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openMenu, dropDownMenu, toggleMenu, sec]);

  // End of Handle DropwDownMenu

  //refs

  const searchNavbar = useRef<"div" | any | {} | never>(null);

  const searchIcon = useRef<"svg" | any | {} | never>(null);

  return (
    <>
      {login ? (
        <>
          <StyledHeaderwob id="home">
            <Nav>
              <NavContentLeft>
                <NetflixLogoContainer
                  onClick={() => {
                    setingSearch?.(false, ""), setSearchBar?.(false);
                  }}
                >
                  <NetflixLogo
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 276.742"
                  >
                    <path
                      d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
                      fill="#d81f26"
                    />
                  </NetflixLogo>
                </NetflixLogoContainer>

                <DropDownMenu>
                  <div
                    onMouseEnter={() => {
                      setToggleMenu(true);
                    }}
                    onMouseLeave={() => {
                      setToggleMenu(false), timer(), setSec(0);
                    }}
                  >
                    <p style={{ cursor: "pointer" }}>Browse</p>
                    <ArrowDownBrowse />
                  </div>

                  {openMenu && (
                    <ArrowNDDContainer
                      onMouseEnter={() => {
                        setDDownMenu(true);
                      }}
                      onMouseLeave={() => {
                        setDDownMenu(false), setSec(0), timer();
                      }}
                    >
                      <div>
                        <ArrowUp />
                      </div>
                      <DropDownContainer>
                        <DownMenu>
                          <div>
                            <ButtonMenu>Home</ButtonMenu>
                            <ButtonMenu>TV Shows</ButtonMenu>
                            <ButtonMenu>Movies</ButtonMenu>
                            <ButtonMenu>New & Popular</ButtonMenu>
                            <ButtonMenu>My List</ButtonMenu>
                            <ButtonMenu>Browse By Languages</ButtonMenu>
                          </div>
                        </DownMenu>
                      </DropDownContainer>
                    </ArrowNDDContainer>
                  )}
                </DropDownMenu>

                <DefaultMenu>
                  <ul>
                    <Item>
                      <p>
                        <strong>Home</strong>
                      </p>
                    </Item>
                    <Item>
                      <p>TV Shows</p>
                    </Item>
                    <Item>
                      <p>Movies</p>
                    </Item>
                    <Item>
                      <p>New & Popular</p>
                    </Item>
                    <Item>
                      <p>My List</p>
                    </Item>
                    <Item>
                      <p>Browse by Languages</p>
                    </Item>
                  </ul>
                </DefaultMenu>
              </NavContentLeft>

              <NavContentRight>
                {searchBar ? (
                  <SearchBarContainer ref={searchNavbar}>
                    <Search>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Search>
                    <InputSearch
                      type="text"
                      placeholder="Search any movies or series"
                      onChange={handleChange}
                      value={inputSearch}
                    />
                  </SearchBarContainer>
                ) : (
                  <Search onClick={() => setSearchBar?.(true)} ref={searchIcon}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Search>
                )}

                <Bell
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="Notifications"
                  style={{
                    background: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  <BellSvg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                      fill="currentColor"
                    ></path>
                  </BellSvg>
                </Bell>
                <ProfileContainer>
                  <img
                    src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                    alt="profileImage"
                    style={{ borderRadius: "5px", width: "100%" }}
                  />
                </ProfileContainer>
              </NavContentRight>
            </Nav>
          </StyledHeaderwob>

          <StyledHeaderwb ref={navWithBackground}>
            <Nav>
              <NavContentLeft>
                <NetflixLogoContainer>
                  <NetflixLogo
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 276.742"
                  >
                    <path
                      d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
                      fill="#d81f26"
                    />
                  </NetflixLogo>
                </NetflixLogoContainer>

                <DropDownMenu>
                  <div
                    onMouseEnter={() => {
                      setToggleMenu(true);
                    }}
                    onMouseLeave={() => {
                      setToggleMenu(false), timer(), setSec(0);
                    }}
                  >
                    <p style={{ cursor: "pointer" }}>Browse</p>
                    <ArrowDownBrowse />
                  </div>

                  {openMenu && (
                    <ArrowNDDContainer
                      onMouseEnter={() => {
                        setDDownMenu(true);
                      }}
                      onMouseLeave={() => {
                        setDDownMenu(false), setSec(0), timer();
                      }}
                    >
                      <div>
                        <ArrowUp />
                      </div>
                      <DropDownContainer>
                        <DownMenu>
                          <div>
                            <ButtonMenu>Home</ButtonMenu>
                            <ButtonMenu>TV Shows</ButtonMenu>
                            <ButtonMenu>Movies</ButtonMenu>
                            <ButtonMenu>New & Popular</ButtonMenu>
                            <ButtonMenu>My List</ButtonMenu>
                            <ButtonMenu>Browse By Languages</ButtonMenu>
                          </div>
                        </DownMenu>
                      </DropDownContainer>
                    </ArrowNDDContainer>
                  )}
                </DropDownMenu>

                <DefaultMenu>
                  <ul>
                    <Item>
                      <p>
                        <strong>Home</strong>
                      </p>
                    </Item>
                    <Item>
                      <p>TV Shows</p>
                    </Item>
                    <Item>
                      <p>Movies</p>
                    </Item>
                    <Item>
                      <p>New & Popular</p>
                    </Item>
                    <Item>
                      <p>My List</p>
                    </Item>
                    <Item>
                      <p>Browse by Languages</p>
                    </Item>
                  </ul>
                </DefaultMenu>
              </NavContentLeft>

              <NavContentRight>
                {searchBar ? (
                  <SearchBarContainer>
                    <Search>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Search>
                    <InputSearch
                      type="text"
                      placeholder="Search any movies or series"
                      onChange={handleChange}
                      value={inputSearch}
                    />
                  </SearchBarContainer>
                ) : (
                  <Search onClick={() => setSearchBar?.(true)}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Search>
                )}

                <Bell
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="Notifications"
                  style={{
                    background: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  <BellSvg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                      fill="currentColor"
                    ></path>
                  </BellSvg>
                </Bell>
                <ProfileContainer>
                  <img
                    src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                    alt="profileImage"
                    style={{ borderRadius: "5px", width: "100%" }}
                  />
                </ProfileContainer>
              </NavContentRight>
            </Nav>
          </StyledHeaderwb>
        </>
      ) : (
        <StyledHeader>
          <NetflixLogoContainer>
            <NetflixLogoLogin
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 276.742"
            >
              <path
                d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
                fill="#d81f26"
              />
            </NetflixLogoLogin>
          </NetflixLogoContainer>
          <SignInButton>
            <span>Sign In</span>
          </SignInButton>
        </StyledHeader>
      )}
    </>
  );
}
