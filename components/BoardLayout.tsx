import React from 'react';
import { Column } from '../types';
import Card from './Card';

interface BoardLayoutProps {
  columns: Column[];
}

const BoardLayout: React.FC<BoardLayoutProps> = ({ columns }) => {
  return (
    <div className="flex overflow-x-auto pb-8 items-start h-[calc(100vh-80px)] px-4 sm:px-8 snap-x snap-mandatory">
      {columns.map((column) => (
        <div 
          key={column.id} 
          className="flex-shrink-0 w-[320px] mr-6 flex flex-col h-full snap-start"
        >
          {/* Column Header */}
          <div className="mb-4 flex items-center justify-between px-1 sticky top-0 z-10">
            <h2 className="text-white font-bold text-lg tracking-wide drop-shadow-md">
              {column.title}
            </h2>
            <span className="text-xs font-mono text-white/50 bg-black/20 px-2 py-0.5 rounded-full">
              {column.cards.length}
            </span>
          </div>

          {/* Cards Container (Vertical Scroll) */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
            {column.cards.map((card) => (
              <Card key={card.id} data={card} />
            ))}
            
            {/* Empty State placeholder if needed */}
            {column.cards.length === 0 && (
              <div className="h-24 border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center text-white/20 text-sm">
                내용 없음
              </div>
            )}
          </div>
        </div>
      ))}
      
      {/* Spacer for right padding */}
      <div className="w-4 flex-shrink-0" />
    </div>
  );
};

export default BoardLayout;