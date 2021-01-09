import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";

import { SlideAttribute } from "./BrowseContainer.types";
import ProfileContainer from "./ProfileContainer";

const BrowseContainer: React.FC<SlideAttribute> = ({ slides }) => {
  const firebase = useContext(FirebaseContext);
  const user = firebase?.auth().currentUser || null;
  return <ProfileContainer user={user} />;
};

export default BrowseContainer;
