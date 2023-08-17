import styled from "styled-components";

export const Container = styled.main`
width:100%;
max-width: 80%;
margin: 0 auto;
margin-top: 120px;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
`

export const Title = styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight:700;
sont-size: 18px;
margin-botton: 24px;
line-heigth: 25px;

color: #FFFF;
`

export const TitleHighLight = styled.h3`
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color: #FFFFFF70;
margin-bottom: 24px;
`

export const Column = styled.div`
flex: ${({flex}) => flex};
padding-right: 24px;
`