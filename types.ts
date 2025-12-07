export enum CardColor {
  WHITE = 'white',
  RED = 'red',
  ORANGE = 'orange',
  YELLOW = 'yellow',
  GREEN = 'green',
  BLUE = 'blue',
  PURPLE = 'purple',
  PINK = 'pink',
  GRAY = 'gray'
}

export interface LinkCard {
  id: string;
  title: string;
  content?: string; // 긴 텍스트 내용 (줄바꿈 포함)
  description?: string; // 짧은 설명
  url?: string; // 클릭 시 이동할 주소
  imageUrl?: string; 
  icon?: string; 
  color: CardColor;
  tags?: string[];
  dateAdded?: string;
}

export interface Column {
  id: string;
  title: string;
  cards: LinkCard[];
}