// import styled from "styled-components";
// import { AiOutlineSearch } from "react-icons/ai";

// const Search = ({ item }) => {
//   console.log(item);

//   const newSearch = [];
//   const nameList = item.map((a) => a.nickname);
//   console.log(nameList);
//   const nameSet = nameList.map((a) => [...new Set(a)]);
//   console.log(nameSet);

//   return (
//     <>
//       <SearchBox>
//         <div className="input">
//           <SearchInput placeholder="검색" />
//           <div className="searchBtn">
//             <AiOutlineSearch />
//           </div>
//         </div>
//       </SearchBox>
//     </>
//   );
// };

// const SearchBox = styled.div`
//   width: 100vw;
//   margin-top: 3rem;
//   display: flex;
//   margin: 3rem auto 0 auto;
//   @media screen and (max-width: 1024px) {
//     width: 64rem;
//   }
//   @media screen and (max-width: 360px) {
//     width: 22.5rem;
//   }
//   .searchBtn {
//     display: flex;
//     align-items: center;
//     margin-left: -1.5rem;
//     cursor: pointer;
//   }
//   .input {
//     display: flex;
//     margin: 0 auto;
//   }
// `;
// const SearchInput = styled.input`
//   width: 23.126rem;
//   height: 2rem;
//   border-radius: 20px;
//   font-size: 14px;
//   font-weight: 500;
//   padding-left: 1.5rem;
//   border: 1px solid black;
//   @media screen and (max-width: 360px) {
//     width: 18.3rem;
//   }
// `;

// export default Search;
