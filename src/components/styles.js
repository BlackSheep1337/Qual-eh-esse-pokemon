import styled from 'styled-components';

export const ImgContainer = styled.div`
  img {
    width: 300px;
    height: 300px;
  }
`;

export const BtnContainer = styled.div`
  button {
    font-weight: bold;
    margin-left: 12px;
    color: gold;
  }
  @media(max-width: 550px) {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    height: 180px;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 25px;
  padding-left: 2rem;
  h1 {
    font-size: 40px;
  }
`;