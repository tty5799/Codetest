import styled from "styled-components";
import CardData from "./CardData";
import { ReactComponent as LeftIcon1 } from "../assets/Group 106.svg";
import { ReactComponent as LeftIcon2 } from "../assets/Group 107.svg";
import { ReactComponent as LeftIcon3 } from "../assets/Group 106 1.svg";
import { ReactComponent as LeftIcon4 } from "../assets/Group 107 1.svg";

import { ReactComponent as RightIcon1 } from "../assets/Group 108.svg";
import { ReactComponent as RightIcon2 } from "../assets/Group 109.svg";
import { ReactComponent as RightIcon3 } from "../assets/Group 108 1.svg";
import { ReactComponent as RightIcon4 } from "../assets/Group 109 1.svg";

import { ReactComponent as User } from "../assets/Frame.svg";

import { useEffect, useState } from "react";

const Card = (props) => {
  const buildingNum = props.filter;
  const item = props.item;
  const resultData = props.result;

  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const [CardList, setCardList] = useState([]);
  const [resultState, setResultState] = useState(false);

  const offset = (page - 1) * limit;
  const numPages = Math.ceil(props.item.length / limit);

  useEffect(() => {
    console.log(buildingNum);
    console.log(resultData);
    console.log(item);
    setCardList(item);
    setResultState(false);

    if (resultData.length !== 0) {
      setCardList(resultData);
      setResultState(true);
    } else {
      setCardList(item);
      setResultState(false);
    }
    if (buildingNum === "main") {
      if (resultData.length !== 0) {
        setCardList(resultData);
        setResultState(true);
      } else {
        setCardList(item);
        setResultState(false);
      }
    } else if (buildingNum === "all") {
      if (resultData.length !== 0) {
        setCardList(resultData);
        setResultState(true);
      } else {
        setCardList(item);
        setResultState(false);
      }
    } else if (buildingNum === "5") {
      const filterData = item.filter((itemList) => {
        return itemList.building_count >= 5;
      });
      setCardList(filterData);
      setResultState(false);
    } else if (buildingNum === "4") {
      const filterData = item.filter((itemList) => {
        return itemList.building_count === 4;
      });
      setCardList(filterData);
      setResultState(false);
    } else if (buildingNum === "3") {
      const filterData = item.filter((itemList) => {
        return itemList.building_count === 3;
      });
      setCardList(filterData);
      setResultState(false);
    } else if (buildingNum === "2") {
      const filterData = item.filter((itemList) => {
        return itemList.building_count === 2;
      });
      setCardList(filterData);
      setResultState(false);
    } else if (buildingNum === "1") {
      const filterData = item.filter((itemList) => {
        return itemList.building_count === 1;
      });
      setCardList(filterData);
      setResultState(false);
    }
  }, [buildingNum, item, resultData]);

  return (
    <>
      <CardBox>
        {CardList.slice(offset, offset + limit).map((item, idx) => {
          return <CardData item={item} key={idx} result={resultState} />;
        })}
      </CardBox>
      <PageBtnBox>
        <div className="pagebtn">
          <div className="leftBtn">
            {page === 1 ? (
              <>
                <LeftIcon1 />
                <LeftIcon2
                  style={{ marginLeft: "0.75rem", marginRight: "1.5rem" }}
                />
              </>
            ) : (
              <>
                <LeftIcon3 />
                <LeftIconButton
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  <LeftIcon4 />
                </LeftIconButton>
              </>
            )}
          </div>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <Button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </Button>
            ))}
          <div>
            {page === numPages ? (
              <>
                <RightIcon3
                  style={{ marginLeft: "0.75rem", marginRight: "0.75rem" }}
                />
                <RightIcon4 />
              </>
            ) : (
              <>
                <RightIconButton
                  onClick={() => setPage(page + 1)}
                  disabled={page === numPages}
                >
                  <RightIcon1 />
                </RightIconButton>
                <RightIcon2 />
              </>
            )}
          </div>
        </div>
      </PageBtnBox>
    </>
  );
};
const Button = styled.button`
  margin-right: 0.75rem;
  border: none;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  cursor: pointer;
  &[aria-current] {
    font-weight: bold;
    cursor: revert;
    transform: revert;
    color: #000000;
  }
`;

const RightIconButton = styled.button`
  margin-left: 0.75rem;
  margin-right: 0.35rem;
  border: none;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  cursor: pointer;
  &[disabled] {
    cursor: revert;
    transform: revert;
  }
`;
const LeftIconButton = styled.button`
  margin-left: 0.35rem;
  margin-right: 1.1rem;
  border: none;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  cursor: pointer;
  &[disabled] {
    cursor: revert;
    transform: revert;
  }
`;

const PageBtnBox = styled.div`
  display: flex;
  margin-bottom: 6.25rem;
  .pagebtn {
    margin: 0 auto;
    display: flex;
  }
  .pageNum {
    margin-right: 0.75rem;
  }
`;

const CardBox = styled.div`
  margin: 0 auto;
`;

export default Card;
