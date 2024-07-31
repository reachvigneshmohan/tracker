"use client";
import Switcher from "@/shared/layout-components/switcher/switcher";
import { Fragment } from "react";
import { connect } from "react-redux";
import SpinningLoading from "@/shared/layout-components/ui/loading";
import store from "@/shared/redux/store";

const Layout = ({ children }: any) => {
  return (
    <Fragment>
      {children}
      {store.getState().authLayoutIsLoading && <SpinningLoading />}
      <Switcher />
    </Fragment>
  );
};
const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, {})(Layout);
