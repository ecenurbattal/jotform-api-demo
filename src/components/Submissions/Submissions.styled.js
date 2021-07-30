import styled from "styled-components";

export const Table = styled.table`
    background-color: #bdd4e7;
    background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
    width: 90%;
    margin:auto;
    margin-top:30px;
`;

export const TableItem = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    text-align: center;
    font-family: $comic_sans;
`;

export const TableTitle = styled.tr`
    font-size: 24px;
    font-weight: 800;
    color:white;

    &:nth-child(even){
        background-color: #8e44ad;
    }
`;