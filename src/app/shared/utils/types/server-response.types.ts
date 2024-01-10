export interface ListInterface {
  data: PostInterface | UserPreviewInterface | CommentInterface[];
  total: number;
  page: number;
  limit: number;
}

export interface UserPreviewInterface {
  id: string;
  title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
  firstName: string;
  lastName: string;
  picture: string;
}

export interface PostCreateInterface {
  text: string;
  image: string;
  likes: number;
  tags: string[];
  owner: string;
}

export interface PostPreviewInterface {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: string;
  owner: UserPreviewInterface;
}

export interface PostInterface {
  id: string;
  text: string;
  image: string;
  likes: number;
  link: string;
  tags: string[];
  publishDate: string;
  owner: UserPreviewInterface;
}

export interface CommentCreateInterface {
  message: string;
  owner: string;
  post: string;
}

export interface CommentInterface {
  id: string;
  message: string;
  owner: UserPreviewInterface;
  post: string;
  publishDate: string;
}
