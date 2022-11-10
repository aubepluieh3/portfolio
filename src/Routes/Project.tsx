import styled from "styled-components";
import { Body } from "./Soo";
import MyProject from "../components/MyProject";

const Box = styled.div`
  width: 100%;
  border-radius: 30px;
  height: 100%;
  border: 1px white;
  margin: 40px;
`;

function Project() {
  return (
    <Body>
      <Box>
        <MyProject />
      </Box>
    </Body>
  );
}

export default Project;
