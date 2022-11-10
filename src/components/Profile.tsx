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
  padding: 15px;
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

const Name = styled.span`
  font-size: 30px;
  font-weight: 600;
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
  font-size: 30px;
  a {
    text-decoration-line: none;
    margin-right: 5px;
  }
  &:hover {
    cursor: pointer;
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
            <img src={`img/soo.jpg`} />
          </Img>
          <ProfileBox>
            <Name>👩🏻Park Soo Hyun </Name>
            <Introduce></Introduce>
            <Info>
              <a href="mailto:aubepluieh3@naver.com">📧</a>
              <FontAwesomeIcon
                icon={faGithub}
                onClick={() => {
                  window.open("https://github.com/aubepluieh3");
                }}
              />
            </Info>
          </ProfileBox>
        </Box>
      </Fade>
      <Fade triggerOnce>
        <Box>
          <ProfileBox></ProfileBox>
        </Box>
      </Fade>
    </>
  );
}

export default profile;
