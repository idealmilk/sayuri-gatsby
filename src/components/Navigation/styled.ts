import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1000;
`;

export const TileWrap = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
`;
