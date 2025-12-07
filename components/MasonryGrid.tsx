import React, { useState, useEffect } from 'react';
import { LinkCard } from '../types';
import Card from './Card';

interface MasonryGridProps {
  cards: LinkCard[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ cards }) => {
  const [columns, setColumns] = useState(1);

  // Determine number of columns based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setColumns(4); // xl
      else if (window.innerWidth >= 1024) setColumns(3); // lg
      else if (window.innerWidth >= 640) setColumns(2); // sm
      else setColumns(1); // mobile
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Distribute cards into columns
  const columnWrappers: LinkCard[][] = Array.from({ length: columns }, () => []);
  
  cards.forEach((card, index) => {
    columnWrappers[index % columns].push(card);
  });

  return (
    <div className="flex gap-4 items-start pb-20">
      {columnWrappers.map((colCards, colIndex) => (
        <div key={colIndex} className="flex-1 flex flex-col min-w-0">
          {colCards.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
