export interface RichTextNode {
  type: string;
  children: Array<{
    text: string;
    type?: string;
  }>;
}

export interface Image {
  imageUrl: string | null;
}

export interface Video {
  videoUrl: string | null;
}

export interface BaseEntity {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ApiResponse<T> {
  data: T[];
  meta: {
    pagination: Pagination;
  };
}

export interface SingleApiResponse<T> {
  data: T;
  meta: {
    pagination: Pagination;
  };
}
