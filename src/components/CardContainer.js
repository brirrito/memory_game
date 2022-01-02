import React, { useState, useEffect } from 'react';
import Card from './Card';
import dewgong from '../images/dewgong.jpg';
import dragonair from '../images/dragonair.jpg';
import dragonite from '../images/dragonite.jpg';
import flareon from '../images/flareon.jpg';
import gastly from '../images/gastly.jpg';
import jigglypuff from '../images/jigglypuff.jpg';
import nidoran from '../images/nidoran.jpg';
import ninetails from '../images/nine_tails.jpg';
import rapidash from '../images/rapidash.jpg';

function CardContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  let images = [
    {
      src: dewgong,
      title: 'Dewgong',
      backgroundColor: '#d5caf2',
      borderStyle: '1px solid rgb(255 233 137)',
    },
    {
      src: dragonair,
      title: 'Dragonair',
      backgroundColor: '#71A9F6',
      borderStyle: '1px solid rgb(255 233 137)',
    },
    {
      src: dragonite,
      title: 'Dragonite',
      backgroundColor: '#42A376',
      borderStyle: '1px solid rgb(255 233 137)',
    },
    {
      src: flareon,
      title: 'Flareon',
      backgroundColor: '#DB3C52',
      borderStyle: '1px solid rgb(255 233 137)',
    },
    {
      src: gastly,
      title: 'Gastly',
      backgroundColor: '#DA7789',
      borderStyle: '1px solid rgb(255 233 137)',
    },
    {
      src: jigglypuff,
      title: 'Jigglypuff',
      backgroundColor: '#FFD1D0',
      borderStyle: '1px solid rgb(255 233 137)',
    },
    {
      src: nidoran,
      title: 'Nidoran',
      backgroundColor: '#BB68C2',
      borderStyle: '1px solid rgb(255 233 137)',
    },
    {
      src: ninetails,
      title: 'Ninetails',
      backgroundColor: '#FB8324',
      borderStyle: '1px solid rgb(255 233 137)',
    },
    {
      src: rapidash,
      title: 'Rapidash',
      backgroundColor: '#E50909',
      borderStyle: '1px solid rgb(255 233 137)',
    },
  ];

  const [cards, setNewCards] = useState(images);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [score, highScore]);

  return (
    <>
    {cards.map((card) => (
      <Card card={card} key={card.title} handleGameLogic={handleGameLogic} /> 
    ))}
    </>
  );
}

export default CardContainer;