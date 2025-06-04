import type {
  BaseEntity,
  Image,
  ApiResponse,
  SingleApiResponse,
  RichTextNode,
} from './common';

import type { LessonBasic } from './lesson';

export interface CourseBasic extends BaseEntity {
  title: string;
  slug: string;
  description: RichTextNode[];
  image?: Image;
}

export interface Course extends CourseBasic {
  lessons: LessonBasic[];
}


export type CoursesResponse = ApiResponse<Course>;


export type SingleCourseResponse = SingleApiResponse<Course>;
