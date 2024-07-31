"use client";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import Map from "@/shared/layout-components/map/map";

const Empty = () => {
  return (
    <Fragment>
      <Seo title={"Map"} />
      <Map />
    </Fragment>
  );
};

export default Empty;
