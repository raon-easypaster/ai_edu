import React, { useState, useMemo } from 'react';
import { Search, Plus, Github, Info, Globe } from 'lucide-react';
import BoardLayout from './components/BoardLayout';
import { INITIAL_COLUMNS, APP_TITLE, APP_DESCRIPTION, APP_AUTHOR, AUTHOR_LINK } from './constants';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter cards/columns based on search input
  const filteredColumns = useMemo(() => {
    const lowerTerm = searchTerm.toLowerCase();
    if (!lowerTerm) return INITIAL_COLUMNS;

    return INITIAL_COLUMNS.map(col => ({
      ...col,
      cards: col.cards.filter(card => 
        card.title.toLowerCase().includes(lowerTerm) ||
        card.description?.toLowerCase().includes(lowerTerm) ||
        card.content?.toLowerCase().includes(lowerTerm)
      )
    })).filter(col => col.cards.length > 0); // Hide empty columns during search
  }, [searchTerm]);

  const handleAddClick = () => {
    alert("이 보드는 깃허브를 통해 관리됩니다.\n\n1. 'constants.ts' 파일에서 내용을 수정하세요.\n2. 수정 후 GitHub에 푸시하면 변경사항이 반영됩니다.\n(빌드 및 배포 과정이 필요합니다)");
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden text-white/90 selection:bg-pink-500 selection:text-white bg-[#1C1F26]">
      {/* Navigation / Header */}
      <header className="shrink-0 z-50 bg-[#1C1F26]/95 backdrop-blur-md border-b border-white/10 shadow-sm relative">
        <div className="max-w-[100vw] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Logo / Title */}
          <div className="flex items-center gap-3 min-w-0 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0">
              AI
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none truncate">{APP_TITLE}</h1>
              <span className="text-xs text-gray-400 leading-none mt-1 hidden sm:block">{APP_DESCRIPTION}</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-sm relative group mx-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-1.5 border border-white/10 rounded-full leading-5 bg-white/5 text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-all"
              placeholder="검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
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
              onClick={handleAddClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-lg flex items-center gap-1.5"
            >
              <Plus size={16} />
              <span className="hidden sm:inline">추가/수정</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content (Board) */}
      <main className="flex-1 min-h-0 pt-6">
        {filteredColumns.length > 0 ? (
          <BoardLayout columns={filteredColumns} />
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
    </div>
  );
}

export default App;