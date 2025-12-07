import React from 'react';
import { ExternalLink, Calendar, AlignLeft, ArrowUpRight } from 'lucide-react';
import { LinkCard, CardColor } from '../types';
import { COLOR_MAP } from '../constants';

interface CardProps {
  data: LinkCard;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const colorClass = COLOR_MAP[data.color] || COLOR_MAP[CardColor.WHITE];
  const isLink = !!data.url;

  // Base classes
  const cardBaseClasses = `group block w-full mb-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 ${colorClass} relative overflow-hidden`;

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

      <div className="p-4">
        {/* Title Area */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-base font-bold text-gray-900 leading-snug">
            {data.icon && <span className="mr-2 inline-block">{data.icon}</span>}
            {data.title}
          </h3>
          {isLink && (
            <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
          )}
        </div>

        {/* Short Description */}
        {data.description && (
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            {data.description}
          </p>
        )}

        {/* Long Content (Preserves Newlines) */}
        {data.content && (
          <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap mb-3 pt-2 border-t border-gray-100/50">
            {data.content}
          </div>
        )}

        {/* Footer (Tags/Date) - Optional, simplified for shelf view */}
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
      </div>
    </>
  );

  if (isLink) {
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