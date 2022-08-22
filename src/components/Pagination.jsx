import styled from "styled-components";

import { ReactComponent as LeftIcon1 } from "../assets/Group 106.svg";
import { ReactComponent as LeftIcon2 } from "../assets/Group 107.svg";
import { ReactComponent as LeftIcon3 } from "../assets/Group 106 1.svg";
import { ReactComponent as LeftIcon4 } from "../assets/Group 107 1.svg";

import { ReactComponent as RightIcon1 } from "../assets/Group 108.svg";
import { ReactComponent as RightIcon2 } from "../assets/Group 109.svg";
import { ReactComponent as RightIcon3 } from "../assets/Group 108 1.svg";
import { ReactComponent as RightIcon4 } from "../assets/Group 109 1.svg";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
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
                <PageResetBtn onClick={() => setPage(1)} disabled={page === 1}>
                  <LeftIcon3 />
                </PageResetBtn>
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
                <PageLastBtn
                  onClick={() => setPage(numPages)}
                  disabled={page === numPages}
                >
                  <RightIcon2 />
                </PageLastBtn>
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

const PageLastBtn = styled.button`
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

const PageResetBtn = styled.button`
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

export default Pagination;
