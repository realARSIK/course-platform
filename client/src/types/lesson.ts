import type {
  BaseEntity,
  ApiResponse,
  SingleApiResponse,
  Video,
} from './common';

import type { CourseBasic } from './course';

export interface LessonBasic extends BaseEntity {
  title: string;
  slug: string;
  content: unknown;
  video: Video;
}

export interface Lesson extends LessonBasic {
  course: CourseBasic;
}


export type LessonsResponse = ApiResponse<Lesson>;


export type SingleLessonResponse = SingleApiResponse<Lesson>;
