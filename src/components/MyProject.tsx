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
  flex-direction: column;
  padding: 10px;
  height: 350px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Img = styled.div`
  img {
    width: 380px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
  padding-left: 10px;
  margin-bottom: 5px;
`;

const Content = styled.div`
  width: 100%;
  height: 80px;
  padding: 0px 10px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
`;
const Btn = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin: 3px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
function MyProject() {
  return (
    <>
      <Circle>
        <span>|</span>
      </Circle>
      <Entire>
        <Grid>
          <Box>
            <Img>
              <img src={`img/youtube.jpg`}></img>
            </Img>
            <Title>Youtube Clone Coding</Title>
            <Content>
              [Full Stack] 현대인들의 필수인 Youtube! Youtube Clone Coding을
              통해 회원가입, 로그인, 프로필 설정, 동영상 올리기, 댓글 등 다양한
              기능들을 구현
            </Content>
            <Button>
              <Btn
                onClick={() =>
                  window.open("https://github.com/aubepluieh3/wetube")
                }
              >
                GitHub
              </Btn>
              <Btn
                onClick={() =>
                  window.open("https://soo-youtube.herokuapp.com/")
                }
              >
                Site
              </Btn>
            </Button>
          </Box>
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
