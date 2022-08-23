import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../components/Search";

const Main = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/jejodo-dev-team/open-api/main/frontend.json"
      )
      .then(({ data }) => {
        setDataList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container>
        <MainText>
          <p className="title">화섬 아파트 지구家 입주민들</p>
          <p className="middle">화섬 아파트에 입주한 입주민들입니다.</p>
          <p className="middle">
            같이 화성에 가는날을 기다리며 화목하게 지내봐요!
          </p>
        </MainText>
        <Search dataList={dataList} />
      </Container>
    </>
  );
};

const MainText = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 360px) {
    width: 22.5rem;
  }
  .title {
    margin: 49px auto;
    font-weight: bold;
    font-size: 40px;
    word-break: break-all;
    transition: 400ms;
    @media screen and (max-width: 450px) {
      font-size: 28px;
    }
    @media screen and (max-width: 360px) {
      font-size: 28px;
    }
  }
  .middle {
    display: flex;
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  margin: 0 auto;
`;

export default Main;
