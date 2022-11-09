import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderBox = styled.div`
  display: flex;
  margin: 35px 0px 0px 50px;
`;
const Logo = styled(motion.svg)`
  width: 95px;
  height: 25px;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;

  transition: color 0.3s ease-in-out;
  position: relative;
  justify-content: center;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;
const Wave = styled(motion.span)`
  position: absolute;
  height: 8px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: rgb(46, 209, 255);
`;
function Header() {
  const MeMatch = useMatch("/");
  const ProjectMatch = useMatch("/project");

  return (
    <>
      <HeaderBox>
        <Logo
          whileHover={{ scale: 1.8, rotate: 90 }}
          whileTap={{
            scale: 1.3,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          🏄🏻‍♀️
        </Logo>
        <Items>
          <Item>
            <Link to="/">
              Soo
              {MeMatch ? <Wave layoutId="Wave" /> : null}
            </Link>
          </Item>
          <Item>
            <Link to="/project">
              Project {ProjectMatch && <Wave layoutId="Wave" />}
            </Link>
          </Item>
        </Items>
      </HeaderBox>
    </>
  );
}

export default Header;
