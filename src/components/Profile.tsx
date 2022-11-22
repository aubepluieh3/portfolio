import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 55px 0px;
  color: white;
  span {
    font-size: 35px;
  }
`;

const Box = styled.div`
  display: flex;
  margin: 40px;
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  opacity: 0.8;
  position: absoloute;
  border-radius: 30px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  padding: 25px;
  justify-content: center;

  div {
    font-size: 20px;
  }
  div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Img = styled.div`
  img {
    padding: 20px;
    width: 300px;
    height: 300px;
    background-size: cover;
    border-radius: 30%;
    background-color: white;
    position: relative;
  }
  margin-right: 10px;
`;

const List = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Introduce = styled.span`
  font-size: 20px;
  height: 200px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 25px;
  a,
  i {
    text-decoration-line: none;
    margin-right: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  span {
    font-size: 20px;
    margin-right: 5px;
  }
`;
function profile() {
  return (
    <>
      <Circle>
        <span>|</span>
      </Circle>
      <Fade triggerOnce fraction={0.3}>
        <Box>
          <Img>
            <img src="img/soo.jpg" alt="soo"></img>
          </Img>
          <ProfileBox>
            <Introduce>
              <List>👩🏻 Park Soo Hyun </List>
              <List>🍰 2000.04.29 </List>
              <List>🏫 순천향대 의료IT공학과 (2019.03~) </List>
              <List>📚 HTML CSS JS TS REACT </List>
              <List>🤍 Coding Sports Music Book</List>
            </Introduce>
            <Info>
              <a href="mailto:aubepluieh3@naver.com">📧</a>
              <span>aubepluieh3@naver.com</span>
              <i>
                <FontAwesomeIcon
                  icon={faGithub}
                  onClick={() => {
                    window.open("https://github.com/aubepluieh3");
                  }}
                />
              </i>
              <span>github.com/aubepluieh3</span>
            </Info>
          </ProfileBox>
        </Box>
      </Fade>
      <Fade triggerOnce>
        <Box>
          <ProfileBox>
            <div>
              안녕하세요. 프론트엔드 개발자가 되고 싶은 박수현입니다. 저는 이거
              아니면 죽겠다는 생각이 드는 일도 없었고, 이건 정말 죽인다 해도
              하기 싫은 일도 없었습니다. 그래서 그게 뭐든 빨리 찾아야 할 것
              같았습니다.
            </div>
            <div>
              하지만 제가 꾸준히 즐기면서 할 수 있는 것이 무엇일까를 계속해서
              고민하다 어릴 때부터 컴퓨터로 작업하는 일들을 좋아했던 저를
              발견하였습니다. 늘 발표 자료를 만들 때도 디자인에 신경을 쓰며 다른
              사람들에게 어떻게 보이는지에 중점을 두고 재미있는 효과를 넣는 것을
              좋아했던 저를요. 그래서 프론트엔드 개발자가 되기로 결심했습니다.
            </div>
            <div>
              많이 시도하고 많이 실패하여, 그만큼 성공하는 일도 조금 더 많이
              생긴 다는 말처럼 꾸준하게 도전하며 살고 싶습니다. 변화가 빠르게
              일어나는 분야인만큼 새로운 것들을 받아들이며 성장해가고 싶습니다.
            </div>
          </ProfileBox>
        </Box>
      </Fade>
    </>
  );
}

export default profile;
