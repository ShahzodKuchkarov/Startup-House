import styled from "styled-components";

export const CompaniesStyle = styled.div`
  width: 100%;
  margin-right: 1.5rem;
  border-right: 1px solid #e4e1e1;
  padding-right: 3rem;

  .search {
    margin-bottom: 1.5rem;
  }
`;

export const SearchedCompaniesList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;

  .list__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1rem;
    box-shadow: 3px 3px 11px #ccc;
    margin: 1rem 0;
  }
  .list__title-wrapper {
    display: flex;
  }
  .list__hyphen {
    margin: 0 5px;
  }
  .list__button {
    background: transparent;
    border: transparent;
    font-size: 2rem;
    padding: 0;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.6rem;
    margin-left: 1.3rem;
  }
`;

export const CompanyDetail = styled.div`
  padding: 3rem;

  .detail__link {
    margin-bottom: 2rem;
  }

  .detail__link a {
    border: 1px solid;
    padding: 0.5rem 2rem;
    width: fit-content;
    color: #000;
  }

  .detail__title {
    margin-bottom: 0;
  }

  .detail__wrapper {
    display: flex;
    align-items: flex-end;
  }
  .detail__text--bold {
    font-weight: 800;
    margin-right: 0.3rem;
    font-size: 1rem;
  }
  .detail__text {
    margin-top: 2rem;
  }
`;
