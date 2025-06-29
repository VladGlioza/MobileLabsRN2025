import styled from "styled-components/native";

export const Card = styled.View`
    background-color: #2a2a2a;
    border-radius: 12px;
    margin: 8px 16px;
    overflow: hidden;
    //elevation: 3;
`;

export const Cover = styled.Image`
    width: 100%;
    height: 180px;
`;

export const Info = styled.View`
    padding: 12px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #ececec;
`;

export const Tag = styled.Text`
    font-size: 12px;
    color: #1a9fff;
    margin-top: 4px;
`;
