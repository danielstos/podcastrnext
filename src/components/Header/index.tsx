import React from 'react'
import Container from './styles';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';






export const Header: React.FC = () => {

    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    return (

        <Container >
            <img src="/logo.svg" alt="Podcastr" />
            <p>O melhor para você ouvir, sempre</p>
            <span>{currentDate}</span>
        </Container>




    );
}