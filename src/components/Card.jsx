import styled from "styled-components";
import CardData from "./CardData";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

import { ReactComponent as NoData } from "../assets/nodata.svg";

const Card = ({ filter, item, result }) => {
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const [CardList, setCardList] = useState([]);
  const [resultState, setResultState] = useState(false);

  const offset = (page - 1) * limit;

  useEffect(() => {
    setCardList(item);
    setResultState(false);

    if (result.length !== 0) {
      setCardList(result);
      setResultState(true);
    } else {
      setCardList(item);
      setResultState(false);
    }
    if (filter === "main") {
      if (result.length !== 0) {
        setCardList(result);
        setResultState(true);
      } else {
        setCardList(item);
      }
    } else if (filter === "all") {
      if (result.length !== 0) {
        setCardList(result);
        setResultState(true);
      } else {
        setCardList(item);
      }
    } else if (filter === "5") {
      if (result.length !== 0) {
        const resultData = result.filter((List) => {
          console.log(List.building_count);
          return List.building_count >= 5;
        });
        setCardList(resultData);
      } else {
        const filterData = item.filter((itemList) => {
          return itemList.building_count >= 5;
        });
        setCardList(filterData);
      }
    } else if (filter === "4") {
      if (result.length !== 0) {
        const resultData = result.filter((itemList) => {
          return itemList.building_count === 4;
        });
        setCardList(resultData);
      } else {
        const filterData = item.filter((itemList) => {
          return itemList.building_count === 4;
        });
        setCardList(filterData);
      }
    } else if (filter === "3") {
      if (result.length !== 0) {
        const resultData = result.filter((itemList) => {
          return itemList.building_count === 3;
        });
        setCardList(resultData);
      } else {
        const filterData = item.filter((itemList) => {
          return itemList.building_count === 3;
        });
        setCardList(filterData);
      }
    } else if (filter === "2") {
      if (result.length !== 0) {
        const resultData = result.filter((itemList) => {
          return itemList.building_count === 2;
        });
        setCardList(resultData);
      } else {
        const filterData = item.filter((itemList) => {
          return itemList.building_count === 2;
        });
        setCardList(filterData);
      }
    } else if (filter === "1") {
      if (result.length !== 0) {
        const resultData = result.filter((itemList) => {
          return itemList.building_count === 1;
        });
        setCardList(resultData);
      } else {
        const filterData = item.filter((itemList) => {
          return itemList.building_count === 1;
        });
        setCardList(filterData);
      }
    }
  }, [filter, item, result]);

  return (
    <>
      {CardList.length === 0 && resultState === false ? null : null}
      {CardList.length === 0 && resultState === true ? (
        <NodataBox>
          <ImageBox>
            <NoData width="9rem" height="50%" />
          </ImageBox>
          <TextBox>해당 글을 찾을 수 없어요!</TextBox>
        </NodataBox>
      ) : (
        <CardBox>
          {CardList.slice(offset, offset + limit).map((item, idx) => {
            return <CardData item={item} key={idx} result={resultState} />;
          })}
        </CardBox>
      )}

      <Pagination
        total={CardList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

const CardBox = styled.div`
  margin: 0 auto;
`;

const NodataBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  margin: 1rem auto 0 auto;
`;

const TextBox = styled.div`
  margin: 2rem auto;
  font-size: 30px;
  font-weight: bold;
`;

export default Card;
