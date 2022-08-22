import styled from "styled-components";
import { RiEqualizerLine } from "react-icons/ri";
import { ReactComponent as Icon } from "../assets/inactive.svg";
import { ReactComponent as ActiveIcon } from "../assets/active.svg";
import { useState } from "react";
import Card from "./Card";

const Filter = (props) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("");

  const openHandel = () => {
    setOpen(!open);
    setTab("main");
  };

  return (
    <>
      <FilterBox>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {open ? (
            <TitleBox>
              <span className="text">화섬 아파트 NFT</span>
            </TitleBox>
          ) : (
            <TitleBox>
              <span className="text">입주민들</span> &nbsp;
              <span className="num">472</span>
            </TitleBox>
          )}

          <div className="filterBtn" onClick={openHandel}>
            {open ? <ActiveIcon /> : <Icon />}
          </div>
        </div>
        <Line />
      </FilterBox>

      {open ? (
        <BuildingBox>
          <BuildingFilter>
            <div className="title">보유 아파트</div>
            <div
              className={`btn ${tab === "all" ? "active" : "inactive"}`}
              onClick={() => setTab("all")}
            >
              전체
            </div>
            <div
              className={`btn ${tab === "5" ? "active" : "inactive"}`}
              onClick={() => setTab("5")}
            >
              5개 이상
            </div>
            <div
              className={`btn ${tab === "4" ? "active" : "inactive"}`}
              onClick={() => setTab("4")}
            >
              4개
            </div>
            <div
              className={`btn ${tab === "3" ? "active" : "inactive"}`}
              onClick={() => setTab("3")}
            >
              3개
            </div>
            <div
              className={`btn ${tab === "2" ? "active" : "inactive"}`}
              onClick={() => setTab("2")}
            >
              2개
            </div>
            <div
              className={`btn ${tab === "1" ? "active" : "inactive"}`}
              onClick={() => setTab("1")}
            >
              1개
            </div>
          </BuildingFilter>
        </BuildingBox>
      ) : null}
      <Card item={props.item} result={props.result} filter={tab} />
    </>
  );
};

const BuildingBox = styled.div`
  width: 35rem;
  display: flex;
  margin: auto;
  @media screen and (max-width: 580px) {
    width: 90%;
  }
`;

const BuildingFilter = styled.div`
  width: 79%;
  height: 1.75rem;
  display: flex;
  margin-bottom: 1.5rem;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 580px) {
    width: 27rem;
  }
  @media screen and (max-width: 360px) {
    width: 20rem;
  }
  .inactive {
    font-size: 14px;
    font-weight: 500;
    :hover {
      color: #000000;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .active {
    font-size: 14px;
    color: #ffff;
    border-radius: 20px;
    padding: 4px 12px;
    background-color: #000000;
    font-weight: bold;
  }
  .title {
    font-weight: bold;
    margin-left: 1rem;
    @media screen and (max-width: 360px) {
      margin-left: 0.5rem;
    }
  }
`;

const FilterBox = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;
  margin: 3.5rem auto 0 auto;

  @media screen and (max-width: 575px) {
    width: 89%;
  }
  @media screen and (max-width: 360px) {
    width: 20rem;
  }
  .filterBtn {
    display: flex;
    text-align: center;
    align-items: center;

    cursor: pointer;
    @media screen and (max-width: 360px) {
      margin-left: 12rem;
    }
  }
`;
const Line = styled.div`
  margin: 0 auto 1.5rem auto;
  width: 34.88rem;
  border: 1px solid black;
  height: 0px;
  @media screen and (max-width: 360px) {
    width: 19.88rem;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;
const TitleBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 2rem;
  width: 6.875rem;
  background-color: black;
  border: 1px solid transparent;
  border-radius: 10px 10px 0 0;
  align-items: center;
  @media screen and (max-width: 360px) {
    width: 19.88rem;
  }
  .text {
    font-size: 14px;
    color: #ffff;
    font-weight: bold;
  }
  .num {
    font-size: 14px;
    color: #4498f2;
    font-weight: bold;
  }
`;

export default Filter;
