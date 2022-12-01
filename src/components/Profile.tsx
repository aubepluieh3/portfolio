import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";

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
  margin: 5px 0px;
  a,
  i {
    text-decoration-line: none;
    &:hover {
      cursor: pointer;
    }
  }
  a {
    margin-right: 5px;
  }
  i {
    margin-left: 3px;
    margin-right: 8px;
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
            <img src={process.env.PUBLIC_URL + "/img/soo.jpg"} alt="soo" />
          </Img>

          <ProfileBox>
            <List>👩🏻 Park Soo Hyun </List>
            <List>🍰 2000.04.29 </List>
            <List>🏫 순천향대 의료IT공학과 (2019.03~) </List>
            <List>📚 HTML CSS REACT JS TS </List>
            <List>🤍 Coding Sports Music Book</List>
            <List>
              <a href="mailto:aubepluieh3@naver.com">📧</a>
              <span>aubepluieh3@naver.com</span>
            </List>
            <List>
              <i>
                <FontAwesomeIcon
                  icon={faGithub}
                  onClick={() => {
                    window.open("https://github.com/aubepluieh3");
                  }}
                />
              </i>
              <span>github.com/aubepluieh3</span>
            </List>
          </ProfileBox>
        </Box>
      </Fade>
      <Fade triggerOnce>
        <Box>
          <ProfileBox>
            <div>안녕하세요. 프론트엔드 개발자가 되고 싶은 박수현입니다.</div>
            <div></div>
            <div>
              많이 시도하고 많이 실패하면 그만큼 성공하는 일도 조금 더 많이 생긴
              다는 말처럼 꾸준하게 도전하며 살고 싶습니다. 변화가 빠르게
              일어나는 분야인만큼 새로운 것들을 받아들이며 성장해가고 싶습니다.
            </div>
          </ProfileBox>
        </Box>
      </Fade>
    </>
  );
}

export default profile;
