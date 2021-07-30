import styled from "styled-components";

export const LoginButton = styled.button`
    border:0;
    background: none;
    display: block;
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