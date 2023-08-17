import React from 'react';

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles";

import { FitThumbsUp } from 'react';

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground>
                <Content>
                    <UserInfo>
                        <UserPicture src='https://avatars.githubusercontent.com/u/113718720?v=4'/>
                        <ImageBackground src='https://avatars.githubusercontent.com/u/107080524?s=200&v=4'/>
                        <h4>Flaviana Ferraz</h4>
                        <p>Há 8 minutos</p>
                        
                    </UserInfo>
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