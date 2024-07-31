"use client";
import Backtotop from "@/shared/layout-components/backtotop/backtotop";
import { Fragment } from "react";
import LandingSwitcher from "@/shared/layout-components/switcher/landingswitcher";
import LandingHeader from "@/shared/layout-components/header/landingHeader";
import LandingFooter from "@/shared/layout-components/footer/landingFooter";

const Layouts = ({ children }: any) => {
  return (
    <>
      <Fragment>
        <LandingSwitcher />
        <LandingHeader />
        {children}
        <LandingFooter />
        <Backtotop />
      </Fragment>
    </>
  );
};

export default Layouts;
