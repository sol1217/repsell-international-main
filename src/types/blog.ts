type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};

export type Products = {
  id: number;
  title: string;
  image: string;
  paragraph: string;
  tags: string[];
  publishDate: string;
};
