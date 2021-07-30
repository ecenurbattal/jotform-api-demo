import styled from "styled-components";

export const FormItemWrapper = styled.div`
    min-width:50%;
    min-height:25px;
    font-size:17px;
    border:0;
    margin: 15px auto;
    background: none;
    text-align: center;
    border: 3px solid #8e44ad;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;

    &:hover {
        background: #8e44ad;
    }
`;