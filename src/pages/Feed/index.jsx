import { Link } from 'react-router-dom';

import { Card } from '../../Components/Card';

import { UserInfo } from '../../Components/UserInfo';

//import bannerImage from '../../assets/bannerImage.png';

//import { Button } from '../../Components/Button';

import { Header } from '../../Components/Header';

import { Container, Column, Title, TitleHighLight } from './styles';



const Feed = ( ) => {
    return (<>
    <Header autenticado={true}/>
        <Link to="/feed"></Link>
    <Header />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
           </Column>
           <Column flex={1}>
                <TitleHighLight>#RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual = { 80 } nome= "Flaviana Ferraz" image = "https://avatars.githubusercontent.com/u/113718720?v=4"/>
                <UserInfo percentual = { 30 } nome= "Flaviana Ferraz" image = "https://avatars.githubusercontent.com/u/113718720?v=4"/>
                <UserInfo percentual = { 55 } nome= "Flaviana Ferraz" image = "https://avatars.githubusercontent.com/u/113718720?v=4"/>
                <UserInfo percentual = { 43 } nome= "Flaviana Ferraz" image = "https://avatars.githubusercontent.com/u/113718720?v=4"/>
                <UserInfo percentual = { 72 } nome= "Flaviana Ferraz" image = "https://avatars.githubusercontent.com/u/113718720?v=4"/>
           </Column>
        </Container>
    </>
    );
};

export { Feed };
