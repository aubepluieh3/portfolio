import { Circle } from "./Profile";
import { Bounce } from "react-awesome-reveal";
import styled from "styled-components";

const Entire = styled.div`
  display: flex;
  margin: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  grid-template-columns: repeat(2, 400px);
  gap: 15px;
  width: 100%;
  height: 1050px;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  border-radius: 20px;
  background: white;
`;

function MyProject() {
  return (
    <>
      <Circle>
        <span>|</span>
      </Circle>
      <Entire>
        <Grid>
          <Box></Box>
          <Box></Box>

          <Box></Box>
          <Box></Box>

          <Box></Box>
          <Box></Box>
        </Grid>
      </Entire>
    </>
  );
}

export default MyProject;
