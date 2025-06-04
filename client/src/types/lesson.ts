import type {
  BaseEntity,
  RichTextNode,
  ApiResponse,
  SingleApiResponse,
  Video,
} from './common';

import type { CourseBasic } from './course';

export interface LessonBasic extends BaseEntity {
  title: string;
  slug: string;
  content: RichTextNode[];
  videoUrl?: Video;
}

export interface Lesson extends LessonBasic {
  course: CourseBasic;
}


export type LessonsResponse = ApiResponse<Lesson>;


export type SingleLessonResponse = SingleApiResponse<Lesson>;
