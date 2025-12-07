import React, { useState, useMemo } from 'react';
import { Search, Settings, Github, Check, Copy, AlertCircle, Play } from 'lucide-react';
import BoardLayout from './components/BoardLayout';
import EditModal from './components/EditModal';
import { INITIAL_COLUMNS, APP_TITLE, APP_DESCRIPTION, AUTHOR_LINK } from './constants';
import { Column, LinkCard } from './types';

function App() {
  const [columns, setColumns] = useState<Column[]>(INITIAL_COLUMNS);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Edit Mode State
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCard, setEditingCard] = useState<LinkCard | undefined>(undefined);
  const [targetColumnId, setTargetColumnId] = useState<string>('');
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  // Filter cards/columns based on search input
  const filteredColumns = useMemo(() => {
    const lowerTerm = searchTerm.toLowerCase();
    if (!lowerTerm) return columns;

    return columns.map(col => ({
      ...col,
      cards: col.cards.filter(card => 
        card.title.toLowerCase().includes(lowerTerm) ||
        card.description?.toLowerCase().includes(lowerTerm) ||
        card.content?.toLowerCase().includes(lowerTerm)
      )
    })).filter(col => isEditMode || col.cards.length > 0); // Show empty cols in edit mode
  }, [searchTerm, columns, isEditMode]);

  // Handlers
  const handleEditModeToggle = () => {
    if (isEditMode) {
      if(window.confirm("편집 모드를 종료하시겠습니까?\n저장하지 않은 변경사항(내보내기 전)은 새로고침 시 사라집니다.")) {
        setIsEditMode(false);
      }
    } else {
      setIsEditMode(true);
    }
  };

  const handleAddCardToColumn = (columnId: string) => {
    setEditingCard(undefined);
    setTargetColumnId(columnId);
    setIsModalOpen(true);
  };

  const handleEditCard = (card: LinkCard) => {
    // Find column ID
    const colId = columns.find(col => col.cards.some(c => c.id === card.id))?.id || columns[0].id;
    setEditingCard(card);
    setTargetColumnId(colId);
    setIsModalOpen(true);
  };

  const handleDeleteCard = (cardId: string) => {
    setColumns(prev => prev.map(col => ({
      ...col,
      cards: col.cards.filter(c => c.id !== cardId)
    })));
  };

  const handleSaveCard = (card: LinkCard, columnId: string) => {
    setColumns(prev => {
      // 1. Remove card from all columns (in case it moved)
      const cleanCols = prev.map(col => ({
        ...col,
        cards: col.cards.filter(c => c.id !== card.id)
      }));

      // 2. Add to target column
      return cleanCols.map(col => {
        if (col.id === columnId) {
          // If editing existing card, try to keep position? For simplicity, add to top or replace
          // Check if it was in this column originally to preserve order? 
          // Simple approach: Add to top
          return { ...col, cards: [card, ...col.cards] };
        }
        return col;
      });
    });
  };

  const handleExportData = () => {
    const dataString = JSON.stringify(columns, null, 2);
    // We want to generate the Typescript code for constants.ts
    // This is a simple approximation
    const exportText = `import { CardColor, Column } from './types';

export const APP_TITLE = "${APP_TITLE}";
export const APP_DESCRIPTION = "${APP_DESCRIPTION}";
export const APP_AUTHOR = "Joo Class";
export const AUTHOR_LINK = "${AUTHOR_LINK}";

export const INITIAL_COLUMNS: Column[] = ${JSON.stringify(columns, null, 2)
  .replace(/"color": "white"/g, 'color: CardColor.WHITE')
  .replace(/"color": "red"/g, 'color: CardColor.RED')
  .replace(/"color": "orange"/g, 'color: CardColor.ORANGE')
  .replace(/"color": "yellow"/g, 'color: CardColor.YELLOW')
  .replace(/"color": "green"/g, 'color: CardColor.GREEN')
  .replace(/"color": "blue"/g, 'color: CardColor.BLUE')
  .replace(/"color": "purple"/g, 'color: CardColor.PURPLE')
  .replace(/"color": "pink"/g, 'color: CardColor.PINK')
  .replace(/"color": "gray"/g, 'color: CardColor.GRAY')
};

export const COLOR_MAP: Record<CardColor, string> = {
  [CardColor.WHITE]: 'bg-white text-gray-900 border-l-4 border-l-gray-300',
  [CardColor.RED]: 'bg-white text-gray-900 border-l-4 border-l-rose-500',
  [CardColor.ORANGE]: 'bg-white text-gray-900 border-l-4 border-l-orange-500',
  [CardColor.YELLOW]: 'bg-white text-gray-900 border-l-4 border-l-amber-400',
  [CardColor.GREEN]: 'bg-white text-gray-900 border-l-4 border-l-emerald-500',
  [CardColor.BLUE]: 'bg-white text-gray-900 border-l-4 border-l-sky-500',
  [CardColor.PURPLE]: 'bg-white text-gray-900 border-l-4 border-l-purple-500',
  [CardColor.PINK]: 'bg-white text-gray-900 border-l-4 border-l-pink-500',
  [CardColor.GRAY]: 'bg-white text-gray-900 border-l-4 border-l-gray-500',
};`;

    navigator.clipboard.writeText(exportText).then(() => {
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 3000);
      alert("데이터가 클립보드에 복사되었습니다!\n\n프로젝트의 'constants.ts' 파일 내용을\n복사된 내용으로 덮어쓰기 하세요.");
    });
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden text-white/90 selection:bg-pink-500 selection:text-white bg-[#1C1F26]">
      {/* Navigation / Header */}
      <header className={`shrink-0 z-50 transition-colors duration-300 ${isEditMode ? 'bg-[#2C1F26]/95 border-pink-500/30' : 'bg-[#1C1F26]/95 border-white/10'} backdrop-blur-md border-b shadow-sm relative`}>
        <div className="max-w-[100vw] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Logo / Title */}
          <div className="flex items-center gap-3 min-w-0 shrink-0">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0 ${isEditMode ? 'bg-gradient-to-br from-pink-500 to-rose-600' : 'bg-gradient-to-br from-indigo-500 to-purple-600'}`}>
              {isEditMode ? <Settings size={18} /> : 'AI'}
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none truncate flex items-center gap-2">
                {APP_TITLE} 
                {isEditMode && <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded-full font-medium">관리자 모드</span>}
              </h1>
              <span className="text-xs text-gray-400 leading-none mt-1 hidden sm:block">
                {isEditMode ? '변경 후 반드시 코드를 내보내서 저장하세요' : APP_DESCRIPTION}
              </span>
            </div>
          </div>

          {/* Search Bar (Hide in edit mode on small screens) */}
          <div className={`flex-1 max-w-sm relative group mx-4 ${isEditMode ? 'hidden md:block' : 'block'}`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-1.5 border border-white/10 rounded-full leading-5 bg-white/5 text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-all"
              placeholder="검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={isEditMode}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {isEditMode ? (
              <>
                 <button 
                  onClick={handleExportData}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-lg flex items-center gap-1.5 animate-pulse"
                  title="코드 복사 (저장용)"
                >
                  <Copy size={16} />
                  <span className="hidden sm:inline">데이터 내보내기</span>
                </button>
                <button 
                  onClick={handleEditModeToggle}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-lg flex items-center gap-1.5"
                >
                  <Check size={16} />
                  <span className="hidden sm:inline">완료</span>
                </button>
              </>
            ) : (
              <>
                <a 
                  href={AUTHOR_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10 hidden sm:block"
                  title="GitHub 저장소"
                >
                  <Github size={20} />
                </a>
                <button 
                  onClick={handleEditModeToggle}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-lg flex items-center gap-1.5"
                >
                  <Settings size={16} />
                  <span className="hidden sm:inline">관리 모드</span>
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Content (Board) */}
      <main className="flex-1 min-h-0 pt-6">
        {filteredColumns.length > 0 ? (
          <BoardLayout 
            columns={filteredColumns} 
            isEditMode={isEditMode}
            onEditCard={handleEditCard}
            onDeleteCard={handleDeleteCard}
            onAddCardToColumn={handleAddCardToColumn}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center pb-20 opacity-50">
            <Search className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">검색 결과 없음</h3>
            <p className="text-sm text-gray-400">다른 검색어로 시도해보세요.</p>
          </div>
        )}
      </main>

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* Edit Modal */}
      <EditModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveCard}
        initialData={editingCard}
        initialColumnId={targetColumnId}
        columns={columns}
      />

      {/* Toast Notification */}
      {showCopyMessage && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 z-[100] animate-in slide-in-from-bottom-5">
          <Check size={20} />
          <span className="font-medium">데이터 코드가 복사되었습니다! constants.ts에 붙여넣으세요.</span>
        </div>
      )}
    </div>
  );
}

export default App;
