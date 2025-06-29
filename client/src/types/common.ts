export interface Image {
  url: string;
}

export interface Video {
  url: string;
}

export interface BaseEntity {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ApiResponse<T> {
  data: T[];
}

export interface SingleApiResponse<T> {
  data: T;
}
