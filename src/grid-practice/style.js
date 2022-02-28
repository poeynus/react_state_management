import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 200px 200px 500px;

  row-gap: 10px;
  column-gap: 20px;
  align-items: stretch;
  justify-content: stretch;
`;
// 1fr 1fr 1fr = repeat(3, 1fr)
// minmax = 최소와 최대를 정해줌 auto 가능 => repeat(3, minmax(100px, auto))
// auto-fill = 자동으로 채워줌 => repeat(auto-fill, minmax(20%,auto))
// auto-fit = 남는 공간을 채워줌
// place-items: center start; => align, justify 한번에 주기
// row-gap = 세로 공간
// column-gap = 가로 공간
// gap = row, column 2개다 동일한 값
// grid-auto-rows: minmax(100px, auto) = row 갯수를 알 수 없을때

export const GridItem = styled.div`
  border: 1px solid black;

  &:nth-child(1) {
      grid-column-start: 1;
      grid-column-end:3;
      grid-row-start;
      grid-row-end;
      align-self: start
  }
`;
// grid-column: 1 / 3; 위와 동일
// grid-row: 1 / 2; 위와 동일
// align-self, justify-self: 개별 위치
// 번호 매기는 건 신기하네 나중에 사진으로 보셈
// column 세로 row 가로

export const GridArea = styled.div`
  grid-template-areas:
    "header header header"
    "  a     main     b  "
    "footer footer footer";
`;

export const GridHeader = styled.div`
  grid-area: header;
`;

export const GridFooter = styled.div`
  grid-area: footer;
`;
