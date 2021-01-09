import React from "react";
import useContent from "../hooks/useContent";
import selectionMap from "../utils/selection";
import BrowseContainer from "../containers/BrowseContainer";
import { SlideAttribute } from "../containers/BrowseContainer.types";

const Browse = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionMap({ series, films });

  return <BrowseContainer slides={slides} />;
};

export default Browse;
