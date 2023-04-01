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

export const Title = styled.h2`
font-family: 'Open Sans';
font-style: normal;
font-weight:700;
sont-size: 32px;
width:320px;
margin-bottom: 20px;
line-heigth: 44px;

color: #FFFF;
`

export const TitleHighLight = styled.span`
color: #E41050;
`

export const TextContent = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight:400;
sont-size: 16px;
width:420px;
margin-bottom: 20px;
line-heigth: 22px;

color: #FFFF;
`