import { JoinGame } from "./JoinGame";
import { GameSettings } from "./GameSettings";
import { useState } from "react";
import styled from "styled-components";

const SettingWrapper = styled.div`
  padding: 32px 16px;
`;
export interface IGameSettingProp {
  numOfPlayer: number;
  buyInAmount: number;
  blind: number;
}

export const GameSetupPage = () => {
  const [generating, setGenerating] = useState(false);
  const [gameURL, setGameURL] = useState("");

  const handleSubmit = async (gameSetting: IGameSettingProp) => {
    console.log("game setitng", gameSetting);
    setGenerating(true);
    await setTimeout(() => setGameURL("to add real call"), 3000);
  };

  return (
    <SettingWrapper>
      <GameSettings handleSubmit={handleSubmit} generating={generating} />
      {gameURL && <JoinGame url={gameURL} />}
    </SettingWrapper>
  );
};
