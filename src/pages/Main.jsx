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
  const [searchData, setSearchData] = useState("");
  const [resultDataList, setResultDataList] = useState([]);

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
  const searchValueHandle = (e) => {
    setSearchData(e.target.value);
  };

  const KeyhandleEvent = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key !== "Enter") {
      return;
    }
    searchHandle();
  };

  const searchHandle = (e) => {
    if (searchData === "") {
      setResultDataList([]);
    } else {
      const resultData = dataList.filter((itmeList) => {
        return itmeList.nickname
          .toUpperCase()
          .includes(searchData.toUpperCase());
      });

      setResultDataList(resultData);

      setSearchData("");
    }
  };

  const filtered = dataList.filter((itmeList) => {
    return itmeList.nickname.toUpperCase().includes(searchData.toUpperCase());
  });

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
        <SearchBox>
          <div className="input">
            <SearchInput
              placeholder="검색"
              onChange={searchValueHandle}
              onKeyDown={KeyhandleEvent}
            />
            <div className="searchBtn">
              <AiOutlineSearch onClick={searchHandle} />
            </div>
            {filtered.length > 0 && searchData && (
              <SearchPreview>
                <ScrollBox>
                  {filtered.map((a, idx) => {
                    return (
                      <PreviewData key={idx} onClick={searchHandle}>
                        <span>{a.nickname}</span>
                      </PreviewData>
                    );
                  })}
                </ScrollBox>
              </SearchPreview>
            )}
          </div>
        </SearchBox>
        <Filter item={dataList} result={resultDataList} />
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

const SearchBox = styled.div`
  width: 100vw;
  margin-top: 3rem;
  display: flex;
  margin: 3rem auto 0 auto;

  @media screen and (max-width: 360px) {
    width: 22.5rem;
  }
  .searchBtn {
    display: flex;
    align-items: center;
    margin-left: -1.5rem;
    cursor: pointer;
    z-index: 1;
  }
  .input {
    display: flex;
    margin: 0 auto;
  }
`;
const SearchInput = styled.input`
  z-index: 1;
  width: 23.18rem;
  height: 1.25rem;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 0 6px 28px;
  border: 1px solid black;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 360px) {
    width: 18.3rem;
  }
  @media screen and (max-width: 450px) {
    width: 18.3rem;
  }
`;

const ScrollBox = styled.div`
  overflow: auto;
  height: auto;
  max-height: 9rem;
  width: 24.5rem;
  margin: 0.3rem 2px;
  &::-webkit-scrollbar-thumb {
    background: #999999;
    width: 4px;
    border-radius: 10px;
    margin-right: 0.25rem;
  }

  &::-webkit-scrollbar {
    border-radius: 10px;
    background: transparent;
    width: 4px;
    margin-right: 0.25rem;
  }
  @media screen and (max-width: 450px) {
    width: 19.6rem;
  }
`;

const SearchPreview = styled.div`
  position: absolute;
  width: 24.9rem;
  background-color: #feffff;
  border: 1px solid #000000;
  border-top: none;
  border-radius: 0px 0px 15px 15px;
  margin-top: 1rem;
  padding-top: 0.875rem;
  @media screen and (max-width: 360px) {
    width: 19.9rem;
  }
  @media screen and (max-width: 450px) {
    width: 20.05rem;
  }
`;

const PreviewData = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin: auto;
  width: 24rem;
  height: 2.25rem;

  @media screen and (max-width: 360px) {
    width: 18.8rem;
  }
  @media screen and (max-width: 450px) {
    width: 18.8rem;
  }
  :hover {
    background: #eeeeee;
    cursor: pointer;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    margin-left: 1.5rem;
    @media screen and (max-width: 360px) {
      margin-left: 1.4rem;
    }
    @media screen and (max-width: 450px) {
      margin-left: 1.4rem;
    }
  }
`;

export default Main;
