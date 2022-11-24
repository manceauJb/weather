import { map } from "lodash";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import findByType from "../../utils/findByType";

interface CardProps {
  href: string;
  title: string;
  description?: string;
  children?: JSX.Element;
}

interface CardsProps {
	children: JSX.Element[] | JSX.Element;
}

const StyledCard = styled(Link)({
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    maxWidth: '300px',
    '&:hover, &:focus, &:active': {
        color: '#0070f3',
        borderColor: '#0070f3',
        textDecoration: 'none',
    },
});
const StyledCards = styled('div')({
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '800px',
});

const Card: React.FC<CardProps> = ({ href, title, children }: CardProps) => (
    <StyledCard href={href} >
        <h2>{title} &rarr;</h2>
        {children}
    </StyledCard>
);

const Cards = ({ children }: CardsProps) => {
    const renderCards = () => map(findByType(children, Card), (card) => card);
	return (
        <StyledCards>
            {renderCards()}
        </StyledCards>
    )
};
Cards.Card = Card;

export default Cards;
