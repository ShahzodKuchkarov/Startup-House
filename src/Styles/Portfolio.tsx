import styled from "styled-components";

export const PortfolioStyle = styled.div`
  width: 100%;

  .portfolio__button {
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
  }
  .protfolio__table {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
  .portfolio__btn {
    display: none;
  }

  @media (max-width: 900px) {
    .protfolio__table {
      position: absolute;
      transform: translateX(100%);
    }
  }
`;
