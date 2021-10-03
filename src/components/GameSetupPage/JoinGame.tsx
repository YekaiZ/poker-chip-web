import QRCode from "qrcode.react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    align-self: center;
  }
`;

interface IProp {
  url: string;
}

export const JoinGame = ({ url }: IProp) => {
  return (
    <Wrapper>
      <p>Scan QR code to join game quickly or enter the code below.</p>
      <p>Game will start once all player have joined</p>
      <QRCode value={url} size={256} />
    </Wrapper>
  );
};
