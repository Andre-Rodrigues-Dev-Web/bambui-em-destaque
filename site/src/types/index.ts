export interface Highlight {
  id: string;
  title: string;
  image_url: string;
  link: string;
  type: 'large' | 'small';
  share_links: {
    whatsapp?: string;
    telegram?: string;
    facebook?: string;
  };
}

export interface Photo {
  id: string;
  image_url: string;
  alt: string;
}

export interface Hotel {
  id: string;
  name: string;
  image_url: string;
  link: string;
}

export interface Event {
  id: string;
  image_url: string;
  title?: string;
}

export interface Ad {
  id: string;
  type: 'native' | 'placeholder';
  label?: string;
  image_url?: string;
  title?: string;
  description?: string;
  link?: string;
}
