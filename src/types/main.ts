export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;

  phone?: string;
  website?: string;

  address?: {
    city?: string;
    street?: string;
  };

  company?: {
    name?: string;
  };
};
