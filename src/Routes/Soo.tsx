import styled from "styled-components";
import Profile from "../components/Profile";
import Typing from "../components/Typing";

export const Body = styled.div`
  display: flex;
  margin: 0px 50px;
`;
export const Box = styled.div`
  width: 100%;
  border-radius: 30px;
  height: 100%;
  border: 1px white;
  margin: 50px 50px;
`;

function Soo() {
  return (
    <Body>
      <Box>
        <Typing />
        <Profile />
      </Box>
    </Body>
  );
}
export default Soo;
