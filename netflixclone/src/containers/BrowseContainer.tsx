import React, { useContext, useState, useEffect } from "react";

import { FirebaseContext } from "../context/firebase";
import Loading from "../components/Loading";
import Header from "../components/Header";
import { SlideAttribute } from "./BrowseContainer.types";
import ProfileContainer from "./ProfileContainer";
import * as ROUTES from "../constant/routes";
import logo from "./logo.svg";

const BrowseContainer: React.FC<SlideAttribute> = ({ slides }) => {
  const firebase = useContext(FirebaseContext);
  const [profile, setProfile] = useState<{ displayName?: string | null }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const user = firebase?.auth().currentUser || null;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile?.displayName]);

  return profile.displayName ? (
    <>
      {loading ? (
        <Loading src={user?.photoURL || ""} />
      ) : (
        <Loading.ReleaseBody />
      )}

      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user?.photoURL ? user?.photoURL : ""} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user?.photoURL ? user?.photoURL : ""} />
                  <Header.TextLink>{user?.displayName}</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
