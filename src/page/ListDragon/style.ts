import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1080px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.background};
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 10;
    left: 70%;
    opacity: 0;
    transition: opacity 1s;
  }
  .tooltip .tooltiptext::after {
    content: ' ';
    position: absolute;
    top: 50%;
    right: 100%; /* To the left of the tooltip */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;
export const TitlePage = styled.div`
  margin: 0 auto;
  font-size: 20px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  color: ${props => props.theme.secondaryColor};
  hr {
    margin-top: 0.5rem;
    border: 2px solid ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.secondaryColor};
    border-radius: 2px;
  }
`;

export const AddContainer = styled.div`
  max-width: 1080px;
  display: flex;
  padding-top: 20px;
  margin: 0 auto;
  width: 80%;
  justify-content: flex-end;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const OrderContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    align-items: center;
    display: flex;
    font-size: 1.3rem;
    margin-left: 0.3rem;
    background: transparent;
    color: #fff;

    &:hover {
      color: ${transparentize(0.2, '#fff')};
    }
  }
`;

export const TableContainer = styled.section`
  table {
    width: 80%;
    border-collapse: collapse;
    margin: 1rem auto;

    tr {
      border-bottom: 1px solid #ccc;
      &:hover {
        background: ${props => props.theme.lightGrey};
      }
      &:last-child {
        border-bottom: 10px solid ${props => props.theme.primaryColor};
      }
    }

    th {
      background: ${props => props.theme.primaryColor};
      color: #fff;
      padding: 0.75rem 0.75rem;
      text-align: center;
      font-weight: 500;
    }

    td {
      padding: 1rem 0.75rem;
      text-align: center;
      font-size: 16px;
    }

    @media (max-width: 992px) {
      width: 100%;
      table,
      thead,
      tbody,
      th,
      td,
      tr {
        display: block;
      }

      thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }

      tr {
        border: 1px solid #ccc;
      }

      td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      td:before {
        padding-right: 10px;
        content: attr(data-column);
        color: #000;
        font-weight: bold;
      }
    }
  }
`;
