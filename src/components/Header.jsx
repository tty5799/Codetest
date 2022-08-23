import styled from "styled-components";
import Ptn from "../assets/banner_pattern.svg";
import Char from "../assets/banner_char.svg";

const Header = () => {
  return (
    <>
      <ImageBox>
        <div className="patten">
          <div className="char" />
        </div>
      </ImageBox>
    </>
  );
};

const ImageBox = styled.div`
  .patten {
    background-image: url(${Ptn});
    background-size: cover;
    background-repeat: unset;
    background-position: center;
    width: 100vw;
    height: 300px;

    @media screen and (max-width: 1024px) {
      background-size: cover;
    }
    @media screen and (max-width: 360px) {
      background-size: 96rem auto;
      height: 15rem;
    }
  }
  .char {
    background-image: url(${Char});
    width: 35rem;
    height: 18.75rem;
    display: flex;
    margin: auto;
    background-size: 35rem 18.75rem;
    background-position: center -10px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    transition: 400ms;
    @media screen and (max-width: 360px) {
      width: 22.5rem;
      height: 14.7rem;
      background-size: 22.5rem 12.0625rem;
      background-position: center 44px;
    }
  }
`;

export default Header;
