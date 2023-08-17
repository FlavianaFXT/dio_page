import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    max-width: 800%;
    heigth: 47px;

    display:flex;
    justify-content: space-between;
    alignt-items: center;
    margin: 0 auto;
`
export const Wrapper = styled.div`
    background-color: #151515;
    width:100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items:center;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius:22px;
    border: 2px solid #FFFF;
`

export const BuscarInputContainer = styled.div`
    width:175px;
    height:30px;
    background: #2D2037;
    border-radius: 8px;
    padding: 2px 5px;
    margin:0 12px;

    display:flex;
    align-items: center;
    justify-content: center;
`
export const Menu = styled.a`
    font-family: 'Open Sans',
    font-style: normal;
    font-size: 18px;
    line-heigth: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`
export const MenuRight = styled.a`
    font-family: 'Open Sans',
    font-style: normal;
    font-size: 12px;
    line-heigth: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`
export const Input = styled.input`
    background: transparent;
    flex: 1;
    border:0;
    color: #FFFF;
`
