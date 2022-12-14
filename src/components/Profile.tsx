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
            <List>π©π» Park Soo Hyun </List>
            <List>π° 2000.04.29 </List>
            <List>π« μμ²ν₯λ μλ£ITκ³΅νκ³Ό (2019.03~) </List>
            <List>π HTML CSS REACT JS TS </List>
            <List>π€ Coding Sports Music Book</List>
            <List>
              <a href="mailto:aubepluieh3@naver.com">π§</a>
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
            <div>μλνμΈμ. Front-End κ°λ°μκ° λκ³  μΆμ λ°μνμλλ€.</div>
            <div>
              μ¬λκ³Ό μ¬λμ μ°κ²°ν΄μ£Όλ λΆλΆμ κ°λ°νλ κ² λ§νΌ λ§€λ ₯μ μΈ μΌμ΄ λ
              μμκΉμ? μμ€ν λ€μ μ¬λμ΄ μλ€λ κ²μ λ μΌλμ λλ κ°λ°μκ°
              λκ³  μΆμ΅λλ€.
            </div>
            <div>
              λ§μ΄ μλνκ³  λ§μ΄ μ€ν¨νλ©΄ κ·Έλ§νΌ μ±κ³΅νλ μΌλ μ‘°κΈ λ λ§μ΄ μκΈ΄
              λ€λ λ§μ²λΌ κΎΈμ€νκ² λμ νλ©° μ΄κ³  μΆμ΅λλ€. λ³νκ° λΉ λ₯΄κ²
              μΌμ΄λλ λΆμΌμΈλ§νΌ μλ‘μ΄ κ²λ€μ λ°μλ€μ΄λ©° μ±μ₯ν΄κ°κ² μ΅λλ€.
            </div>
          </ProfileBox>
        </Box>
      </Fade>
    </>
  );
}

export default profile;
