export interface BentoItem {
  id: string;
  href?: string;
  size?: 'default' | 'sm' | 'md-w' | 'md-h' | 'xl';
  iconId?: string;
  imageId?: string;
  buttonText?: string;
  children: string;
}

export interface BentoSectionData {
  id: string;
  title: string;
  items: BentoItem[];
}

