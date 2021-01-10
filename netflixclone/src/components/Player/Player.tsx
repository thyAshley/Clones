import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";

import { PlayerComposition } from "./player.types";
import { Button, Close, Container, Inner, Overlay } from "./styles";

export const PlayerContext = createContext<any>(null);

const Player: React.FC & PlayerComposition = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>;
    </PlayerContext.Provider>
  );
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext);
  return (
    <Button
      onClick={() => setShowPlayer((showPlayer: boolean) => !showPlayer)}
      {...restProps}
    >
      Play
    </Button>
  );
};

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

export default Player;
