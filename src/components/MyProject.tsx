import { Circle } from "./Profile";
import { Bounce } from "react-awesome-reveal";
import styled from "styled-components";
import { motion } from "framer-motion";

const Entire = styled.div`
  display: flex;
  margin: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 430px);
  grid-template-columns: repeat(2, 400px);
  gap: 15px;
  width: 100%;
  height: 1300px;
  justify-content: center;
`;

const Box = styled(motion.div)`
  display: flex;
  border-radius: 20px;
  background: white;
  flex-direction: column;
  padding: 10px;
  height: 420px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Img = styled.div`
  img {
    width: 380px;
    border-radius: 20px;
    height: 180px;
    object-fit: cover;
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
  height: 130px;
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
          <Box
            whileHover={{
              scale: 1.1,
            }}
          >
            <Img>
              <img src={`img/youtube.jpg`} alt="youtube"></img>
            </Img>
            <Title>Youtube Clone Coding</Title>
            <Content>
              [Full Stack] 현대인들의 필수인 Youtube. Youtube Clone Coding을
              통해 회원가입, 로그인, 프로필 설정, 동영상 올리기, 댓글 등 다양한
              기능들을 구현했습니다. 프론트엔드부터 백엔드까지 전체적인 부분을
              다루고, heroku를 통한 배포까지 구현해서 완성후 굉장히 뿌듯했던
              프로젝트였습니다.
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
          <Box
            whileHover={{
              scale: 1.1,
            }}
          >
            <Img>
              <img src={`img/chrome.jpg`} alt="chrome"></img>
            </Img>
            <Title>Momentum</Title>
            <Content>
              [JS] 이름을 입력하면 인사해주는 페이지가 있습니다. 오늘의 날씨는
              어떤지, 현재 시각은 어떤지 알 수 있습니다. 오늘 할 일을 입력하고
              할 일을 완료한 경우 완료 표시를 할 수 있고, 삭제를 할 수 있습니다.
              또한 클릭 한 번으로 자주 가는 페이지로 이동할 수 있습니다.
            </Content>
            <Button>
              <Btn
                onClick={() =>
                  window.open("https://github.com/aubepluieh3/momentum")
                }
              >
                GitHub
              </Btn>
              <Btn
                onClick={() =>
                  window.open("https://aubepluieh3.github.io/momentum/")
                }
              >
                Site
              </Btn>
            </Button>
          </Box>

          <Box
            whileHover={{
              scale: 1.1,
            }}
          >
            <Img>
              <img src={`img/apple.jpg`} alt="apple-music"></img>
            </Img>
            <Title>Apple Music</Title>
            <Content>
              [React, TS] 평소 애용하는 앱인 애플뮤직의 디자인을 참고하여 진행한
              프로젝트입니다. 전반적으로 react-motion을 활용하여 효과를 주었고,
              음악 기능을 구현했습니다. 개인 프로젝트인 만큼 부딪힘도 많았지만
              음악을 좋아하는 제가 한 번쯤 구현해 보고 싶었던 프로젝트였기에
              즐거운 경험이었습니다.
            </Content>
            <Button>
              <Btn
                onClick={() =>
                  window.open("https://github.com/aubepluieh3/apple-music")
                }
              >
                GitHub
              </Btn>
              <Btn
                onClick={() =>
                  window.open("https://aubepluieh3.github.io/apple-music/")
                }
              >
                Site
              </Btn>
            </Button>
          </Box>
          <Box
            whileHover={{
              scale: 1.1,
            }}
          >
            <Img>
              <img src={`img/trello.jpg`} alt="trello" />
            </Img>
            <Title>Trello</Title>
            <Content>
              [React] Drag&Drop을 이용하여 자유자재로 보드안에서 카드가
              움직입니다. 선수 교체가 빈번하게 발생하는 야구 스포츠의 특성을
              활용하여 야구 컨셉으로 프로젝트를 진행했습니다. 새로운 보드를
              추가할 수 있고, 보드 내에 선수들을 추가하고, 뺄 수 있는 기능을
              구현하였습니다.
            </Content>
            <Button>
              <Btn
                onClick={() =>
                  window.open("https://github.com/aubepluieh3/react-trello")
                }
              >
                GitHub
              </Btn>
              <Btn
                onClick={() =>
                  window.open("https://aubepluieh3.github.io/react-trello/")
                }
              >
                Site
              </Btn>
            </Button>
          </Box>

          <Box></Box>
          <Box
            whileHover={{
              scale: 1.1,
            }}
          >
            <Img>
              <img src={`img/kakao.jpg`} alt="kakao" />
            </Img>
            <Title>Kakao Clone Coding</Title>
            <Content>
              [HTML,CSS] HTML과 CSS의 기초를 다지면서 카카오톡 UI를 구현한
              프로젝트입니다. 처음으로 진행했던 클론 코딩 프로젝트인만큼
              기본이라고 생각하는 HTML과 CSS만을 사용하여 프로젝트를
              진행하였습니다. 더 다양한 효과를 배우고, 활용하고 싶다는 생각을
              하게 되었습니다.
            </Content>
            <Button>
              <Btn
                onClick={() =>
                  window.open("https://github.com/aubepluieh3/kokoa-clone")
                }
              >
                GitHub
              </Btn>
              <Btn
                onClick={() =>
                  window.open("https://aubepluieh3.github.io/kokoa-clone/")
                }
              >
                Site
              </Btn>
            </Button>
          </Box>
        </Grid>
      </Entire>
    </>
  );
}

export default MyProject;
