"use client";
import React, { useEffect } from "react";

const Seo = ({ title }: any) => {
  useEffect(() => {
    document.title = `Tracer - ${title}`;
  }, [title]);

  return <></>;
};

export default Seo;
