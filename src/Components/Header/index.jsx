import React from 'react';
import  dioLogo  from '../../assets/logo_dio.png';
import { Button } from '../Button';

import{
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';

const Header = ( { autenticado } ) => {
    return(
    <Wrapper>
        <Container>
            <Row>
                <img src={dioLogo} alt="Logo da Dio" />
                { autenticado ? (
                <>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>
                ): null}
            </Row>
            <Row>
                { autenticado ? (<UserPicture src='https://avatars.githubusercontent.com/u/113718720?v=4'/>) : (
                <>
                <MenuRight href = "/">Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
                </>)
                }                
            </Row>
        </Container>
    </Wrapper>

    )
}

export { Header };