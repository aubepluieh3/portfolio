import { useState, useEffect } from "react";
import styled from "styled-components";

const Title = styled.div`
  font-weight: 600;
  font-size: 50px;
  margin: 0px 40px;
`;

const Typing = () => {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord =
    "안녕하세요. 새로운 공기를 받아드리는 것을 좋아하는 개발자 박수현입니다.";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setTitle("");
          clearInterval(typingInterval);
        }
        return result;
      });
    }, 150);
    return () => {
      clearInterval(typingInterval);
    };
  });

  return <Title>{title}</Title>;
};

export default Typing;
