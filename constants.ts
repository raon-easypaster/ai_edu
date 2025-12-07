import { CardColor, Column } from './types';

export const APP_TITLE = "AI 활용 세미나";
export const APP_DESCRIPTION = "목회와 실무를 위한 AI 도구 모음 및 강의 자료";
export const APP_AUTHOR = "Joo Class";
export const AUTHOR_LINK = "https://github.com";

// ------------------------------------------------------------------
// [수정 가이드]
// 1. 'INITIAL_COLUMNS' 배열 안에 있는 내용을 수정하면 화면에 반영됩니다.
// 2. 각 {} 블록이 하나의 세로줄(컬럼)입니다.
// 3. 컬럼 안의 'cards' 배열에 카드를 추가하거나 순서를 바꿀 수 있습니다.
// 4. url이 있으면 링크 카드가 되고, 없으면 텍스트 메모 카드가 됩니다.
// ------------------------------------------------------------------

export const INITIAL_COLUMNS: Column[] = [
  {
    id: 'col-1',
    title: 'Joo Class',
    cards: [
      {
        id: 'joo-1',
        title: '오리엔테이션 (강의안)',
        url: 'https://docs.google.com/presentation/d/1xiEeh0b-c-twoM9lipbR07mTpTfZTarzmCWowJeCr8M/edit?pli=1&slide=id.p1#slide=id.p1',
        color: CardColor.YELLOW,
        icon: '👋'
      },
      {
        id: 'joo-2',
        title: '인공지능(AI)의 이해',
        content: '어떤 AI를 사용해야 할까요?\n각 모델의 특징을 이해하면 좋습니다.\n\n• ChatGPT: 모든 분야에서 수준이 높은 육각형 AI\n• Claude: 글쓰기에 특화, 자연스러운 한국어\n• Gemini: 구글 생태계와 강력한 연동\n• Grok: 최신 뉴스 및 트렌드 반영 속도가 빠름',
        url: 'https://docs.google.com/presentation/d/1JB4F88dsRngoYZnI5jIRzXkJ01TMNjgIefs9A0-XbOk/edit?slide=id.p1#slide=id.p1',
        description: '어떤 AI를 사용해야 하는가? (강의안)',
        color: CardColor.WHITE,
        icon: '💡'
      }
    ]
  },
  {
    id: 'col-2',
    title: '생성형 AI',
    cards: [
      {
        id: 'gen-1',
        title: 'Google Gemini',
        description: '구글의 멀티모달 AI',
        url: 'https://gemini.google.com',
        color: CardColor.BLUE,
        icon: 'G'
      },
      {
        id: 'gen-2',
        title: 'ChatGPT',
        description: 'OpenAI의 대화형 AI',
        url: 'https://chat.openai.com',
        color: CardColor.GREEN,
        icon: 'O'
      },
      {
        id: 'gen-3',
        title: 'Claude 3',
        description: 'Anthropic의 글쓰기 특화 AI',
        url: 'https://claude.ai',
        color: CardColor.ORANGE,
        icon: 'C'
      },
      {
        id: 'gen-4',
        title: 'Grok (X)',
        description: '실시간 정보 반영 AI',
        url: 'https://x.com/i/grok',
        color: CardColor.WHITE,
        icon: 'X'
      },
      {
        id: 'gen-5',
        title: 'Perplexity',
        description: '출처를 제공하는 AI 검색 엔진',
        url: 'https://www.perplexity.ai',
        color: CardColor.GRAY,
        icon: '🔍'
      }
    ]
  },
  {
    id: 'col-3',
    title: 'EasyPaster Class',
    cards: [
      {
        id: 'ep-1',
        title: 'NotebookLM 바로가기',
        description: '구글 아이디로 로그인하여 사용하세요.',
        url: 'https://notebooklm.google.com',
        color: CardColor.BLUE,
        icon: '📓'
      },
      {
        id: 'ep-2',
        title: 'NotebookLM 강의 슬라이드',
        url: 'https://docs.google.com/presentation/d/14tuTd5PC1rIpJ7rNU6yrvO8DtOE86ZOX1IcGRdd9L-I/edit?slide=id.p2#slide=id.p2',
        color: CardColor.YELLOW,
        icon: 'wb_slideshow'
      }
    ]
  },
  {
    id: 'col-4',
    title: '설교도구',
    cards: [
      {
        id: 'tool-1',
        title: '설교 도구 모음 1',
        content: '1. 제미나이 3.0을 활용한 구글 슬라이드 만들기\n2. 구글 슬라이드에서 이미지 생성하기',
        color: CardColor.RED,
        icon: '🛠️'
      },
      {
        id: 'tool-2',
        title: '설교 도구 모음 2 (Tip)',
        content: 'TiP! 하나의 AI만 고집하지 마세요.\n\n[작업 워크플로우 예시]\n1. NotebookLM: 스튜디오 기능으로 브리핑 문서 만들기\n2. Gemini: 초안 작성 및 다듬기\n3. Canva: 인포그래픽 작성 및 AI 이미지 생성\n4. Github: 작성된 코드/자료 저장\n5. Obsidian: 쉐어노트 플러그인으로 웹 게시\n\n[랜딩페이지 만들기]\n1. 캔바 사용하기\n2. 옵시디언 사용하기\n3. 깃허브 사용하기\n\n*브리핑 문서는 4천자 이하로 정리하는 것이 좋습니다.',
        color: CardColor.ORANGE,
        icon: '💡'
      },
      {
        id: 'tool-3',
        title: 'Canva (캔바)',
        description: '디자인 및 인포그래픽 제작',
        url: 'https://www.canva.com',
        color: CardColor.PURPLE
      },
      {
        id: 'tool-4',
        title: 'GitHub (깃허브)',
        description: '자료 저장소 및 버전 관리',
        url: 'https://github.com',
        color: CardColor.WHITE
      },
      {
        id: 'tool-5',
        title: '설교 도구 모음 3 (영상)',
        content: '1. NotebookLM에서 브리핑 문서 만들기\n2. 제미나이에서 쇼츠용 시나리오 작성\n   Example: "쇼츠 영상을 만들려고 해. 4컷짜리 시나리오 써줘. Vrew 양식에 맞춰서 표로 정리해줘."\n3. Vrew에서 영상 자동 생성하기',
        color: CardColor.PINK,
        icon: '🎬'
      },
      {
        id: 'tool-6',
        title: 'Vrew (브루)',
        description: 'AI 영상 편집 프로그램 다운로드',
        url: 'https://vrew.voyagerx.com',
        color: CardColor.BLUE
      },
      {
        id: 'tool-7',
        title: '설교 도구 4 (음악 생성)',
        content: '[Suno AI 활용법]\n1. 가사 작사하기 (AI에게 요청)\n   "본문 내용을 바탕으로 Suno에서 쓸 수 있는 가사를 써줘. 영어 프롬프트도 같이 줘."\n2. Suno 사이트 접속\n   Create -> Custom -> Lyrics(가사) -> Style(스타일) 입력 -> Create\n3. 참고: 무료 버전은 하루 4곡 가능',
        color: CardColor.RED,
        icon: '🎵'
      },
      {
        id: 'tool-8',
        title: 'Suno AI',
        description: '음악 생성 사이트',
        url: 'https://suno.com',
        color: CardColor.RED
      },
      {
        id: 'tool-9',
        title: '설교문 수정 체크리스트',
        content: '1. 설교문 구조 분석 요청\n2. 오타 수정\n3. 더 나은 문장으로 변경 제안\n4. 논리적 장/단점 파악',
        color: CardColor.GREEN,
        icon: '✅'
      }
    ]
  },
  {
    id: 'col-5',
    title: '프롬프트 사용',
    cards: [
      {
        id: 'prompt-1',
        title: '목회자를 위한 실전 프롬프트',
        url: 'https://docs.google.com/presentation/d/1LQjtI8CvB5kvaxu9LUTaDDxhMh448oHDmAxK8WiI0UA/edit?slide=id.p12#slide=id.p12',
        color: CardColor.YELLOW,
        icon: '🔥'
      },
      {
        id: 'prompt-2',
        title: '교인 돌봄 상황별 프롬프트 30개',
        url: 'https://share.note.sx/zhf8kk3g#ZvgtgizyGxtvbRz93+Cn0+kzHffbTUmLdUwGW4zDtP0',
        color: CardColor.PINK
      },
      {
        id: 'prompt-3',
        title: '주일 설교와 예배 준비 프롬프트',
        url: 'https://share.note.sx/qf90kkza#QFQCdakjvPXvWi8zXOFVnrU2V2ExHuqERhOcyefw+8Q',
        color: CardColor.BLUE
      },
      {
        id: 'prompt-4',
        title: '내 설교 분석하고 코칭받기',
        url: 'https://share.note.sx/kad56ol9#ou/MrcILps/UIrwteDVcNKVnQFxHJoA5N0pXxy9Chl8',
        color: CardColor.GREEN
      }
    ]
  },
  {
    id: 'col-6',
    title: '옵시디언',
    cards: [
      {
        id: 'obs-1',
        title: '옵시디언 설치하기',
        url: 'https://obsidian.md',
        color: CardColor.PURPLE,
        icon: '💎'
      },
      {
        id: 'obs-2',
        title: '볼트(Vault) 샘플 다운로드',
        description: '볼트(Vault)는 모든 메모가 저장되는 가장 상위 폴더입니다. (Vault는 금고라는 뜻입니다)',
        url: 'https://drive.google.com/file/d/1XuNv3UG6hAEPbsnnjQguesfnxbaWlEgm/view?usp=share_link',
        color: CardColor.GRAY
      },
      {
        id: 'obs-3',
        title: '트리 구조 (C.O.D.E) 예시',
        description: '목회자에게 맞게 GPT와 상의하여 만든 세컨드브레인 목차 구조',
        url: 'https://padlet.com/galeb76/ai-ojb7gl4pw8rczcm1/wish/Xb8YaLX4KOVEayn1',
        color: CardColor.WHITE
      },
      {
        id: 'obs-4',
        title: '초기 세팅 및 추천 플러그인 8선',
        content: '1. Editing Toolbar: 마크다운 초보자용 툴바\n2. Note Refactor: 긴 노트 나누기\n3. File Tree Alternative: 폴더 관리\n4. Outliner: 글머리 기호 편집\n5. Recent files: 최근 파일 찾기\n6. Templater: 문서 서식 자동화\n7. Smart Composer: AI 글쓰기 도우미\n8. Share Note: 링크로 공유하기',
        color: CardColor.YELLOW
      },
      {
        id: 'obs-5',
        title: '04. 마크다운 문법 기초',
        url: 'https://share.note.sx/ayra0aes#uiHGU63Dbqv4mEsneBnxgI8B5G/5BJRAyN0eoYnQDVg',
        color: CardColor.WHITE
      },
      {
        id: 'obs-6',
        title: '05. Templater 설치 방법',
        url: 'https://share.note.sx/djenvi4z#YAuyiv6HbtQuWoXQJIr4a+EoENwWRbZcUfHl+0w1AYc',
        color: CardColor.BLUE
      },
      {
        id: 'obs-7',
        title: '06. Templater 사용법',
        url: 'https://share.note.sx/671hegts#tQWyB0GhDHzHt5M3ymZN5wJfCJFG/K9UkZpwZ7vQjSA',
        color: CardColor.BLUE
      },
      {
        id: 'obs-8',
        title: '07. Smart Composer 설치',
        url: 'https://share.note.sx/pd7h3ikk#b8ad7DOfmQHhdDJqidiaVlGeKR09tFZ5CalF9LQuSXU',
        color: CardColor.GREEN
      },
      {
        id: 'obs-9',
        title: '08. Smart Composer 사용법',
        url: 'https://share.note.sx/1qys8eb9#ZFk+QxOvs6epRx4+c5Xljxs0g5cA5HiNgcBOe2JcM2w',
        color: CardColor.GREEN
      }
    ]
  },
  {
    id: 'col-7',
    title: 'API 발급',
    cards: [
      {
        id: 'api-1',
        title: 'Google AI Studio',
        url: 'https://aistudio.google.com',
        color: CardColor.BLUE
      },
      {
        id: 'api-2',
        title: 'OpenAI API',
        url: 'https://platform.openai.com',
        color: CardColor.GREEN
      },
      {
        id: 'api-3',
        title: 'Anthropic Console (Claude)',
        url: 'https://console.anthropic.com',
        color: CardColor.ORANGE
      }
    ]
  },
  {
    id: 'col-8',
    title: '기타',
    cards: [
      {
        id: 'etc-1',
        title: 'Notion (노션)',
        description: '올인원 협업 도구',
        url: 'https://www.notion.so',
        color: CardColor.WHITE,
        icon: 'N'
      },
      {
        id: 'etc-2',
        title: '노션 사용법 가이드',
        url: 'https://docs.google.com/presentation/d/1Eo968wqlLhxZJFpQ1PjGqMTI5jyzNOr_32KqSBULo-M/edit?slide=id.p12#slide=id.p12',
        color: CardColor.WHITE
      },
      {
        id: 'etc-3',
        title: 'Padlet (패들릿)',
        url: 'https://padlet.com',
        color: CardColor.PINK,
        icon: 'P'
      }
    ]
  },
  {
    id: 'col-9',
    title: 'Youtube 관련',
    cards: [
      {
        id: 'yt-1',
        title: 'LiveWiki (라이브위키)',
        url: 'https://livewiki.com', 
        color: CardColor.RED,
        icon: '▶️'
      }
    ]
  }
];

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
};