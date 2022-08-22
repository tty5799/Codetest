import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { AiOutlineSearch } from "react-icons/ai";
import Header from "../components/Header";

const Main = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/jejodo-dev-team/open-api/main/frontend.json"
      )
      .then(({ data }) => {
        setDataList(data);
        data = data.replace(/[ \[\]\n:}"]|nickname|oname|building_count/g, "");

        let cardList = data.split("{");

        let newList = [];

        cardList.map((v, i) => {
          if (i === 0) return;
          let newData = v.split(",");
          let newObj = {
            nickname: newData[0],
            oname: newData[1],
            building_count: newData[2],
          };
          newList.push(newObj);
        });
        setDataList(newList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 검색 기능

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
