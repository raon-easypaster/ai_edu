import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import { LinkCard, CardColor, Column } from '../types';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (card: LinkCard, columnId: string) => void;
  initialData?: LinkCard;
  initialColumnId: string;
  columns: Column[];
}

const EditModal: React.FC<EditModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  initialData, 
  initialColumnId,
  columns 
}) => {
  const [formData, setFormData] = useState<Partial<LinkCard>>({
    title: '',
    content: '',
    description: '',
    url: '',
    color: CardColor.WHITE,
    icon: ''
  });
  const [selectedColumn, setSelectedColumn] = useState(initialColumnId);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData(initialData);
      } else {
        setFormData({
          title: '',
          content: '',
          description: '',
          url: '',
          color: CardColor.WHITE,
          icon: ''
        });
      }
      setSelectedColumn(initialColumnId);
    }
  }, [isOpen, initialData, initialColumnId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      alert('제목은 필수입니다.');
      return;
    }
    
    // Create a new card object
    const newCard: LinkCard = {
      id: initialData?.id || `card-${Date.now()}`,
      title: formData.title || '',
      content: formData.content,
      description: formData.description,
      url: formData.url,
      color: formData.color || CardColor.WHITE,
      icon: formData.icon,
      imageUrl: formData.imageUrl,
      tags: formData.tags,
      dateAdded: initialData?.dateAdded || new Date().toISOString().split('T')[0]
    };

    onSave(newCard, selectedColumn);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#2C2F36] rounded-xl shadow-2xl w-full max-w-lg border border-white/10 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#25282E]">
          <h2 className="text-lg font-bold text-white">
            {initialData ? '카드 수정' : '새 카드 추가'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar space-y-4">
          
          {/* Column Select */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">카테고리 (위치)</label>
            <select
              value={selectedColumn}
              onChange={(e) => setSelectedColumn(e.target.value)}
              className="w-full bg-[#1C1F26] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
            >
              {columns.map(col => (
                <option key={col.id} value={col.id}>{col.title}</option>
              ))}
            </select>
          </div>

          {/* Title & Icon */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-400 mb-1">제목 *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full bg-[#1C1F26] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500 placeholder-gray-600"
                placeholder="카드 제목"
                autoFocus
              />
            </div>
            <div className="w-20">
              <label className="block text-xs font-medium text-gray-400 mb-1">아이콘</label>
              <input
                type="text"
                value={formData.icon || ''}
                onChange={(e) => setFormData({...formData, icon: e.target.value})}
                className="w-full bg-[#1C1F26] border border-white/10 rounded-lg px-3 py-2 text-white text-center focus:outline-none focus:border-purple-500 placeholder-gray-600"
                placeholder="emoji"
              />
            </div>
          </div>

          {/* URL */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">링크 주소 (URL) - 비워두면 메모 카드가 됨</label>
            <input
              type="url"
              value={formData.url || ''}
              onChange={(e) => setFormData({...formData, url: e.target.value})}
              className="w-full bg-[#1C1F26] border border-white/10 rounded-lg px-3 py-2 text-blue-400 focus:outline-none focus:border-purple-500 placeholder-gray-600"
              placeholder="https://..."
            />
          </div>

          {/* Content (Textarea) */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">내용 / 메모</label>
            <textarea
              value={formData.content || ''}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="w-full bg-[#1C1F26] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500 placeholder-gray-600 min-h-[100px]"
              placeholder="내용을 입력하세요. 줄바꿈이 지원됩니다."
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">짧은 설명 (선택)</label>
            <input
              type="text"
              value={formData.description || ''}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full bg-[#1C1F26] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500 placeholder-gray-600"
              placeholder="카드 하단에 표시될 작은 설명"
            />
          </div>

          {/* Color Picker */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">카드 색상</label>
            <div className="flex flex-wrap gap-2">
              {Object.values(CardColor).map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setFormData({...formData, color})}
                  className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                    formData.color === color ? 'border-white scale-110 ring-2 ring-purple-500' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: getColorHex(color) }}
                  title={color}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#25282E] flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center gap-2 font-medium shadow-lg transition-all active:scale-95"
          >
            <Save size={16} />
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper for color preview
function getColorHex(color: CardColor): string {
  switch (color) {
    case CardColor.RED: return '#f43f5e';
    case CardColor.ORANGE: return '#f97316';
    case CardColor.YELLOW: return '#fbbf24';
    case CardColor.GREEN: return '#10b981';
    case CardColor.BLUE: return '#0ea5e9';
    case CardColor.PURPLE: return '#8b5cf6';
    case CardColor.PINK: return '#ec4899';
    case CardColor.GRAY: return '#6b7280';
    case CardColor.WHITE: default: return '#ffffff';
  }
}

export default EditModal;
