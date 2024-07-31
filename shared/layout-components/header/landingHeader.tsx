"use client";

import { Fragment, useEffect } from "react";
import { ThemeChanger } from "../../redux/action";
import { connect } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import store from "@/shared/redux/store";

const LandingHeader = ({ local_varaiable, ThemeChanger }: any) => {
  useEffect(() => {
    const theme = store.getState();
    ThemeChanger({
      ...theme,
      dataNavStyle: "menu-click",
      dataNavLayout: "horizontal",
      //   "class": "h-full",
      dataVerticalStyle: "",
      body: "landing-body",
    });

    return () => {
      ThemeChanger({
        ...theme,
        dataNavStyle: "",
        dataVerticalStyle: "",
        dataNavLayout: `${
          localStorage.ynexlayout == "horizontal" ? "horizontal" : "vertical"
        }`,
        body: "",
      });
    };
  }, [ThemeChanger]);
  //
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 992) {
        const theme = store.getState();
        ThemeChanger({
          ...theme,
          dataToggled: "close",
          dataNavLayout: "horizontal",
        });
      } else {
        const theme = store.getState();
        ThemeChanger({
          ...theme,
          dataToggled: "open",
          dataNavLayout: "horizontal",
        });
      }
    }

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    // handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [ThemeChanger]);

  useEffect(() => {
    const rootDiv = document.getElementById("root");
    if (rootDiv) {
    }
    return () => {
      if (rootDiv) {
        rootDiv.className = ""; // Remove the className when component unmounts
      }
    };
  }, []);

  // useEffect(() => {
  //   const landingpages = () => {
  //     if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
  //       let Scolls = document?.querySelectorAll(".sticky");
  //       Scolls.forEach((e) => {
  //         e.classList.add("sticky-pin");
  //       });
  //     } else {
  //       let Scolls = document?.querySelectorAll(".sticky");
  //       Scolls.forEach((e) => {
  //         e.classList.remove("sticky-pin");
  //       });
  //     }
  //   };

  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", landingpages);
  //   }
  // });

  const handleClick = (e: any) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    const location = document.getElementById(target.substring(1))?.offsetTop;
    if (location !== undefined) {
      window.scrollTo({
        left: 0,
        top: location - 64,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const pageLinks = document.querySelectorAll(".side-menu__item");
    pageLinks.forEach((elem) => {
      elem.addEventListener("click", handleClick);
    });

    return () => {
      // Clean up event listeners when the component unmounts
      pageLinks.forEach((elem) => {
        elem.removeEventListener("click", handleClick);
      });
    };
  }, []);

  //// Template Highlights collapse

  const onScroll = () => {
    const sections = document.querySelectorAll(".side-menu__item");
    const scrollPos =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.querySelector("body")?.scrollTop ||
      0;

    sections.forEach((elem) => {
      const value = elem.getAttribute("href") ?? "";
      const fragmentIndex = value.indexOf("#");
      const fragment =
        fragmentIndex !== -1 ? value.substring(fragmentIndex + 1) : "";

      if (fragment) {
        const refElement = document.getElementById(fragment);

        if (refElement) {
          const scrollTopMinus = scrollPos + 73;
          if (
            refElement.offsetTop <= scrollTopMinus &&
            refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
          ) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function toggleNavigation() {
    if (window.innerWidth <= 992) {
      const theme = store.getState();
      ThemeChanger({
        ...theme,
        dataToggled: "open",
        dataNavLayout: "horizontal",
      });
    }
  }
  function menuClose() {
    const theme = store.getState();
    if (window.innerWidth <= 992) {
      ThemeChanger({ ...theme, dataToggled: "close" });
    }
    const overlayElement = document.querySelector(
      "#responsive-overlay"
    ) as HTMLElement | null;
    if (overlayElement) {
      overlayElement.classList.remove("active");
    }
  }

  return (
    <Fragment>
      <header className="app-header">
        <div className="main-header-container container-fluid">
          <div className="header-content-left">
            <div className="header-element">
              <div className="horizontal-logo">
                <Link href="/" className="header-logo">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/images/brand-logos/toggle-logo.png"
                    alt="logo"
                    className="toggle-logo"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/assets/images/brand-logos/toggle-dark.png"
                    alt="logo"
                    className="toggle-dark"
                  />
                </Link>
              </div>{" "}
            </div>
            <div className="header-element">
              <Link
                aria-label="anchor"
                href="#!"
                scroll={false}
                className="sidemenu-toggle header-link"
                onClick={() => toggleNavigation()}
              >
                <span className="open-toggle">
                  {" "}
                  <i className="ri-menu-3-line text-xl"></i>{" "}
                </span>{" "}
              </Link>
            </div>
          </div>
          <div className="header-content-right">
            <div className="header-element !items-center">
              <div className="lg:hidden block">
                <Link
                  href="/login"
                  className="ti-btn ti-btn-primary !m-0 !me-2"
                >
                  {" "}
                  Sign In{" "}
                </Link>
                <Link
                  aria-label="anchor"
                  href="#!"
                  scroll={false}
                  className="ti-btn m-0 p-2 px-3 ti-btn-success"
                  data-hs-overlay="#hs-overlay-switcher"
                >
                  <i className="ri-settings-3-line animate-spin-slow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="responsive-overlay" onClick={() => menuClose()}></div>
      <aside className="app-sidebar sticky !topacity-0 sticky-pin" id="sidebar">
        <div className="container-xl xl:!p-0">
          <div className="main-sidebar mx-0">
            <nav className="main-menu-container nav nav-pills flex-column sub-open">
              <div className="landing-logo-container my-auto hidden lg:block">
                <div className="responsive-logo">
                  <Link
                    className="responsive-logo-light"
                    href="/"
                    aria-label="Brand"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/brand-logos/desktop-logo.png"
                      alt="logo"
                      className="mx-auto"
                    />
                  </Link>
                  <Link
                    className="responsive-logo-dark"
                    href="/"
                    aria-label="Brand"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/brand-logos/desktop-white.png"
                      alt="logo"
                      className="mx-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="slide-left hidden" id="slide-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#7b8191"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>{" "}
                </svg>
              </div>
              <ul className="main-menu">
                <li className="slide">
                  <Link className="side-menu__item" href="#home">
                    <span className="side-menu__label">Home</span>
                  </Link>
                </li>

                <li className="slide">
                  <Link href="#about" className="side-menu__item">
                    <span className="side-menu__label">About</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#team" className="side-menu__item">
                    <span className="side-menu__label">Team</span>
                  </Link>
                </li>

                <li className="slide">
                  <Link href="#pricing" className="side-menu__item">
                    <span className="side-menu__label">Pricing</span>
                  </Link>
                </li>

                <li className="slide">
                  <Link href="#faq" className="side-menu__item">
                    <span className="side-menu__label">Faq&apos;s</span>
                  </Link>
                </li>

                <li className="slide">
                  <Link href="#contact" className="side-menu__item">
                    <span className="side-menu__label">Contact</span>
                  </Link>
                </li>
              </ul>
              <div className="slide-right hidden" id="slide-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#7b8191"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>{" "}
                </svg>
              </div>
              <div className="lg:flex hidden space-x-2 rtl:space-x-reverse">
                {/* <Link
                  href="/login"
                  className="ti-btn w-[6.375rem] ti-btn-primary-full m-0 p-2"
                >
                  Sign In
                </Link> */}
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    <Link href="/login">Sign In</Link>
                  </div>
                </button>
                <Link
                  aria-label="anchor"
                  href="#!"
                  scroll={false}
                  className="ti-btn m-0 p-2 px-3 ti-btn-light !font-medium"
                  data-hs-overlay="#hs-overlay-switcher"
                >
                  <i className="ri-settings-3-line animate-spin-slow"></i>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps, { ThemeChanger })(LandingHeader);
