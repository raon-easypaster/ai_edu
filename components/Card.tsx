import React from 'react';
import { ExternalLink, ArrowUpRight, Edit2, Trash2 } from 'lucide-react';
import { LinkCard, CardColor } from '../types';
import { COLOR_MAP } from '../constants';

interface CardProps {
  data: LinkCard;
  isEditMode?: boolean;
  onEdit?: (card: LinkCard) => void;
  onDelete?: (cardId: string) => void;
}

const Card: React.FC<CardProps> = ({ data, isEditMode, onEdit, onDelete }) => {
  const colorClass = COLOR_MAP[data.color] || COLOR_MAP[CardColor.WHITE];
  const isLink = !!data.url;

  // Base classes
  const cardBaseClasses = `group block w-full mb-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 ${colorClass} relative overflow-hidden select-none`;

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onEdit?.(data);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDelete?.(data.id);
    }
  };

  const renderContent = () => (
    <>
      {data.imageUrl && (
        <div className="w-full h-32 overflow-hidden relative border-b border-gray-100">
          <img 
            src={data.imageUrl} 
            alt={data.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-4 relative">
        {/* Title Area */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-base font-bold text-gray-900 leading-snug pr-4">
            {data.icon && <span className="mr-2 inline-block">{data.icon}</span>}
            {data.title}
          </h3>
          {isLink && !isEditMode && (
            <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
          )}
        </div>

        {/* Short Description */}
        {data.description && (
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            {data.description}
          </p>
        )}

        {/* Long Content */}
        {data.content && (
          <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap mb-3 pt-2 border-t border-gray-100/50">
            {data.content}
          </div>
        )}

        {/* Footer (Tags/Date) */}
        {(data.tags || data.dateAdded) && (
          <div className="flex flex-wrap items-center justify-between gap-2 mt-2 pt-2 border-t border-black/5 opacity-60">
            <div className="flex flex-wrap gap-1">
              {data.tags?.map(tag => (
                <span key={tag} className="text-[10px] bg-black/5 px-1.5 py-0.5 rounded text-gray-500">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Edit Mode Overlays */}
        {isEditMode && (
          <div className="absolute top-2 right-2 flex gap-1 z-20">
            <button 
              onClick={handleEditClick}
              className="p-1.5 bg-white/90 rounded-full text-blue-600 hover:bg-blue-50 shadow-sm border border-black/5 hover:scale-110 transition-all"
            >
              <Edit2 size={14} />
            </button>
            <button 
              onClick={handleDeleteClick}
              className="p-1.5 bg-white/90 rounded-full text-red-600 hover:bg-red-50 shadow-sm border border-black/5 hover:scale-110 transition-all"
            >
              <Trash2 size={14} />
            </button>
          </div>
        )}
      </div>
    </>
  );

  if (isLink && !isEditMode) {
    return (
      <a 
        href={data.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={cardBaseClasses}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <div className={cardBaseClasses}>
      {renderContent()}
    </div>
  );
};

export default Card;
