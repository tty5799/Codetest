import styled from "styled-components";

import { ReactComponent as User } from "../assets/Frame.svg";
import { ReactComponent as Icon1 } from "../assets/Group 1515.svg";
import { ReactComponent as Icon2 } from "../assets/Group 1516.svg";

const CardData = (props) => {
  const { item } = props;

  return (
    <>
      <CardBox>
        <DataBox>
          <HeadBox>
            <ImageBox>
              <User width="60px" height="60px" />
            </ImageBox>
          </HeadBox>
          <MiddleBox>
            <TitleBox>
              {props.result === true ? (
                <div className="resultName">
                  <span className="resultText">{item.nickname}</span>
                </div>
              ) : (
                <div className="name">{item.nickname}</div>
              )}

              <div className="building">
                지구家 아파트 {item.building_count}개
              </div>
            </TitleBox>
            <div className="middle">
              <Icon1 width="16px" height="16px" />
              <span className="smallName">{item.nickname}</span>
              <Icon2 width="16px" height="16px" />
              <span className="nickName">{item.oname}</span>
            </div>
          </MiddleBox>
        </DataBox>
      </CardBox>
    </>
  );
};

const HeadBox = styled.div`
  margin-right: 2.25rem;
  display: flex;
  align-items: center;
`;

const TitleBox = styled.div`
  display: flex;
  margin-bottom: 0.3rem;
  margin-top: 0.15rem;
  align-items: center;
  flex-wrap: wrap;
`;

const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -1.25rem;
  justify-content: center;

  .resultName {
    display: flex;
    text-align: center;
    align-items: center;
    padding: 1px 0.5px;
    font-size: 18px;
    font-weight: bold;
    margin-right: 0.75rem;
    color: black;
    background: rgba(68, 152, 242, 0.5);
  }
  .resultText {
    font-size: 18px;
    font-weight: bold;
  }
  .name {
    font-size: 18px;
    font-weight: bold;
    margin-right: 0.75rem;
    margin-bottom: 0.25rem;
  }
  .building {
    color: #4498f2;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 0.39rem;
  }
  .middle {
    display: flex;
    align-items: center;
    margin-top: 0.25rem;
  }
  .smallName {
    font-size: 12px;
    font-weight: 500;
    color: #9999;
    margin-left: 0.45rem;
    margin-right: 0.75rem;
  }
  .nickName {
    font-size: 12px;
    font-weight: 500;
    color: #9999;
    margin-left: 0.25rem;
  }
`;

const DataBox = styled.div`
  display: flex;
`;
const ImageBox = styled.div`
  width: 3.75rem;
`;

const CardBox = styled.div`
  width: 32rem;
  padding: 1rem 1.5rem;
  margin: 0 auto 1rem auto;
  border-radius: 10px;
  border: 1px solid #000000;
  @media screen and (max-width: 360px) {
    width: 17rem;
  }
  @media screen and (max-width: 575px) {
    width: 76%;
  }
`;

export default CardData;
