import React from 'react';
import { Plus } from 'lucide-react';
import { Column, LinkCard } from '../types';
import Card from './Card';

interface BoardLayoutProps {
  columns: Column[];
  isEditMode?: boolean;
  onEditCard?: (card: LinkCard) => void;
  onDeleteCard?: (cardId: string) => void;
  onAddCardToColumn?: (columnId: string) => void;
}

const BoardLayout: React.FC<BoardLayoutProps> = ({ 
  columns, 
  isEditMode, 
  onEditCard, 
  onDeleteCard, 
  onAddCardToColumn 
}) => {
  return (
    <div className="flex overflow-x-auto pb-8 items-start h-[calc(100vh-80px)] px-4 sm:px-8 snap-x snap-mandatory">
      {columns.map((column) => (
        <div 
          key={column.id} 
          className="flex-shrink-0 w-[320px] mr-6 flex flex-col h-full snap-start"
        >
          {/* Column Header */}
          <div className="mb-4 flex items-center justify-between px-1 sticky top-0 z-10 group">
            <h2 className="text-white font-bold text-lg tracking-wide drop-shadow-md flex items-center gap-2">
              {column.title}
            </h2>
            <div className="flex items-center gap-2">
               <span className="text-xs font-mono text-white/50 bg-black/20 px-2 py-0.5 rounded-full">
                {column.cards.length}
              </span>
            </div>
          </div>

          {/* Cards Container (Vertical Scroll) */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
            {/* Add Button for Edit Mode (Top) */}
            {isEditMode && (
               <button
                 onClick={() => onAddCardToColumn?.(column.id)}
                 className="w-full py-3 mb-3 border-2 border-dashed border-white/20 rounded-lg text-white/50 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all flex items-center justify-center gap-2 font-medium"
               >
                 <Plus size={16} /> 카드 추가
               </button>
            )}

            {column.cards.map((card) => (
              <Card 
                key={card.id} 
                data={card} 
                isEditMode={isEditMode}
                onEdit={onEditCard}
                onDelete={onDeleteCard}
              />
            ))}
            
            {/* Empty State placeholder */}
            {column.cards.length === 0 && !isEditMode && (
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
