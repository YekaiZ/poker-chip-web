import {
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { IGameSettingProp } from "./GameSetupPage";
const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  > * {
    justify-self: space-around;
  }
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;

interface IProp {
  generating: boolean;
  handleSubmit: (param: IGameSettingProp) => void;
}

export const GameSettings = ({ handleSubmit, generating }: IProp) => {
  const [numOfPlayer, setNumOfPlayer] = useState(2);
  const [buyInAmount, setBuyInAmount] = useState(100);
  const [blind, setBlind] = useState(2);
  return (
    <Wrapper>
      <StyledTextField
        type="number"
        label="Number of players"
        variant="standard"
        value={numOfPlayer}
        required
        error={numOfPlayer < 2}
        onChange={(e) => setNumOfPlayer(parseInt(e.target.value || "1"))}
      />
      <StyledTextField
        type="number"
        label="Buy in amount"
        variant="standard"
        value={buyInAmount}
        required
        error={buyInAmount < 1}
        onChange={(e) => setBuyInAmount(parseInt(e.target.value))}
        InputProps={{
          startAdornment: <AttachMoneyIcon />,
        }}
      />
      <RadioGroup
        value={blind}
        name="radio-buttons-group"
        row
        onChange={(e) => setBlind(parseInt(e.target.value))}
      >
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="Big & small blinds"
        />
        <FormControlLabel value="1" control={<Radio />} label="One blind" />
      </RadioGroup>
      <Button
        variant="contained"
        size="large"
        disabled={generating}
        onClick={() =>
          handleSubmit({
            buyInAmount,
            numOfPlayer,
            blind,
          })
        }
      >
        Start
      </Button>
    </Wrapper>
  );
};
