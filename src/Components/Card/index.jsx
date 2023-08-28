import React from 'react';

import { CardContainer, ImageBackground, Content, UserInfo, PostInfo, HasInfo } from "./styles";

import { FitThumbsUp } from 'react';

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground src='https://avatars.githubusercontent.com/u/107080524?s=200&v=4'>
                <Content>
                    <UserInfo image= 'https://avatars.githubusercontent.com/u/113718720?v=4' nome= 'Flaviana Ferraz' />
                    <p>Há 8 minutos</p>
                    <PostInfo>
                        <h4>Projeto para Curso de React </h4>
                        <p>Projeto feito no curso React no Bootcamp Orange Tech + <strong>Saiba Mais</strong></p>
                    </PostInfo>
                    <HasInfo>
                        <h4>#HTML #CSS #Javascript #React</h4>
                        <p>
                            <FitThumbsUp /> 10
                        </p>
                    </HasInfo>
                </Content>
            </ImageBackground>
        </CardContainer>
    )
}

export { Card };